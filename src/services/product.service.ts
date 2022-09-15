import connection from '../models/connection';
import ProductModel from '../models/product.model';
import { IProduct } from '../interfaces/product.interface';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public newProduct(product: IProduct): Promise<IProduct> {
    return this.model.create(product);
  }

  public getAllProducts(): Promise<IProduct[]> {
    const products = this.model.getAll();
    return products;
  }
}

export default ProductService;