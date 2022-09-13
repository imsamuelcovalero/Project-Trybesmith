import connection from '../models/connection';
import UserModel from '../models/user.model';
import { User } from '../interfaces/user.interface';
// import CustomError from '../errors/CustomError';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public newUser(user: User): Promise<User> {
    return this.model.create(user);
  }
}

export default UserService;