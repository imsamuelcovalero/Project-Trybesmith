export interface Product {
  id?: number;
  name: string;
  ammount: number;
  orderId: number;
}

// export default Product;

export interface ProductController {
  create(): Promise<Product>;
  list(): Promise<Product[]>;
  getById(id: number): Promise<Product>;
  update(id: number): Promise<Product>;
  delete(id: number): Promise<Product>;
}