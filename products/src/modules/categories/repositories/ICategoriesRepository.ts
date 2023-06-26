import { Category, CategoryProps } from '../../shared/entities/Category';

export interface ICategoriesRepository {
  create(category: CategoryProps): Promise<void>;
  findByCode(code: string): Promise<Category | null>;
}
