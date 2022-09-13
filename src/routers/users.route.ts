import { Router } from 'express';
import UserController from '../controllers/user.controller';
// import { validate } from '../middlewares/validate.middleware';

const routers = Router();

const userController = new UserController();

routers.post('/', userController.create);
// routers.get('/', userController.getAll);

export default routers;