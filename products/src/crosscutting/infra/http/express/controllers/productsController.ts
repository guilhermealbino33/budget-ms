import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateProductUseCase } from '../../../../../modules/products/useCases/CreateProductUseCase';

export async function createProductHandler(request: Request, response: Response) {
  const { name, categoryId, code } = request.body;

  const createProductUseCase = container.resolve(CreateProductUseCase);
  const product = await createProductUseCase.execute({
    name,
    categoryId,
    code,
  });

  return response.status(201).json(product);
}
