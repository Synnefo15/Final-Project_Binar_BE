const express = require('express');
const router = express.Router();
const productController = require('../controller/products.controller.js');
const cors = require('cors');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.use(cors(corsOptions));

// &---- Routes index ----
/**
 * @swagger
 * /:
 * get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/', (req, res) => {
	res.status(200).send(`Default Page`);
});

router.get('/products', productController.findAllProductsApi);

router.get('/products/:id', productController.findProductByIdApi);

router.post('/products', productController.createNewProductApi);

router.put('/products/:id', productController.updateProductApi);

router.delete('/products/:id', productController.deleteProduct);

module.exports = router
