import { Category, CategoryProps } from '../../../shared/entities/Category';
import { ICategoriesRepository } from '../ICategoriesRepository';
import { prisma } from '../../../../../prisma/prisma';

export default class CategoriesRepository implements ICategoriesRepository {
  async findByCode(code: string): Promise<Category | null> {
    const category: CategoryProps | null = await prisma.category.findUnique({
      where: {
        code,
      },
    });

    if (!category) {
      return null;
    }

    return new Category(category);
  }

  async create(category: CategoryProps): Promise<void> {
    await prisma.category.create({
      data: {
        name: category.name,
        code: category.code,
      },
    });
  }
}
