"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const headers_1 = require("./headers");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0UHJvZHVjdHNCeUlkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2V0UHJvZHVjdHNCeUlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQW9DO0FBQ3BDLDBEQUE2RDtBQUU3RCxNQUFNLElBQUksR0FBRyxLQUFLLEVBQUUsS0FBVSxFQUFFLEVBQUU7SUFDakMsSUFBSSxDQUFDO1FBQ0osTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUM7UUFFbEQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2hCLE9BQU87Z0JBQ04sVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsT0FBTyxFQUFQLGlCQUFPO2dCQUNQLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLENBQUM7YUFDaEUsQ0FBQztRQUNILENBQUM7UUFDRCxNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUEseUNBQXNCLEVBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEQsSUFBSSxPQUFPLEtBQUssU0FBUyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDbkQsT0FBTztnQkFDTixVQUFVLEVBQUUsR0FBRztnQkFDZixPQUFPLEVBQVAsaUJBQU87Z0JBQ1AsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ3BCLE9BQU8sRUFBRSwyQ0FBMkMsU0FBUyxHQUFHO2lCQUNoRSxDQUFDO2FBQ0YsQ0FBQztRQUNILENBQUM7UUFFRCxPQUFPO1lBQ04sVUFBVSxFQUFFLEdBQUc7WUFDZixPQUFPLEVBQVAsaUJBQU87WUFDUCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7U0FDN0IsQ0FBQztJQUNILENBQUM7SUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1FBQ2hCLE9BQU87WUFDTixVQUFVLEVBQUUsR0FBRztZQUNmLE9BQU8sRUFBUCxpQkFBTztZQUNQLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLENBQUM7U0FDMUQsQ0FBQztJQUNILENBQUM7QUFDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoZWFkZXJzIH0gZnJvbSAnLi9oZWFkZXJzJztcbmltcG9ydCB7IGdldFByb2R1Y3RzQnlJZFNlcnZpY2UgfSBmcm9tICcuLi9wcm9kdWN0c1NlcnZpY2VzJztcblxuY29uc3QgbWFpbiA9IGFzeW5jIChldmVudDogYW55KSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcHJvZHVjdElkID0gZXZlbnQucGF0aFBhcmFtZXRlcnM/LnByb2R1Y3RJZDtcblxuXHRcdGlmICghcHJvZHVjdElkKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzdGF0dXNDb2RlOiA0MDAsXG5cdFx0XHRcdGhlYWRlcnMsXG5cdFx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogJ01pc3NpbmcgcHJvZHVjdElkIHBhcmFtZXRlcicgfSksXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRjb25zdCBtYXRjaGVzID0gYXdhaXQgZ2V0UHJvZHVjdHNCeUlkU2VydmljZShwcm9kdWN0SWQpO1xuXHRcdGlmIChtYXRjaGVzID09PSB1bmRlZmluZWQgfHwgbWF0Y2hlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHN0YXR1c0NvZGU6IDQwNCxcblx0XHRcdFx0aGVhZGVycyxcblx0XHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRcdG1lc3NhZ2U6IGBObyBwcm9kdWN0IGZvdW5kIHdpdGggSUQgc3RhcnRpbmcgd2l0aCAnJHtwcm9kdWN0SWR9J2AsXG5cdFx0XHRcdH0pLFxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RhdHVzQ29kZTogMjAwLFxuXHRcdFx0aGVhZGVycyxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KG1hdGNoZXMpLFxuXHRcdH07XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHN0YXR1c0NvZGU6IDUwMCxcblx0XHRcdGhlYWRlcnMsXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7IG1lc3NhZ2U6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InIH0pLFxuXHRcdH07XG5cdH1cbn07XG4iXX0=