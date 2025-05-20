"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const headers_1 = require("./headers");
const productsServices_1 = require("../productsServices");
const main = async () => {
    try {
        const products = await (0, productsServices_1.getProductsListService)();
        return {
            statusCode: 200,
            headers: headers_1.headers,
            body: JSON.stringify(products),
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
exports.main = main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0UHJvZHVjdHNMaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2V0UHJvZHVjdHNMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVDQUFvQztBQUNwQywwREFBNkQ7QUFFdEQsTUFBTSxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7SUFDOUIsSUFBSSxDQUFDO1FBQ0osTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFBLHlDQUFzQixHQUFFLENBQUM7UUFDaEQsT0FBTztZQUNOLFVBQVUsRUFBRSxHQUFHO1lBQ2YsT0FBTyxFQUFQLGlCQUFPO1lBQ1AsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1NBQzlCLENBQUM7SUFDSCxDQUFDO0lBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztRQUNoQixPQUFPO1lBQ04sVUFBVSxFQUFFLEdBQUc7WUFDZixPQUFPLEVBQVAsaUJBQU87WUFDUCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxDQUFDO1NBQzFELENBQUM7SUFDSCxDQUFDO0FBQ0YsQ0FBQyxDQUFDO0FBZlcsUUFBQSxJQUFJLFFBZWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoZWFkZXJzIH0gZnJvbSAnLi9oZWFkZXJzJztcbmltcG9ydCB7IGdldFByb2R1Y3RzTGlzdFNlcnZpY2UgfSBmcm9tICcuLi9wcm9kdWN0c1NlcnZpY2VzJztcblxuZXhwb3J0IGNvbnN0IG1haW4gPSBhc3luYyAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcHJvZHVjdHMgPSBhd2FpdCBnZXRQcm9kdWN0c0xpc3RTZXJ2aWNlKCk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN0YXR1c0NvZGU6IDIwMCxcblx0XHRcdGhlYWRlcnMsXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShwcm9kdWN0cyksXG5cdFx0fTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RhdHVzQ29kZTogNTAwLFxuXHRcdFx0aGVhZGVycyxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogJ0ludGVybmFsIFNlcnZlciBFcnJvcicgfSksXG5cdFx0fTtcblx0fVxufTtcbiJdfQ==