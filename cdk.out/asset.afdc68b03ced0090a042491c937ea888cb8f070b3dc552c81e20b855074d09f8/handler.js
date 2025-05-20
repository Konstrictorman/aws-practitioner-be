"use strict";
//import { mockProducts } from '../../data/products';
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
const mockProducts = [
    {
        description: 'Short Product Description1',
        id: '7567ec4b-b10c-48c5-9345-fc73c48a80aa',
        price: 24,
        title: 'ProductOne',
    },
    {
        description: 'Short Product Description7',
        id: '7567ec4b-b10c-48c5-9345-fc73c48a80a1',
        price: 15,
        title: 'ProductTitle',
    },
    {
        description: 'Short Product Description2',
        id: '7567ec4b-b10c-48c5-9345-fc73c48a80a3',
        price: 23,
        title: 'Product',
    },
    {
        description: 'Short Product Description4',
        id: '7567ec4b-b10c-48c5-9345-fc73348a80a1',
        price: 15,
        title: 'ProductTest',
    },
    {
        description: 'Short Product Descriptio1',
        id: '7567ec4b-b10c-48c5-9445-fc73c48a80a2',
        price: 23,
        title: 'Product2',
    },
    {
        description: 'Short Product Description7',
        id: '7567ec4b-b10c-45c5-9345-fc73c48a80a1',
        price: 15,
        title: 'ProductName',
    },
];
async function main() {
    return {
        statusCode: 200,
        body: JSON.stringify(mockProducts),
        headers: {
            'Content-Type': 'application/json',
        },
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFEQUFxRDs7QUEyQ3JELG9CQVFDO0FBL0NELE1BQU0sWUFBWSxHQUFjO0lBQy9CO1FBQ0MsV0FBVyxFQUFFLDRCQUE0QjtRQUN6QyxFQUFFLEVBQUUsc0NBQXNDO1FBQzFDLEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLFlBQVk7S0FDbkI7SUFDRDtRQUNDLFdBQVcsRUFBRSw0QkFBNEI7UUFDekMsRUFBRSxFQUFFLHNDQUFzQztRQUMxQyxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxjQUFjO0tBQ3JCO0lBQ0Q7UUFDQyxXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLEVBQUUsRUFBRSxzQ0FBc0M7UUFDMUMsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsU0FBUztLQUNoQjtJQUNEO1FBQ0MsV0FBVyxFQUFFLDRCQUE0QjtRQUN6QyxFQUFFLEVBQUUsc0NBQXNDO1FBQzFDLEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLGFBQWE7S0FDcEI7SUFDRDtRQUNDLFdBQVcsRUFBRSwyQkFBMkI7UUFDeEMsRUFBRSxFQUFFLHNDQUFzQztRQUMxQyxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxVQUFVO0tBQ2pCO0lBQ0Q7UUFDQyxXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLEVBQUUsRUFBRSxzQ0FBc0M7UUFDMUMsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsYUFBYTtLQUNwQjtDQUNELENBQUM7QUFFSyxLQUFLLFVBQVUsSUFBSTtJQUN6QixPQUFPO1FBQ04sVUFBVSxFQUFFLEdBQUc7UUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7UUFDbEMsT0FBTyxFQUFFO1lBQ1IsY0FBYyxFQUFFLGtCQUFrQjtTQUNsQztLQUNELENBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgeyBtb2NrUHJvZHVjdHMgfSBmcm9tICcuLi8uLi9kYXRhL3Byb2R1Y3RzJztcblxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVscy9Qcm9kdWN0JztcblxuY29uc3QgbW9ja1Byb2R1Y3RzOiBQcm9kdWN0W10gPSBbXG5cdHtcblx0XHRkZXNjcmlwdGlvbjogJ1Nob3J0IFByb2R1Y3QgRGVzY3JpcHRpb24xJyxcblx0XHRpZDogJzc1NjdlYzRiLWIxMGMtNDhjNS05MzQ1LWZjNzNjNDhhODBhYScsXG5cdFx0cHJpY2U6IDI0LFxuXHRcdHRpdGxlOiAnUHJvZHVjdE9uZScsXG5cdH0sXG5cdHtcblx0XHRkZXNjcmlwdGlvbjogJ1Nob3J0IFByb2R1Y3QgRGVzY3JpcHRpb243Jyxcblx0XHRpZDogJzc1NjdlYzRiLWIxMGMtNDhjNS05MzQ1LWZjNzNjNDhhODBhMScsXG5cdFx0cHJpY2U6IDE1LFxuXHRcdHRpdGxlOiAnUHJvZHVjdFRpdGxlJyxcblx0fSxcblx0e1xuXHRcdGRlc2NyaXB0aW9uOiAnU2hvcnQgUHJvZHVjdCBEZXNjcmlwdGlvbjInLFxuXHRcdGlkOiAnNzU2N2VjNGItYjEwYy00OGM1LTkzNDUtZmM3M2M0OGE4MGEzJyxcblx0XHRwcmljZTogMjMsXG5cdFx0dGl0bGU6ICdQcm9kdWN0Jyxcblx0fSxcblx0e1xuXHRcdGRlc2NyaXB0aW9uOiAnU2hvcnQgUHJvZHVjdCBEZXNjcmlwdGlvbjQnLFxuXHRcdGlkOiAnNzU2N2VjNGItYjEwYy00OGM1LTkzNDUtZmM3MzM0OGE4MGExJyxcblx0XHRwcmljZTogMTUsXG5cdFx0dGl0bGU6ICdQcm9kdWN0VGVzdCcsXG5cdH0sXG5cdHtcblx0XHRkZXNjcmlwdGlvbjogJ1Nob3J0IFByb2R1Y3QgRGVzY3JpcHRpbzEnLFxuXHRcdGlkOiAnNzU2N2VjNGItYjEwYy00OGM1LTk0NDUtZmM3M2M0OGE4MGEyJyxcblx0XHRwcmljZTogMjMsXG5cdFx0dGl0bGU6ICdQcm9kdWN0MicsXG5cdH0sXG5cdHtcblx0XHRkZXNjcmlwdGlvbjogJ1Nob3J0IFByb2R1Y3QgRGVzY3JpcHRpb243Jyxcblx0XHRpZDogJzc1NjdlYzRiLWIxMGMtNDVjNS05MzQ1LWZjNzNjNDhhODBhMScsXG5cdFx0cHJpY2U6IDE1LFxuXHRcdHRpdGxlOiAnUHJvZHVjdE5hbWUnLFxuXHR9LFxuXTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XG5cdHJldHVybiB7XG5cdFx0c3RhdHVzQ29kZTogMjAwLFxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KG1vY2tQcm9kdWN0cyksXG5cdFx0aGVhZGVyczoge1xuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHR9LFxuXHR9O1xufVxuIl19