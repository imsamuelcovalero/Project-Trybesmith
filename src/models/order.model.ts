import { Pool } from 'mysql2/promise';
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
    // console.log('data', data);

    return data as IOrder[];
  }
}