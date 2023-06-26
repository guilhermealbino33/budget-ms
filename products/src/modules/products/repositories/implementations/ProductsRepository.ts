import { prisma } from '../../../../../prisma/prisma';
import { Product, ProductProps } from '../../../shared/entities/Product';
import { IProductsRepository } from '../IProductsRepository';

export default class ProductsRepository implements IProductsRepository {
  async findByCode(code: string): Promise<Product | null> {
    const product: ProductProps | null = await prisma.product.findUnique({
      where: {
        code,
      },
    });

    if (!product) {
      return null;
    }

    return new Product(product);
  }

  async create(product: ProductProps): Promise<void> {
    const { categoryId, ...productWithoutForeignId } = product;

    await prisma.product.create({
      data: {
        ...productWithoutForeignId,
        category: {
          connect: {
            id: product.categoryId,
          },
        },
      },
    });
  }
}
