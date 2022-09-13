export interface Order {
  id?: number;
  userId: number;
}

export interface OrderController {
  create(): Promise<Order>;
}