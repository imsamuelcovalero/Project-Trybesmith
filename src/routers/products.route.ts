import { Router } from 'express';
import ProductController from '../controllers/product.controller';
// import { validate } from '../middlewares/validate.middleware';

const routers = Router();

const productController = new ProductController();

routers.post('/', productController.create);

export default routers;