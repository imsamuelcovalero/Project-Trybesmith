import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import Validators from '../middlewares/validators';

const routers = Router();

const loginController = new LoginController();

routers.post('/', Validators.validateLogin, loginController.login);

export default routers;