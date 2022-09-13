import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Product } from '../interfaces/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: Product): Promise<Product> {
    const { name, ammount, orderId } = product;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO products (name, ammount, orderId) VALUES (?, ?, ?)',
      [name, ammount, orderId],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }
}