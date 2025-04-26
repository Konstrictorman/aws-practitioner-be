import { Product } from '../models/Product';
export declare const mockProducts: Product[];
export declare function getProductsListService(): Promise<Product[] | undefined>;
export declare function getProductsByIdService(productId: string): Promise<Product[] | undefined>;
