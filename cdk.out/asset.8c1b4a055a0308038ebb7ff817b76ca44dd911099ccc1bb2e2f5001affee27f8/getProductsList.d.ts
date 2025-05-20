import { Product } from '../../models/Product';
export declare const mockProducts: Product[];
export declare function main(): Promise<{
    statusCode: number;
    body: string;
    headers: {
        'Content-Type': string;
        'Access-Control-Allow-Origin': string;
        'Access-Control-Allow-Credentials': boolean;
    };
}>;
