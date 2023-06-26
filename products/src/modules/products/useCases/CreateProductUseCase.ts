import { inject, injectable } from 'tsyringe';
import { IProductsRepository } from '../repositories/IProductsRepository';
import ValidationError from '../../../crosscutting/infra/errors/ValidationError';

@injectable()
export class CreateProductUseCase {
  constructor(@inject('ProductsRepository') private productsRepository: IProductsRepository) {}

  async execute({ name, categoryId, code }: IRequest) {
    const product = this.productsRepository.findByCode(code);

    if (product) {
      throw new ValidationError(`Product code: ${code} already exists!`, 409);
    }

    await this.productsRepository.create({ name, categoryId, code });
  }
}

interface IRequest {
  name: string;
  categoryId: string;
  code: string;
}
