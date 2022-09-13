import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middlewares/error.middleware';
import productRouters from './routers/products.route';

const app = express();

app.use(express.json());

app.use('/products', productRouters);

app.use(errorMiddleware);

export default app;
