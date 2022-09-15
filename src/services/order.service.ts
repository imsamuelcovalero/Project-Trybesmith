import connection from '../models/connection';
import OrderModel from '../models/order.model';
import { IOrder } from '../interfaces/order.interface';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAllOrders(): Promise<IOrder[]> {
    const orders = this.model.getAll();
    return orders;
  }

  // cria uma função para adicionar uma nova ordem
  public async newOrder(id: number, productsIds: Array<number>): Promise<IOrder[]> {
    console.log('productsIds', productsIds);

    const newOrder = this.model.create(id, productsIds);
    return newOrder;
  }
}

export default OrderService;