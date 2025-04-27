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
            'Access-Control-Allow-Origin': '*', // 👈 update this in prod
            'Access-Control-Allow-Credentials': true,
        },
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0UHJvZHVjdHNMaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2V0UHJvZHVjdHNMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQXlDQSxvQkFVQztBQWpEWSxRQUFBLFlBQVksR0FBYztJQUN0QztRQUNDLFdBQVcsRUFBRSw0QkFBNEI7UUFDekMsRUFBRSxFQUFFLHNDQUFzQztRQUMxQyxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxZQUFZO0tBQ25CO0lBQ0Q7UUFDQyxXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLEVBQUUsRUFBRSxzQ0FBc0M7UUFDMUMsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsY0FBYztLQUNyQjtJQUNEO1FBQ0MsV0FBVyxFQUFFLDRCQUE0QjtRQUN6QyxFQUFFLEVBQUUsc0NBQXNDO1FBQzFDLEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLFNBQVM7S0FDaEI7SUFDRDtRQUNDLFdBQVcsRUFBRSw0QkFBNEI7UUFDekMsRUFBRSxFQUFFLHNDQUFzQztRQUMxQyxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxhQUFhO0tBQ3BCO0lBQ0Q7UUFDQyxXQUFXLEVBQUUsMkJBQTJCO1FBQ3hDLEVBQUUsRUFBRSxzQ0FBc0M7UUFDMUMsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsVUFBVTtLQUNqQjtJQUNEO1FBQ0MsV0FBVyxFQUFFLDRCQUE0QjtRQUN6QyxFQUFFLEVBQUUsc0NBQXNDO1FBQzFDLEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLGFBQWE7S0FDcEI7Q0FDRCxDQUFDO0FBRUssS0FBSyxVQUFVLElBQUk7SUFDekIsT0FBTztRQUNOLFVBQVUsRUFBRSxHQUFHO1FBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQVksQ0FBQztRQUNsQyxPQUFPLEVBQUU7WUFDUixjQUFjLEVBQUUsa0JBQWtCO1lBQ2xDLDZCQUE2QixFQUFFLEdBQUcsRUFBRSx5QkFBeUI7WUFDN0Qsa0NBQWtDLEVBQUUsSUFBSTtTQUN4QztLQUNELENBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVscy9Qcm9kdWN0JztcblxuZXhwb3J0IGNvbnN0IG1vY2tQcm9kdWN0czogUHJvZHVjdFtdID0gW1xuXHR7XG5cdFx0ZGVzY3JpcHRpb246ICdTaG9ydCBQcm9kdWN0IERlc2NyaXB0aW9uMScsXG5cdFx0aWQ6ICc3NTY3ZWM0Yi1iMTBjLTQ4YzUtOTM0NS1mYzczYzQ4YTgwYWEnLFxuXHRcdHByaWNlOiAyNCxcblx0XHR0aXRsZTogJ1Byb2R1Y3RPbmUnLFxuXHR9LFxuXHR7XG5cdFx0ZGVzY3JpcHRpb246ICdTaG9ydCBQcm9kdWN0IERlc2NyaXB0aW9uNycsXG5cdFx0aWQ6ICc3NTY3ZWM0Yi1iMTBjLTQ4YzUtOTM0NS1mYzczYzQ4YTgwYTEnLFxuXHRcdHByaWNlOiAxNSxcblx0XHR0aXRsZTogJ1Byb2R1Y3RUaXRsZScsXG5cdH0sXG5cdHtcblx0XHRkZXNjcmlwdGlvbjogJ1Nob3J0IFByb2R1Y3QgRGVzY3JpcHRpb24yJyxcblx0XHRpZDogJzc1NjdlYzRiLWIxMGMtNDhjNS05MzQ1LWZjNzNjNDhhODBhMycsXG5cdFx0cHJpY2U6IDIzLFxuXHRcdHRpdGxlOiAnUHJvZHVjdCcsXG5cdH0sXG5cdHtcblx0XHRkZXNjcmlwdGlvbjogJ1Nob3J0IFByb2R1Y3QgRGVzY3JpcHRpb240Jyxcblx0XHRpZDogJzc1NjdlYzRiLWIxMGMtNDhjNS05MzQ1LWZjNzMzNDhhODBhMScsXG5cdFx0cHJpY2U6IDE1LFxuXHRcdHRpdGxlOiAnUHJvZHVjdFRlc3QnLFxuXHR9LFxuXHR7XG5cdFx0ZGVzY3JpcHRpb246ICdTaG9ydCBQcm9kdWN0IERlc2NyaXB0aW8xJyxcblx0XHRpZDogJzc1NjdlYzRiLWIxMGMtNDhjNS05NDQ1LWZjNzNjNDhhODBhMicsXG5cdFx0cHJpY2U6IDIzLFxuXHRcdHRpdGxlOiAnUHJvZHVjdDInLFxuXHR9LFxuXHR7XG5cdFx0ZGVzY3JpcHRpb246ICdTaG9ydCBQcm9kdWN0IERlc2NyaXB0aW9uNycsXG5cdFx0aWQ6ICc3NTY3ZWM0Yi1iMTBjLTQ1YzUtOTM0NS1mYzczYzQ4YTgwYTEnLFxuXHRcdHByaWNlOiAxNSxcblx0XHR0aXRsZTogJ1Byb2R1Y3ROYW1lJyxcblx0fSxcbl07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYWluKCkge1xuXHRyZXR1cm4ge1xuXHRcdHN0YXR1c0NvZGU6IDIwMCxcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShtb2NrUHJvZHVjdHMpLFxuXHRcdGhlYWRlcnM6IHtcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHQnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLCAvLyDwn5GIIHVwZGF0ZSB0aGlzIGluIHByb2Rcblx0XHRcdCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFscyc6IHRydWUsXG5cdFx0fSxcblx0fTtcbn1cbiJdfQ==