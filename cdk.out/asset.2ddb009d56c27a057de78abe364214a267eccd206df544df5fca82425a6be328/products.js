"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const products_1 = require("../data/products");
const handler = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify(products_1.mockProducts),
        headers: {
            'Content-Type': 'application/json',
        },
    };
};
exports.handler = handler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9kdWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBZ0Q7QUFFekMsTUFBTSxPQUFPLEdBQUcsS0FBSyxJQUFJLEVBQUU7SUFDakMsT0FBTztRQUNOLFVBQVUsRUFBRSxHQUFHO1FBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQVksQ0FBQztRQUNsQyxPQUFPLEVBQUU7WUFDUixjQUFjLEVBQUUsa0JBQWtCO1NBQ2xDO0tBQ0QsQ0FBQztBQUNILENBQUMsQ0FBQztBQVJXLFFBQUEsT0FBTyxXQVFsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vY2tQcm9kdWN0cyB9IGZyb20gJy4uL2RhdGEvcHJvZHVjdHMnO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlciA9IGFzeW5jICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRzdGF0dXNDb2RlOiAyMDAsXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkobW9ja1Byb2R1Y3RzKSxcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdH0sXG5cdH07XG59O1xuIl19