import express from 'express';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './openapi/swagger.json'; // <-- path to your generated openapi.json

const app = express();
const port = 3000;

// Serve Swagger UI at /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
	console.log(`✅ Swagger UI available at http://localhost:${port}/api-docs`);
});
