import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IOrder } from '../interfaces/order.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(order: IOrder): Promise<IOrder> {
    const { username, classe, level, password } = order;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...order };
  }
}