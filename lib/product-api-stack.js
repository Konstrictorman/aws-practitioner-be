"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductApiStack = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const lambda = require("aws-cdk-lib/aws-lambda");
const path = require("path");
const apigateway = require("aws-cdk-lib/aws-apigateway");
class ProductApiStack extends aws_cdk_lib_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const getProductsList = new lambda.Function(this, 'getProductsList', {
            code: lambda.Code.fromAsset(path.join(__dirname, '../lambdas/products/')),
            handler: 'productsApi.getProductsList',
            runtime: lambda.Runtime.NODEJS_18_X,
            memorySize: 1024,
            timeout: aws_cdk_lib_1.Duration.seconds(5),
        });
        const getProductById = new lambda.Function(this, 'getProductById', {
            code: lambda.Code.fromAsset(path.join(__dirname, '../lambdas/products/')),
            handler: 'productsApi.getProductsById',
            runtime: lambda.Runtime.NODEJS_18_X,
            memorySize: 1024,
            timeout: aws_cdk_lib_1.Duration.seconds(5),
        });
        const api = new apigateway.RestApi(this, 'Products-end-point', {
            restApiName: 'Toy Store Gateway [Products]',
            description: 'This API serves the Lambda functions for products.',
        });
        const lambdaIntegration = new apigateway.LambdaIntegration(getProductsList, {});
        const productsResource = api.root.addResource('products');
        const productByIdResource = productsResource.addResource('{productId}');
        productsResource.addCorsPreflight({
            allowOrigins: ['*'], // 👈 or ['https://your-frontend.com'] in prod
            allowMethods: ['GET'], // or ['GET', 'POST', 'OPTIONS']
        });
        productByIdResource.addCorsPreflight({
            allowOrigins: ['*'],
            allowMethods: ['GET'],
        });
        productsResource.addMethod('GET', lambdaIntegration);
        productByIdResource.addMethod('GET', new apigateway.LambdaIntegration(getProductById));
    }
}
exports.ProductApiStack = ProductApiStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1hcGktc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0LWFwaS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBMEQ7QUFFMUQsaURBQWlEO0FBQ2pELDZCQUE2QjtBQUU3Qix5REFBeUQ7QUFFekQsTUFBYSxlQUFnQixTQUFRLG1CQUFLO0lBQ3pDLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBa0I7UUFDM0QsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSxlQUFlLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRTtZQUNwRSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztZQUN6RSxPQUFPLEVBQUUsNkJBQTZCO1lBQ3RDLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsVUFBVSxFQUFFLElBQUk7WUFDaEIsT0FBTyxFQUFFLHNCQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUM1QixDQUFDLENBQUM7UUFFSCxNQUFNLGNBQWMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGdCQUFnQixFQUFFO1lBQ2xFLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1lBQ3pFLE9BQU8sRUFBRSw2QkFBNkI7WUFDdEMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxVQUFVLEVBQUUsSUFBSTtZQUNoQixPQUFPLEVBQUUsc0JBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQzVCLENBQUMsQ0FBQztRQUVILE1BQU0sR0FBRyxHQUFHLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7WUFDOUQsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxXQUFXLEVBQUUsb0RBQW9EO1NBQ2pFLENBQUMsQ0FBQztRQUVILE1BQU0saUJBQWlCLEdBQUcsSUFBSSxVQUFVLENBQUMsaUJBQWlCLENBQ3pELGVBQWUsRUFDZixFQUFFLENBQ0YsQ0FBQztRQUVGLE1BQU0sZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUQsTUFBTSxtQkFBbUIsR0FBRyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFeEUsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUM7WUFDakMsWUFBWSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsOENBQThDO1lBQ25FLFlBQVksRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLGdDQUFnQztTQUN2RCxDQUFDLENBQUM7UUFFSCxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQztZQUNwQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDbkIsWUFBWSxFQUFFLENBQUMsS0FBSyxDQUFDO1NBQ3JCLENBQUMsQ0FBQztRQUVILGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUNyRCxtQkFBbUIsQ0FBQyxTQUFTLENBQzVCLEtBQUssRUFDTCxJQUFJLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FDaEQsQ0FBQztJQUNILENBQUM7Q0FDRDtBQWpERCwwQ0FpREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEdXJhdGlvbiwgU3RhY2ssIFN0YWNrUHJvcHMgfSBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtbGFtYmRhJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBOb2RlanNGdW5jdGlvbiB9IGZyb20gJ2F3cy1jZGstbGliL2F3cy1sYW1iZGEtbm9kZWpzJztcbmltcG9ydCAqIGFzIGFwaWdhdGV3YXkgZnJvbSAnYXdzLWNkay1saWIvYXdzLWFwaWdhdGV3YXknO1xuXG5leHBvcnQgY2xhc3MgUHJvZHVjdEFwaVN0YWNrIGV4dGVuZHMgU3RhY2sge1xuXHRjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IFN0YWNrUHJvcHMpIHtcblx0XHRzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuXHRcdGNvbnN0IGdldFByb2R1Y3RzTGlzdCA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgJ2dldFByb2R1Y3RzTGlzdCcsIHtcblx0XHRcdGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldChwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vbGFtYmRhcy9wcm9kdWN0cy8nKSksXG5cdFx0XHRoYW5kbGVyOiAncHJvZHVjdHNBcGkuZ2V0UHJvZHVjdHNMaXN0Jyxcblx0XHRcdHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xOF9YLFxuXHRcdFx0bWVtb3J5U2l6ZTogMTAyNCxcblx0XHRcdHRpbWVvdXQ6IER1cmF0aW9uLnNlY29uZHMoNSksXG5cdFx0fSk7XG5cblx0XHRjb25zdCBnZXRQcm9kdWN0QnlJZCA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgJ2dldFByb2R1Y3RCeUlkJywge1xuXHRcdFx0Y29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi9sYW1iZGFzL3Byb2R1Y3RzLycpKSxcblx0XHRcdGhhbmRsZXI6ICdwcm9kdWN0c0FwaS5nZXRQcm9kdWN0c0J5SWQnLFxuXHRcdFx0cnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE4X1gsXG5cdFx0XHRtZW1vcnlTaXplOiAxMDI0LFxuXHRcdFx0dGltZW91dDogRHVyYXRpb24uc2Vjb25kcyg1KSxcblx0XHR9KTtcblxuXHRcdGNvbnN0IGFwaSA9IG5ldyBhcGlnYXRld2F5LlJlc3RBcGkodGhpcywgJ1Byb2R1Y3RzLWVuZC1wb2ludCcsIHtcblx0XHRcdHJlc3RBcGlOYW1lOiAnVG95IFN0b3JlIEdhdGV3YXkgW1Byb2R1Y3RzXScsXG5cdFx0XHRkZXNjcmlwdGlvbjogJ1RoaXMgQVBJIHNlcnZlcyB0aGUgTGFtYmRhIGZ1bmN0aW9ucyBmb3IgcHJvZHVjdHMuJyxcblx0XHR9KTtcblxuXHRcdGNvbnN0IGxhbWJkYUludGVncmF0aW9uID0gbmV3IGFwaWdhdGV3YXkuTGFtYmRhSW50ZWdyYXRpb24oXG5cdFx0XHRnZXRQcm9kdWN0c0xpc3QsXG5cdFx0XHR7fVxuXHRcdCk7XG5cblx0XHRjb25zdCBwcm9kdWN0c1Jlc291cmNlID0gYXBpLnJvb3QuYWRkUmVzb3VyY2UoJ3Byb2R1Y3RzJyk7XG5cdFx0Y29uc3QgcHJvZHVjdEJ5SWRSZXNvdXJjZSA9IHByb2R1Y3RzUmVzb3VyY2UuYWRkUmVzb3VyY2UoJ3twcm9kdWN0SWR9Jyk7XG5cblx0XHRwcm9kdWN0c1Jlc291cmNlLmFkZENvcnNQcmVmbGlnaHQoe1xuXHRcdFx0YWxsb3dPcmlnaW5zOiBbJyonXSwgLy8g8J+RiCBvciBbJ2h0dHBzOi8veW91ci1mcm9udGVuZC5jb20nXSBpbiBwcm9kXG5cdFx0XHRhbGxvd01ldGhvZHM6IFsnR0VUJ10sIC8vIG9yIFsnR0VUJywgJ1BPU1QnLCAnT1BUSU9OUyddXG5cdFx0fSk7XG5cblx0XHRwcm9kdWN0QnlJZFJlc291cmNlLmFkZENvcnNQcmVmbGlnaHQoe1xuXHRcdFx0YWxsb3dPcmlnaW5zOiBbJyonXSxcblx0XHRcdGFsbG93TWV0aG9kczogWydHRVQnXSxcblx0XHR9KTtcblxuXHRcdHByb2R1Y3RzUmVzb3VyY2UuYWRkTWV0aG9kKCdHRVQnLCBsYW1iZGFJbnRlZ3JhdGlvbik7XG5cdFx0cHJvZHVjdEJ5SWRSZXNvdXJjZS5hZGRNZXRob2QoXG5cdFx0XHQnR0VUJyxcblx0XHRcdG5ldyBhcGlnYXRld2F5LkxhbWJkYUludGVncmF0aW9uKGdldFByb2R1Y3RCeUlkKVxuXHRcdCk7XG5cdH1cbn1cbiJdfQ==