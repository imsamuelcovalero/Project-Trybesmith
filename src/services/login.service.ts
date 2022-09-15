import connection from '../models/connection';
import UserModel from '../models/user.model';
import { ILogin } from '../interfaces/login.interface';
import tokenValidator from '../middlewares/tokenFunctions';
import CustomError from '../errors/CustomError';

class LoginService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async login(login: ILogin): Promise<string> {
    const { username, password } = login;
    const user = await this.model.getByUsername(username, password);
    if (user.length === 0) {
      throw new CustomError(401, 'Username or password invalid');
    }
    console.log('userService', user);

    const token = await tokenValidator.generateToken(user[0]);
    return token;
  }
}

export default LoginService;