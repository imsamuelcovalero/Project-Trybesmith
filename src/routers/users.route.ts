import { Router } from 'express';
import UserController from '../controllers/user.controller';
import validators from '../middlewares/validators';

const routers = Router();

const userController = new UserController();

routers.post('/', validators.validateNewUser, userController.create);
// routers.get('/', userController.getAll);

export default routers;