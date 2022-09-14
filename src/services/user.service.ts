import connection from '../models/connection';
import UserModel from '../models/user.model';
import { IUser } from '../interfaces/user.interface';
// import CustomError from '../errors/CustomError';
import generateToken from '../middlewares/tokenGenerator';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async newUser(user: IUser): Promise<string> {
    await this.model.create(user);
    const token = generateToken(user);
    return token;
  }
}

export default UserService;