import { NextFunction, Request, Response } from 'express';

export const errorHandling = (err: Error | any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
};
