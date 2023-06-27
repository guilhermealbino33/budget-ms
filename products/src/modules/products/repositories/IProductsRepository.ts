import { Product, ProductProps } from '../../../modules/shared/entities/Product';
import Page from '../../shared/types/page';
import { SortProducts } from '../enums/SortProducts';

export interface IGetPaginatedProductsParams {
  page?: number;
  limit?: number;
  name?: string;
  code?: string;
  sortBy?: SortProducts;
}
export interface IProductsRepository {
  findByCode(code: string): Promise<Product | null>;
  getPaginatedProducts(params: IGetPaginatedProductsParams): Promise<Page<Product>>;
  create(product: ProductProps): Promise<void>;
}
