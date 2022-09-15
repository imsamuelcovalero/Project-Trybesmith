import { Pool, ResultSetHeader } from 'mysql2/promise';
import { ILogin } from '../interfaces/login.interface';
import { IUser } from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: IUser): Promise<IUser> {
    const { username, classe, level, password } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }

  public async getByUsername(username: string, password: string): Promise<ILogin[]> {
    const result = await this.connection.execute(
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
      [username, password],
    );

    const [data] = result;
    return data as ILogin[];
  }

  public async getById(id: number): Promise<IUser> {
    const result = await this.connection.execute(
      'SELECT * FROM Trybesmith.Users WHERE id = ?',
      [id],
    );

    const [data] = result;
    return data as unknown as IUser;
  }
}