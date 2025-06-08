"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const headers_1 = require("../headers");
const productsServices_1 = require("../productsServices");
const main = async (event) => {
    try {
        const productId = event.pathParameters?.productId;
        if (!productId) {
            return {
                statusCode: 400,
                headers: headers_1.headers,
                body: JSON.stringify({ message: 'Missing productId parameter' }),
            };
        }
        const matches = await (0, productsServices_1.getProductsByIdService)(productId);
        if (matches === undefined || matches.length === 0) {
            return {
                statusCode: 404,
                headers: headers_1.headers,
                body: JSON.stringify({
                    message: `No product found with ID starting with '${productId}'`,
                }),
            };
        }
        return {
            statusCode: 200,
            headers: headers_1.headers,
            body: JSON.stringify(matches),
        };
    }
    catch (error) {
        return {
            statusCode: 500,
            headers: headers_1.headers,
            body: JSON.stringify({ message: 'Internal Server Error' }),
        };
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0UHJvZHVjdEJ5SWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZXRQcm9kdWN0QnlJZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUFxQztBQUNyQywwREFBNkQ7QUFFN0QsTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUFFLEtBQVUsRUFBRSxFQUFFO0lBQ2pDLElBQUksQ0FBQztRQUNKLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDO1FBRWxELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNoQixPQUFPO2dCQUNOLFVBQVUsRUFBRSxHQUFHO2dCQUNmLE9BQU8sRUFBUCxpQkFBTztnQkFDUCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxDQUFDO2FBQ2hFLENBQUM7UUFDSCxDQUFDO1FBQ0QsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFBLHlDQUFzQixFQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hELElBQUksT0FBTyxLQUFLLFNBQVMsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ25ELE9BQU87Z0JBQ04sVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsT0FBTyxFQUFQLGlCQUFPO2dCQUNQLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUNwQixPQUFPLEVBQUUsMkNBQTJDLFNBQVMsR0FBRztpQkFDaEUsQ0FBQzthQUNGLENBQUM7UUFDSCxDQUFDO1FBRUQsT0FBTztZQUNOLFVBQVUsRUFBRSxHQUFHO1lBQ2YsT0FBTyxFQUFQLGlCQUFPO1lBQ1AsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1NBQzdCLENBQUM7SUFDSCxDQUFDO0lBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztRQUNoQixPQUFPO1lBQ04sVUFBVSxFQUFFLEdBQUc7WUFDZixPQUFPLEVBQVAsaUJBQU87WUFDUCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxDQUFDO1NBQzFELENBQUM7SUFDSCxDQUFDO0FBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGVhZGVycyB9IGZyb20gJy4uL2hlYWRlcnMnO1xuaW1wb3J0IHsgZ2V0UHJvZHVjdHNCeUlkU2VydmljZSB9IGZyb20gJy4uL3Byb2R1Y3RzU2VydmljZXMnO1xuXG5jb25zdCBtYWluID0gYXN5bmMgKGV2ZW50OiBhbnkpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCBwcm9kdWN0SWQgPSBldmVudC5wYXRoUGFyYW1ldGVycz8ucHJvZHVjdElkO1xuXG5cdFx0aWYgKCFwcm9kdWN0SWQpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHN0YXR1c0NvZGU6IDQwMCxcblx0XHRcdFx0aGVhZGVycyxcblx0XHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoeyBtZXNzYWdlOiAnTWlzc2luZyBwcm9kdWN0SWQgcGFyYW1ldGVyJyB9KSxcblx0XHRcdH07XG5cdFx0fVxuXHRcdGNvbnN0IG1hdGNoZXMgPSBhd2FpdCBnZXRQcm9kdWN0c0J5SWRTZXJ2aWNlKHByb2R1Y3RJZCk7XG5cdFx0aWYgKG1hdGNoZXMgPT09IHVuZGVmaW5lZCB8fCBtYXRjaGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0c3RhdHVzQ29kZTogNDA0LFxuXHRcdFx0XHRoZWFkZXJzLFxuXHRcdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdFx0bWVzc2FnZTogYE5vIHByb2R1Y3QgZm91bmQgd2l0aCBJRCBzdGFydGluZyB3aXRoICcke3Byb2R1Y3RJZH0nYCxcblx0XHRcdFx0fSksXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRzdGF0dXNDb2RlOiAyMDAsXG5cdFx0XHRoZWFkZXJzLFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkobWF0Y2hlcyksXG5cdFx0fTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RhdHVzQ29kZTogNTAwLFxuXHRcdFx0aGVhZGVycyxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogJ0ludGVybmFsIFNlcnZlciBFcnJvcicgfSksXG5cdFx0fTtcblx0fVxufTtcbiJdfQ==