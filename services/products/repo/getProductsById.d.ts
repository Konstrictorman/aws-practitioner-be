import { Product } from '../../../models/Product';
export declare const getProductsById: (productId: string) => Promise<Product[] | undefined>;
