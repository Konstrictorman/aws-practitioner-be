"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
const products_1 = require("../../data/products");
//import { Product } from '../../models/Product';
// const mockProducts: Product[] = [
// 	{
// 		description: 'Short Product Description1',
// 		id: '7567ec4b-b10c-48c5-9345-fc73c48a80aa',
// 		price: 24,
// 		title: 'ProductOne',
// 	},
// 	{
// 		description: 'Short Product Description7',
// 		id: '7567ec4b-b10c-48c5-9345-fc73c48a80a1',
// 		price: 15,
// 		title: 'ProductTitle',
// 	},
// 	{
// 		description: 'Short Product Description2',
// 		id: '7567ec4b-b10c-48c5-9345-fc73c48a80a3',
// 		price: 23,
// 		title: 'Product',
// 	},
// 	{
// 		description: 'Short Product Description4',
// 		id: '7567ec4b-b10c-48c5-9345-fc73348a80a1',
// 		price: 15,
// 		title: 'ProductTest',
// 	},
// 	{
// 		description: 'Short Product Descriptio1',
// 		id: '7567ec4b-b10c-48c5-9445-fc73c48a80a2',
// 		price: 23,
// 		title: 'Product2',
// 	},
// 	{
// 		description: 'Short Product Description7',
// 		id: '7567ec4b-b10c-45c5-9345-fc73c48a80a1',
// 		price: 15,
// 		title: 'ProductName',
// 	},
// ];
async function main() {
    return {
        statusCode: 200,
        body: JSON.stringify(products_1.mockProducts),
        headers: {
            'Content-Type': 'application/json',
        },
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0UHJvZHVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZXRQcm9kdWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQTJDQSxvQkFRQztBQW5ERCxrREFBbUQ7QUFFbkQsaURBQWlEO0FBRWpELG9DQUFvQztBQUNwQyxLQUFLO0FBQ0wsK0NBQStDO0FBQy9DLGdEQUFnRDtBQUNoRCxlQUFlO0FBQ2YseUJBQXlCO0FBQ3pCLE1BQU07QUFDTixLQUFLO0FBQ0wsK0NBQStDO0FBQy9DLGdEQUFnRDtBQUNoRCxlQUFlO0FBQ2YsMkJBQTJCO0FBQzNCLE1BQU07QUFDTixLQUFLO0FBQ0wsK0NBQStDO0FBQy9DLGdEQUFnRDtBQUNoRCxlQUFlO0FBQ2Ysc0JBQXNCO0FBQ3RCLE1BQU07QUFDTixLQUFLO0FBQ0wsK0NBQStDO0FBQy9DLGdEQUFnRDtBQUNoRCxlQUFlO0FBQ2YsMEJBQTBCO0FBQzFCLE1BQU07QUFDTixLQUFLO0FBQ0wsOENBQThDO0FBQzlDLGdEQUFnRDtBQUNoRCxlQUFlO0FBQ2YsdUJBQXVCO0FBQ3ZCLE1BQU07QUFDTixLQUFLO0FBQ0wsK0NBQStDO0FBQy9DLGdEQUFnRDtBQUNoRCxlQUFlO0FBQ2YsMEJBQTBCO0FBQzFCLE1BQU07QUFDTixLQUFLO0FBRUUsS0FBSyxVQUFVLElBQUk7SUFDekIsT0FBTztRQUNOLFVBQVUsRUFBRSxHQUFHO1FBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQVksQ0FBQztRQUNsQyxPQUFPLEVBQUU7WUFDUixjQUFjLEVBQUUsa0JBQWtCO1NBQ2xDO0tBQ0QsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb2NrUHJvZHVjdHMgfSBmcm9tICcuLi8uLi9kYXRhL3Byb2R1Y3RzJztcblxuLy9pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL1Byb2R1Y3QnO1xuXG4vLyBjb25zdCBtb2NrUHJvZHVjdHM6IFByb2R1Y3RbXSA9IFtcbi8vIFx0e1xuLy8gXHRcdGRlc2NyaXB0aW9uOiAnU2hvcnQgUHJvZHVjdCBEZXNjcmlwdGlvbjEnLFxuLy8gXHRcdGlkOiAnNzU2N2VjNGItYjEwYy00OGM1LTkzNDUtZmM3M2M0OGE4MGFhJyxcbi8vIFx0XHRwcmljZTogMjQsXG4vLyBcdFx0dGl0bGU6ICdQcm9kdWN0T25lJyxcbi8vIFx0fSxcbi8vIFx0e1xuLy8gXHRcdGRlc2NyaXB0aW9uOiAnU2hvcnQgUHJvZHVjdCBEZXNjcmlwdGlvbjcnLFxuLy8gXHRcdGlkOiAnNzU2N2VjNGItYjEwYy00OGM1LTkzNDUtZmM3M2M0OGE4MGExJyxcbi8vIFx0XHRwcmljZTogMTUsXG4vLyBcdFx0dGl0bGU6ICdQcm9kdWN0VGl0bGUnLFxuLy8gXHR9LFxuLy8gXHR7XG4vLyBcdFx0ZGVzY3JpcHRpb246ICdTaG9ydCBQcm9kdWN0IERlc2NyaXB0aW9uMicsXG4vLyBcdFx0aWQ6ICc3NTY3ZWM0Yi1iMTBjLTQ4YzUtOTM0NS1mYzczYzQ4YTgwYTMnLFxuLy8gXHRcdHByaWNlOiAyMyxcbi8vIFx0XHR0aXRsZTogJ1Byb2R1Y3QnLFxuLy8gXHR9LFxuLy8gXHR7XG4vLyBcdFx0ZGVzY3JpcHRpb246ICdTaG9ydCBQcm9kdWN0IERlc2NyaXB0aW9uNCcsXG4vLyBcdFx0aWQ6ICc3NTY3ZWM0Yi1iMTBjLTQ4YzUtOTM0NS1mYzczMzQ4YTgwYTEnLFxuLy8gXHRcdHByaWNlOiAxNSxcbi8vIFx0XHR0aXRsZTogJ1Byb2R1Y3RUZXN0Jyxcbi8vIFx0fSxcbi8vIFx0e1xuLy8gXHRcdGRlc2NyaXB0aW9uOiAnU2hvcnQgUHJvZHVjdCBEZXNjcmlwdGlvMScsXG4vLyBcdFx0aWQ6ICc3NTY3ZWM0Yi1iMTBjLTQ4YzUtOTQ0NS1mYzczYzQ4YTgwYTInLFxuLy8gXHRcdHByaWNlOiAyMyxcbi8vIFx0XHR0aXRsZTogJ1Byb2R1Y3QyJyxcbi8vIFx0fSxcbi8vIFx0e1xuLy8gXHRcdGRlc2NyaXB0aW9uOiAnU2hvcnQgUHJvZHVjdCBEZXNjcmlwdGlvbjcnLFxuLy8gXHRcdGlkOiAnNzU2N2VjNGItYjEwYy00NWM1LTkzNDUtZmM3M2M0OGE4MGExJyxcbi8vIFx0XHRwcmljZTogMTUsXG4vLyBcdFx0dGl0bGU6ICdQcm9kdWN0TmFtZScsXG4vLyBcdH0sXG4vLyBdO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcblx0cmV0dXJuIHtcblx0XHRzdGF0dXNDb2RlOiAyMDAsXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkobW9ja1Byb2R1Y3RzKSxcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdH0sXG5cdH07XG59XG4iXX0=