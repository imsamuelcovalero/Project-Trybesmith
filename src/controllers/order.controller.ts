import { Request, Response } from 'express';
import OrderService from '../services/order.service';
import { IGetUserAuthInfoRequest } from '../interfaces/decoded.interface';
import CustomError from '../errors/CustomError';

class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.orderService.getAllOrders();
    console.log('orders', orders);

    res.status(200).json(orders);
  };

  // cria uma função para adicionar uma nova ordem
  public create = async (req: Request, res: Response) => {
    // console.log('controller body', (req as IGetUserAuthInfoRequest).user);
    const { id: userId } = (req as IGetUserAuthInfoRequest).user;
    console.log('req.body', req.body);
    const { productsIds } = req.body;
    if (productsIds.length === 0) {
      throw new CustomError(422, '"productsIds" must include only numbers');
    }

    const newOrder = await this.orderService.newOrder(userId, productsIds);
    console.log('newOrder', newOrder);

    res.status(201).json(newOrder);
    // const order = await this.orderService.newOrder(req.body);
    // res.status(201).json(order);
  };
}

export default OrderController;