import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Ms-products is running on port:${port}`);
});
