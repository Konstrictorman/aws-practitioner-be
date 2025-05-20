"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
const products_1 = require("../../data/products");
async function main() {
    return {
        statusCode: 200,
        body: JSON.stringify(products_1.mockProducts),
        headers: {
            'Content-Type': 'application/json',
        },
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxvQkFRQztBQVZELGtEQUFtRDtBQUU1QyxLQUFLLFVBQVUsSUFBSTtJQUN6QixPQUFPO1FBQ04sVUFBVSxFQUFFLEdBQUc7UUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBWSxDQUFDO1FBQ2xDLE9BQU8sRUFBRTtZQUNSLGNBQWMsRUFBRSxrQkFBa0I7U0FDbEM7S0FDRCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vY2tQcm9kdWN0cyB9IGZyb20gJy4uLy4uL2RhdGEvcHJvZHVjdHMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcblx0cmV0dXJuIHtcblx0XHRzdGF0dXNDb2RlOiAyMDAsXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkobW9ja1Byb2R1Y3RzKSxcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdH0sXG5cdH07XG59XG4iXX0=