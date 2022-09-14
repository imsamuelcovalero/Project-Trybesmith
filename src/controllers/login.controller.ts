// cria um controller para o login

import { Request, Response } from 'express';
import LoginService from '../services/login.service';

class LoginController {
  constructor(private loginService = new LoginService()) { }

  public login = async (req: Request, res: Response) => {
    console.log('entrou', req.body);

    const token = await this.loginService.login(req.body);
    console.log('token', token);

    res.status(200).json({ token });
  };
}

export default LoginController;
