import { Pool, ResultSetHeader } from 'mysql2/promise';
import { ILogin } from '../interfaces/login.interface';
import { IUser } from '../interfaces/user.interface';

export default class UserModel {
  // static getById(_id: any) {
  //   throw new Error('Method not implemented.');
  // }

  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: IUser): Promise<IUser> {
    // console.log('entrou', user);

    const { username, classe, level, password } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }

  // procura o usuário pelo username e o password, verifica se estão no banco de dados
  public async getByUsername(username: string, password: string): Promise<ILogin[]> {
    const result = await this.connection.execute(
      'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
      [username, password],
    );
    // console.log('result', result);

    const [data] = result;
    console.log('data', data);
    // const [data] = BinaryRow;
    // console.log('data', BinaryRow);

    return data as ILogin[];
  }

  // procura o usuário pelo id
  public async getById(id: number): Promise<IUser> {
    const result = await this.connection.execute(
      'SELECT * FROM Trybesmith.Users WHERE id = ?',
      [id],
    );
    const [data] = result;
    console.log('data', data);

    return data as unknown as IUser;
  }
}