import { Router } from 'express';
import OrderController from '../controllers/order.controller';

const routers = Router();

const orderController = new OrderController();

routers.get('/', orderController.getAll);

export default routers;