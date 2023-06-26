import { Router } from "express";
import { createProductHandler } from "../controllers/productsController";

export const productsRoutes = (): Router => {
  const router = Router();

  router.post("/", createProductHandler);

  return router;
};
