import { Request, Response } from 'express';
import UserService from '../services/user.service';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const token = await this.userService.newUser(req.body);

    res.status(201).json({ token });
  };
}

export default UserController;