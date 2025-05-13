"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
const products_1 = require("../../lib/data/products");
async function main() {
    return {
        statusCode: 200,
        body: JSON.stringify(products_1.mockProducts),
        headers: {
            'Content-Type': 'application/json',
        },
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0UHJvZHVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZXRQcm9kdWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLG9CQVFDO0FBVkQsc0RBQXVEO0FBRWhELEtBQUssVUFBVSxJQUFJO0lBQ3pCLE9BQU87UUFDTixVQUFVLEVBQUUsR0FBRztRQUNmLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUFZLENBQUM7UUFDbEMsT0FBTyxFQUFFO1lBQ1IsY0FBYyxFQUFFLGtCQUFrQjtTQUNsQztLQUNELENBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW9ja1Byb2R1Y3RzIH0gZnJvbSAnLi4vLi4vbGliL2RhdGEvcHJvZHVjdHMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcblx0cmV0dXJuIHtcblx0XHRzdGF0dXNDb2RlOiAyMDAsXG5cdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkobW9ja1Byb2R1Y3RzKSxcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdH0sXG5cdH07XG59XG4iXX0=