const express = require('express');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const port = process.env.PORT || 5000;

// &---- Swagger ----
const swaggerOption = {
	swaggerDefinition: {
		info: {
			title: 'E-commerce API SHAP',
			description: 'E-commerce API Information Swagger',
			contact: {
				name: 'FWS 11 Kelompk 5 SHAP',
			},
			servers: ['http://locahost:5000'],
		},
	},
	apis: ['./routes/routes.js'],
};
const swaggerDocs = swaggerJsDoc(swaggerOption)

app.use(require('./routes/routes.js')) // &---- Routes ----
app.use('/api-docs',swaggerUi.serve,
        swaggerUi.setup(swaggerDocs)
) // &---- Swagger ----



app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
