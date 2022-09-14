import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middlewares/error.middleware';
import productRouters from './routers/products.route';
import userRouters from './routers/users.route';
import orderRouters from './routers/orders.route';

const app = express();

app.use(express.json());

app.use('/products', productRouters);
app.use('/users', userRouters);
app.use('/orders', orderRouters);

app.use(errorMiddleware);

export default app;
