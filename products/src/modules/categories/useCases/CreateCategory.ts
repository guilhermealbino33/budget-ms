import { inject, injectable } from 'tsyringe';
import { ICategoriesRepository } from '../repositories/ICategoriesRepository';
import ValidationError from '../../../crosscutting/infra/errors/ValidationError';

@injectable()
export class CreateCategoryUseCase {
  constructor(@inject('CategoriesRepository') private categoriesRepository: ICategoriesRepository) {}

  async execute({ name, code }: IRequest) {
    const category = this.categoriesRepository.findByCode(code);

    if (category) {
      throw new ValidationError(`Category code: ${code} already exists!`, 409);
    }

    await this.categoriesRepository.create({ name, code });
  }
}

interface IRequest {
  name: string;
  code: string;
}
