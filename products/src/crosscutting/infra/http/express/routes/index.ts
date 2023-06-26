import { Router, Express } from "express";
import { productsRoutes } from "./products";

export const setupRoutes = (app: Express): void => {
  const router = Router();
  app.use("/api", router);
  router.use("/products", productsRoutes());
};
