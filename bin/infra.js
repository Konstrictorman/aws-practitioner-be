#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("aws-cdk-lib");
const product_api_stack_1 = require("../lib/product-api-stack");
const app = new cdk.App();
const env = {
    account: '448049832395',
    region: 'us-east-1',
};
new product_api_stack_1.ProductApiStack(app, 'ProductApiStack', {
    env: env,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mcmEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmZyYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxtQ0FBbUM7QUFDbkMsZ0VBQTJEO0FBRTNELE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRTFCLE1BQU0sR0FBRyxHQUFHO0lBQ1gsT0FBTyxFQUFFLGNBQWM7SUFDdkIsTUFBTSxFQUFFLFdBQVc7Q0FDbkIsQ0FBQztBQUVGLElBQUksbUNBQWUsQ0FBQyxHQUFHLEVBQUUsaUJBQWlCLEVBQUU7SUFDM0MsR0FBRyxFQUFFLEdBQUc7Q0FDUixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXG5pbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgUHJvZHVjdEFwaVN0YWNrIH0gZnJvbSAnLi4vbGliL3Byb2R1Y3QtYXBpLXN0YWNrJztcblxuY29uc3QgYXBwID0gbmV3IGNkay5BcHAoKTtcblxuY29uc3QgZW52ID0ge1xuXHRhY2NvdW50OiAnNDQ4MDQ5ODMyMzk1Jyxcblx0cmVnaW9uOiAndXMtZWFzdC0xJyxcbn07XG5cbm5ldyBQcm9kdWN0QXBpU3RhY2soYXBwLCAnUHJvZHVjdEFwaVN0YWNrJywge1xuXHRlbnY6IGVudixcbn0pO1xuIl19