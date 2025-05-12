import { ProductDto } from '../models/ProductDto';
export declare class ProductsController {
    getProductsList(): Promise<ProductDto[]>;
    getProductsAvailableList(): Promise<ProductDto[]>;
    getProductsById(productId: string): Promise<ProductDto[]>;
}
