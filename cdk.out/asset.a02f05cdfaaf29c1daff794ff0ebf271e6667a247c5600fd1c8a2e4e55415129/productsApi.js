"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockProducts = void 0;
exports.getProductsList = getProductsList;
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
async function getProductsList() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHNBcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0c0FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUF5Q0EsMENBVUM7QUFqRFksUUFBQSxZQUFZLEdBQWM7SUFDdEM7UUFDQyxXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLEVBQUUsRUFBRSxzQ0FBc0M7UUFDMUMsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsWUFBWTtLQUNuQjtJQUNEO1FBQ0MsV0FBVyxFQUFFLDRCQUE0QjtRQUN6QyxFQUFFLEVBQUUsc0NBQXNDO1FBQzFDLEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLGNBQWM7S0FDckI7SUFDRDtRQUNDLFdBQVcsRUFBRSw0QkFBNEI7UUFDekMsRUFBRSxFQUFFLHNDQUFzQztRQUMxQyxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxTQUFTO0tBQ2hCO0lBQ0Q7UUFDQyxXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLEVBQUUsRUFBRSxzQ0FBc0M7UUFDMUMsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsYUFBYTtLQUNwQjtJQUNEO1FBQ0MsV0FBVyxFQUFFLDJCQUEyQjtRQUN4QyxFQUFFLEVBQUUsc0NBQXNDO1FBQzFDLEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLFVBQVU7S0FDakI7SUFDRDtRQUNDLFdBQVcsRUFBRSw0QkFBNEI7UUFDekMsRUFBRSxFQUFFLHNDQUFzQztRQUMxQyxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxhQUFhO0tBQ3BCO0NBQ0QsQ0FBQztBQUVLLEtBQUssVUFBVSxlQUFlO0lBQ3BDLE9BQU87UUFDTixVQUFVLEVBQUUsR0FBRztRQUNmLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFZLENBQUM7UUFDbEMsT0FBTyxFQUFFO1lBQ1IsY0FBYyxFQUFFLGtCQUFrQjtZQUNsQyw2QkFBNkIsRUFBRSxHQUFHLEVBQUUseUJBQXlCO1lBQzdELGtDQUFrQyxFQUFFLElBQUk7U0FDeEM7S0FDRCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi9tb2RlbHMvUHJvZHVjdCc7XG5cbmV4cG9ydCBjb25zdCBtb2NrUHJvZHVjdHM6IFByb2R1Y3RbXSA9IFtcblx0e1xuXHRcdGRlc2NyaXB0aW9uOiAnU2hvcnQgUHJvZHVjdCBEZXNjcmlwdGlvbjEnLFxuXHRcdGlkOiAnNzU2N2VjNGItYjEwYy00OGM1LTkzNDUtZmM3M2M0OGE4MGFhJyxcblx0XHRwcmljZTogMjQsXG5cdFx0dGl0bGU6ICdQcm9kdWN0T25lJyxcblx0fSxcblx0e1xuXHRcdGRlc2NyaXB0aW9uOiAnU2hvcnQgUHJvZHVjdCBEZXNjcmlwdGlvbjcnLFxuXHRcdGlkOiAnNzU2N2VjNGItYjEwYy00OGM1LTkzNDUtZmM3M2M0OGE4MGExJyxcblx0XHRwcmljZTogMTUsXG5cdFx0dGl0bGU6ICdQcm9kdWN0VGl0bGUnLFxuXHR9LFxuXHR7XG5cdFx0ZGVzY3JpcHRpb246ICdTaG9ydCBQcm9kdWN0IERlc2NyaXB0aW9uMicsXG5cdFx0aWQ6ICc3NTY3ZWM0Yi1iMTBjLTQ4YzUtOTM0NS1mYzczYzQ4YTgwYTMnLFxuXHRcdHByaWNlOiAyMyxcblx0XHR0aXRsZTogJ1Byb2R1Y3QnLFxuXHR9LFxuXHR7XG5cdFx0ZGVzY3JpcHRpb246ICdTaG9ydCBQcm9kdWN0IERlc2NyaXB0aW9uNCcsXG5cdFx0aWQ6ICc3NTY3ZWM0Yi1iMTBjLTQ4YzUtOTM0NS1mYzczMzQ4YTgwYTEnLFxuXHRcdHByaWNlOiAxNSxcblx0XHR0aXRsZTogJ1Byb2R1Y3RUZXN0Jyxcblx0fSxcblx0e1xuXHRcdGRlc2NyaXB0aW9uOiAnU2hvcnQgUHJvZHVjdCBEZXNjcmlwdGlvMScsXG5cdFx0aWQ6ICc3NTY3ZWM0Yi1iMTBjLTQ4YzUtOTQ0NS1mYzczYzQ4YTgwYTInLFxuXHRcdHByaWNlOiAyMyxcblx0XHR0aXRsZTogJ1Byb2R1Y3QyJyxcblx0fSxcblx0e1xuXHRcdGRlc2NyaXB0aW9uOiAnU2hvcnQgUHJvZHVjdCBEZXNjcmlwdGlvbjcnLFxuXHRcdGlkOiAnNzU2N2VjNGItYjEwYy00NWM1LTkzNDUtZmM3M2M0OGE4MGExJyxcblx0XHRwcmljZTogMTUsXG5cdFx0dGl0bGU6ICdQcm9kdWN0TmFtZScsXG5cdH0sXG5dO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdHNMaXN0KCkge1xuXHRyZXR1cm4ge1xuXHRcdHN0YXR1c0NvZGU6IDIwMCxcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShtb2NrUHJvZHVjdHMpLFxuXHRcdGhlYWRlcnM6IHtcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHQnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLCAvLyDwn5GIIHVwZGF0ZSB0aGlzIGluIHByb2Rcblx0XHRcdCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFscyc6IHRydWUsXG5cdFx0fSxcblx0fTtcbn1cbiJdfQ==