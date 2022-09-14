// cria o service do login
import connection from '../models/connection';
import UserModel from '../models/user.model';
import { ILogin, IToken } from '../interfaces/login.interface';
import generateToken from '../middlewares/tokenGenerator';
import CustomError from '../errors/CustomError';

class LoginService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async login(login: ILogin): Promise<IToken> {
    const { username, password } = login;
    const user = await this.model.getByUsername(username, password);
    if (user.length === 0) {
      throw new CustomError(401, 'Username or password invalid');
    }
    const token = await generateToken(user);
    return { token };
  }
}

export default LoginService;