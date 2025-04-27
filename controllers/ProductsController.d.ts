import { ProductDto } from '../models/ProductDto';
export declare class ProductsController {
    getProductsList(): Promise<ProductDto[]>;
    getProductsById(productId: string): Promise<ProductDto[]>;
}
