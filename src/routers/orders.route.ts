import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import validators from '../middlewares/validators';
import tokenValidator from '../middlewares/tokenFunctions';

const routers = Router();

const orderController = new OrderController();

routers.get('/', orderController.getAll);
routers.post(
  '/',
  /* tokenValidator.auth, */
  tokenValidator.decode,
  validators.validateNewOrder,
  orderController.create,
);

export default routers;