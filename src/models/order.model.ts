import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IOrder } from '../interfaces/order.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrder[]> {
    const result = await this.connection.execute(
      `SELECT o.id AS id, o.userId AS userId, JSON_ARRAYAGG(p.id) AS productsIds
      FROM Trybesmith.Orders AS o
      INNER JOIN Trybesmith.Products AS p
      ON o.id = p.orderId
      GROUP BY o.id
      ORDER BY userId;`,
    );

    const [data] = result;

    return data as IOrder[];
  }

  public async create(userId: number, productsIds: Array<number>): Promise<IOrder[]> {
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?);',
      [userId],
    );

    const [data] = result;
    const { insertId } = data;
    console.log('productsIds', productsIds);

    productsIds.map(async (productId) => {
      await this.connection.execute<ResultSetHeader>(
        'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?;',
        [insertId, productId],
      );
    });

    const newOrder = { userId, productsIds };

    return newOrder as unknown as IOrder[];
  }
}