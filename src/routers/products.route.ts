import { Router } from 'express';
import productController from './controllers/product.controller';

const routers = Router();

routers.use('/', productController);

export default routers;