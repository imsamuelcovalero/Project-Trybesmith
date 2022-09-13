import { Request, Response } from 'express';
// import { StatusCodes } from 'http-status-codes';
import UserService from '../services/user.service';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response)/* : Promise<Response> */ => {
    const token = await this.userService.newUser(req.body);
    res.status(201).json(token);
  };

  // public getAll = async (req: Request, res: Response) => {
  //   const users = await this.userService.getAllUsers();
  //   res.status(200).json(users);
  // };
}

export default UserController;