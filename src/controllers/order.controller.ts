import { Request, Response } from 'express';
import OrderService from '../services/order.service';

class OrderController {
  constructor(private orderService = new OrderService()) { }

  // public create = async (req: Request, res: Response) => {
  //   const order = await this.orderService.newOrder(req.body);
  //   res.status(201).json(product);
  // };

  public getAll = async (req: Request, res: Response) => {
    const orders = await this.orderService.getAllOrders();
    console.log('orders', orders);

    res.status(200).json(orders);
  };
}

export default OrderController;