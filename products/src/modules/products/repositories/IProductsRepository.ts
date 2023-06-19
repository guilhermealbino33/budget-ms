import { Product, ProductProps } from '../../../modules/shared/entities/Product';

export interface IProductsRepository {
  findByCode(code: string): Promise<Product | null>;
  create(product: ProductProps): Promise<void>;
}
