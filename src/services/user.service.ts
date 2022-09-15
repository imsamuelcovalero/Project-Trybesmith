import connection from '../models/connection';
import UserModel from '../models/user.model';
import { IUser } from '../interfaces/user.interface';
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

  // cria uma função para procurar um usuário pelo id
  public async getUserById(id: number): Promise<IUser> {
    const user = this.model.getById(id);
    return user;
  }
}

export default UserService;