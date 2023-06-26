import express from 'express';
import { setupRoutes } from './routes';
import { errorHandling } from '../middlewares/errorHandling';

const app = express();
//setupMiddlewares(app);
setupRoutes(app);
app.use(errorHandling);
export { app };
