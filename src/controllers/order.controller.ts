import { Request, Response } from 'express';
import OrderService from '../services/order.service';
import { IGetUserAuthInfoRequest } from '../interfaces/decoded.interface';

class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAllOrders();

    res.status(200).json(orders);
  };

  public create = async (req: Request, res: Response) => {
    console.log('xablau', (req as IGetUserAuthInfoRequest).user);

    const { id: userId } = (req as IGetUserAuthInfoRequest).user;
    const { productsIds } = req.body;

    const newOrder = await this.orderService.newOrder(userId, productsIds);

    res.status(201).json(newOrder);
  };
}

export default OrderController;