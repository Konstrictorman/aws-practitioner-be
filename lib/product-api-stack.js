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
            code: lambda.Code.fromAsset(path.join(__dirname, '../services/products/')),
            handler: 'getProductsList.main',
            runtime: lambda.Runtime.NODEJS_18_X,
            memorySize: 1024,
            timeout: aws_cdk_lib_1.Duration.seconds(5),
        });
        const getProductById = new lambda.Function(this, 'getProductById', {
            code: lambda.Code.fromAsset(path.join(__dirname, '../services/products/')),
            handler: 'getProductsById.main',
            runtime: lambda.Runtime.NODEJS_18_X,
            memorySize: 1024,
            timeout: aws_cdk_lib_1.Duration.seconds(5),
        });
        const api = new apigateway.RestApi(this, 'Products-end-point', {
            restApiName: 'Toy Store Gateway [Products]',
            description: 'This API serves the Lambda functions for products.',
        });
        const productsResource = api.root.addResource('products');
        productsResource.addMethod('GET', new apigateway.LambdaIntegration(getProductsList));
        const productByIdResource = productsResource.addResource('{productId}');
        productByIdResource.addMethod('GET', new apigateway.LambdaIntegration(getProductById));
    }
}
exports.ProductApiStack = ProductApiStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1hcGktc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0LWFwaS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBMEQ7QUFFMUQsaURBQWlEO0FBQ2pELDZCQUE2QjtBQUM3Qix5REFBeUQ7QUFFekQsTUFBYSxlQUFnQixTQUFRLG1CQUFLO0lBQ3pDLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBa0I7UUFDM0QsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSxlQUFlLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRTtZQUNwRSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLHVCQUF1QixDQUFDLENBQzdDO1lBQ0QsT0FBTyxFQUFFLHNCQUFzQjtZQUMvQixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ25DLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLE9BQU8sRUFBRSxzQkFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDNUIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxjQUFjLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtZQUNsRSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLHVCQUF1QixDQUFDLENBQzdDO1lBQ0QsT0FBTyxFQUFFLHNCQUFzQjtZQUMvQixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ25DLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLE9BQU8sRUFBRSxzQkFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDNUIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxHQUFHLEdBQUcsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRTtZQUM5RCxXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFdBQVcsRUFBRSxvREFBb0Q7U0FDakUsQ0FBQyxDQUFDO1FBRUgsTUFBTSxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxRCxnQkFBZ0IsQ0FBQyxTQUFTLENBQ3pCLEtBQUssRUFDTCxJQUFJLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FDakQsQ0FBQztRQUVGLE1BQU0sbUJBQW1CLEdBQUcsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3hFLG1CQUFtQixDQUFDLFNBQVMsQ0FDNUIsS0FBSyxFQUNMLElBQUksVUFBVSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUNoRCxDQUFDO0lBQ0gsQ0FBQztDQUNEO0FBekNELDBDQXlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER1cmF0aW9uLCBTdGFjaywgU3RhY2tQcm9wcyB9IGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gJ2F3cy1jZGstbGliL2F3cy1sYW1iZGEnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCAqIGFzIGFwaWdhdGV3YXkgZnJvbSAnYXdzLWNkay1saWIvYXdzLWFwaWdhdGV3YXknO1xuXG5leHBvcnQgY2xhc3MgUHJvZHVjdEFwaVN0YWNrIGV4dGVuZHMgU3RhY2sge1xuXHRjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IFN0YWNrUHJvcHMpIHtcblx0XHRzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuXHRcdGNvbnN0IGdldFByb2R1Y3RzTGlzdCA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgJ2dldFByb2R1Y3RzTGlzdCcsIHtcblx0XHRcdGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldChcblx0XHRcdFx0cGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL3NlcnZpY2VzL3Byb2R1Y3RzLycpXG5cdFx0XHQpLFxuXHRcdFx0aGFuZGxlcjogJ2dldFByb2R1Y3RzTGlzdC5tYWluJyxcblx0XHRcdHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xOF9YLFxuXHRcdFx0bWVtb3J5U2l6ZTogMTAyNCxcblx0XHRcdHRpbWVvdXQ6IER1cmF0aW9uLnNlY29uZHMoNSksXG5cdFx0fSk7XG5cblx0XHRjb25zdCBnZXRQcm9kdWN0QnlJZCA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgJ2dldFByb2R1Y3RCeUlkJywge1xuXHRcdFx0Y29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KFxuXHRcdFx0XHRwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vc2VydmljZXMvcHJvZHVjdHMvJylcblx0XHRcdCksXG5cdFx0XHRoYW5kbGVyOiAnZ2V0UHJvZHVjdHNCeUlkLm1haW4nLFxuXHRcdFx0cnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE4X1gsXG5cdFx0XHRtZW1vcnlTaXplOiAxMDI0LFxuXHRcdFx0dGltZW91dDogRHVyYXRpb24uc2Vjb25kcyg1KSxcblx0XHR9KTtcblxuXHRcdGNvbnN0IGFwaSA9IG5ldyBhcGlnYXRld2F5LlJlc3RBcGkodGhpcywgJ1Byb2R1Y3RzLWVuZC1wb2ludCcsIHtcblx0XHRcdHJlc3RBcGlOYW1lOiAnVG95IFN0b3JlIEdhdGV3YXkgW1Byb2R1Y3RzXScsXG5cdFx0XHRkZXNjcmlwdGlvbjogJ1RoaXMgQVBJIHNlcnZlcyB0aGUgTGFtYmRhIGZ1bmN0aW9ucyBmb3IgcHJvZHVjdHMuJyxcblx0XHR9KTtcblxuXHRcdGNvbnN0IHByb2R1Y3RzUmVzb3VyY2UgPSBhcGkucm9vdC5hZGRSZXNvdXJjZSgncHJvZHVjdHMnKTtcblx0XHRwcm9kdWN0c1Jlc291cmNlLmFkZE1ldGhvZChcblx0XHRcdCdHRVQnLFxuXHRcdFx0bmV3IGFwaWdhdGV3YXkuTGFtYmRhSW50ZWdyYXRpb24oZ2V0UHJvZHVjdHNMaXN0KVxuXHRcdCk7XG5cblx0XHRjb25zdCBwcm9kdWN0QnlJZFJlc291cmNlID0gcHJvZHVjdHNSZXNvdXJjZS5hZGRSZXNvdXJjZSgne3Byb2R1Y3RJZH0nKTtcblx0XHRwcm9kdWN0QnlJZFJlc291cmNlLmFkZE1ldGhvZChcblx0XHRcdCdHRVQnLFxuXHRcdFx0bmV3IGFwaWdhdGV3YXkuTGFtYmRhSW50ZWdyYXRpb24oZ2V0UHJvZHVjdEJ5SWQpXG5cdFx0KTtcblx0fVxufVxuIl19