"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockProducts = void 0;
exports.main = main;
exports.mockProducts = [
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
        body: JSON.stringify(exports.mockProducts),
        headers: {
            'Content-Type': 'application/json',
        },
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0UHJvZHVjdHNMaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2V0UHJvZHVjdHNMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQXlDQSxvQkFRQztBQS9DWSxRQUFBLFlBQVksR0FBYztJQUN0QztRQUNDLFdBQVcsRUFBRSw0QkFBNEI7UUFDekMsRUFBRSxFQUFFLHNDQUFzQztRQUMxQyxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxZQUFZO0tBQ25CO0lBQ0Q7UUFDQyxXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLEVBQUUsRUFBRSxzQ0FBc0M7UUFDMUMsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsY0FBYztLQUNyQjtJQUNEO1FBQ0MsV0FBVyxFQUFFLDRCQUE0QjtRQUN6QyxFQUFFLEVBQUUsc0NBQXNDO1FBQzFDLEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLFNBQVM7S0FDaEI7SUFDRDtRQUNDLFdBQVcsRUFBRSw0QkFBNEI7UUFDekMsRUFBRSxFQUFFLHNDQUFzQztRQUMxQyxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxhQUFhO0tBQ3BCO0lBQ0Q7UUFDQyxXQUFXLEVBQUUsMkJBQTJCO1FBQ3hDLEVBQUUsRUFBRSxzQ0FBc0M7UUFDMUMsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsVUFBVTtLQUNqQjtJQUNEO1FBQ0MsV0FBVyxFQUFFLDRCQUE0QjtRQUN6QyxFQUFFLEVBQUUsc0NBQXNDO1FBQzFDLEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLGFBQWE7S0FDcEI7Q0FDRCxDQUFDO0FBRUssS0FBSyxVQUFVLElBQUk7SUFDekIsT0FBTztRQUNOLFVBQVUsRUFBRSxHQUFHO1FBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQVksQ0FBQztRQUNsQyxPQUFPLEVBQUU7WUFDUixjQUFjLEVBQUUsa0JBQWtCO1NBQ2xDO0tBQ0QsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vbW9kZWxzL1Byb2R1Y3QnO1xuXG5leHBvcnQgY29uc3QgbW9ja1Byb2R1Y3RzOiBQcm9kdWN0W10gPSBbXG5cdHtcblx0XHRkZXNjcmlwdGlvbjogJ1Nob3J0IFByb2R1Y3QgRGVzY3JpcHRpb24xJyxcblx0XHRpZDogJzc1NjdlYzRiLWIxMGMtNDhjNS05MzQ1LWZjNzNjNDhhODBhYScsXG5cdFx0cHJpY2U6IDI0LFxuXHRcdHRpdGxlOiAnUHJvZHVjdE9uZScsXG5cdH0sXG5cdHtcblx0XHRkZXNjcmlwdGlvbjogJ1Nob3J0IFByb2R1Y3QgRGVzY3JpcHRpb243Jyxcblx0XHRpZDogJzc1NjdlYzRiLWIxMGMtNDhjNS05MzQ1LWZjNzNjNDhhODBhMScsXG5cdFx0cHJpY2U6IDE1LFxuXHRcdHRpdGxlOiAnUHJvZHVjdFRpdGxlJyxcblx0fSxcblx0e1xuXHRcdGRlc2NyaXB0aW9uOiAnU2hvcnQgUHJvZHVjdCBEZXNjcmlwdGlvbjInLFxuXHRcdGlkOiAnNzU2N2VjNGItYjEwYy00OGM1LTkzNDUtZmM3M2M0OGE4MGEzJyxcblx0XHRwcmljZTogMjMsXG5cdFx0dGl0bGU6ICdQcm9kdWN0Jyxcblx0fSxcblx0e1xuXHRcdGRlc2NyaXB0aW9uOiAnU2hvcnQgUHJvZHVjdCBEZXNjcmlwdGlvbjQnLFxuXHRcdGlkOiAnNzU2N2VjNGItYjEwYy00OGM1LTkzNDUtZmM3MzM0OGE4MGExJyxcblx0XHRwcmljZTogMTUsXG5cdFx0dGl0bGU6ICdQcm9kdWN0VGVzdCcsXG5cdH0sXG5cdHtcblx0XHRkZXNjcmlwdGlvbjogJ1Nob3J0IFByb2R1Y3QgRGVzY3JpcHRpbzEnLFxuXHRcdGlkOiAnNzU2N2VjNGItYjEwYy00OGM1LTk0NDUtZmM3M2M0OGE4MGEyJyxcblx0XHRwcmljZTogMjMsXG5cdFx0dGl0bGU6ICdQcm9kdWN0MicsXG5cdH0sXG5cdHtcblx0XHRkZXNjcmlwdGlvbjogJ1Nob3J0IFByb2R1Y3QgRGVzY3JpcHRpb243Jyxcblx0XHRpZDogJzc1NjdlYzRiLWIxMGMtNDVjNS05MzQ1LWZjNzNjNDhhODBhMScsXG5cdFx0cHJpY2U6IDE1LFxuXHRcdHRpdGxlOiAnUHJvZHVjdE5hbWUnLFxuXHR9LFxuXTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XG5cdHJldHVybiB7XG5cdFx0c3RhdHVzQ29kZTogMjAwLFxuXHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KG1vY2tQcm9kdWN0cyksXG5cdFx0aGVhZGVyczoge1xuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHR9LFxuXHR9O1xufVxuIl19