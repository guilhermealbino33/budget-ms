import { inject, injectable } from 'tsyringe';
import { IProductsRepository } from '../repositories/IProductsRepository';
import { Product } from '../../shared/entities/Product';
import Page from '../../shared/types/page';
import ValidationError from '../../../crosscutting/infra/errors/ValidationError';
import { SortProducts } from '../enums/SortProducts';
import { isSortParamValid } from '../../shared/utils/sort';

@injectable()
export class GetProductUseCase {
  constructor(@inject('ProductsRepository') private productsRepository: IProductsRepository) {}

  async execute({ page, limit, name, sortBy }: IRequestParams): Promise<Page<IResponseBodyContent>> {
    if (sortBy && !isSortParamValid(sortBy, SortProducts)) {
      throw new ValidationError('Invalid sort param!');
    }

    const products: Page<Product> = await this.productsRepository.getPaginatedProducts({ page, limit, name, sortBy });

    return this.toDTO(products);
  }

  private toDTO(paginatedProducts: Page<Product>): Page<IResponseBodyContent> {
    const content: IResponseBodyContent[] = [];
    paginatedProducts.content.forEach(product => {
      content.push({
        id: product.getProps.id || '',
        name: product.getProps.name || '(Empty)',
        code: product.getProps.code || '(Empty)',
        createdAt: product.getProps.createdAt || undefined,
        updatedAt: product.getProps.updatedAt || undefined,
      });
    });

    const dto: Page<IResponseBodyContent> = {
      page: paginatedProducts.page,
      totalPages: paginatedProducts.totalPages,
      totalDocuments: paginatedProducts.totalDocuments,
      content,
    };
    return dto;
  }
}

export interface IRequestParams {
  page?: number;
  limit?: number;
  name?: string;
  code?: string;
  sortBy?: SortProducts;
}

export interface IResponseBodyContent {
  id?: string;
  name: string;
  code: string;
  createdAt?: Date;
  updatedAt?: Date;
}
