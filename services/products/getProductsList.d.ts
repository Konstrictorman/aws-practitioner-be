export declare const main: () => Promise<{
    statusCode: number;
    headers: {
        'Content-Type': string;
        'Access-Control-Allow-Origin': string;
        'Access-Control-Allow-Credentials': boolean;
        'Access-Control-Allow-Methods': string;
    };
    body: string;
}>;
