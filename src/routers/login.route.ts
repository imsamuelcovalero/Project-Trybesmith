import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import validators from '../middlewares/validators';

const routers = Router();

const loginController = new LoginController();

routers.post('/', validators.validateLogin, loginController.login);

export default routers;