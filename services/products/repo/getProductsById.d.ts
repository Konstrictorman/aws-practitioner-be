import { ProductDto } from '../../../models/ProductDto';
export declare const getProductsById: (productId: string) => Promise<ProductDto[] | undefined>;
