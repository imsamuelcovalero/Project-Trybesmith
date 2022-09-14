import { Router } from 'express';
import ProductController from '../controllers/product.controller';
import validators from '../middlewares/validators';

const routers = Router();

const productController = new ProductController();

routers.post('/', validators.validateNewProduct, productController.create);
routers.get('/', productController.getAll);

export default routers;