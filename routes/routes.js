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

// product
/**
 * @swagger
 * /products:
 *   get:
 *     description: Get all products
 *     tags: [Products]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: products
 */
router.get('/products', productController.findAllProductsApi);

/**
 * @swagger
 * /products/:id:
 *   get:
 *     description: Get all products
 *     tags: [Products]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *       - type: string
 *     responses:
 *       200:
 *         description: products by id
 */
router.get('/products/:id', productController.findProductByIdApi);

/**
 * @swagger
 * /products:
 *   post:
 *     description: Create new products
 *     tags: [Products]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id_user
 *         description: User id.
 *         required: true
 *         in: formData
 *         type: integer
 *       - name: id_category
 *         description: Product's category
 *         required: true
 *         in: formData
 *         type: string
 *       - name: product_name
 *         description: Product's name 
 *         required: true
 *         in: formData
 *         type: string
 *       - name: product_description
 *         description: Product's description.
 *         required: true
 *         in: formData
 *         type: string
 *       - name: price
 *         description: Product's price.
 *         required: true
 *         in: formData
 *         type: integer
 *       - name: product_image
 *         description: Product's photo.
 *         required: true
 *         in: formData
 *         type: string/file
 *     responses:
 *       201:
 *         description: create product
 *         schema:
 *           type: object
 *           $ref: '#/definitions/Create_Update_Product'
 */
router.post('/products', productController.createNewProductApi);

/**
 * @swagger
 * /products/:id:
 *   put:
 *     description: Update products by id
 *     tags: [Products]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Product's id.
 *         required: true
 *         in: formData
 *         type: string
 *       - name: id_user
 *         description: User id.
 *         required: true
 *         in: formData
 *         type: integer
 *       - name: id_category
 *         description: Product's category
 *         required: true
 *         in: formData
 *         type: string
 *       - name: product_name
 *         description: Product's name 
 *         required: true
 *         in: formData
 *         type: string
 *       - name: product_description
 *         description: Product's description.
 *         required: true
 *         in: formData
 *         type: string
 *       - name: price
 *         description: Product's price.
 *         required: true
 *         in: formData
 *         type: integer
 *       - name: product_image
 *         description: Product's photo.
 *         required: true
 *         in: formData
 *         type: string/file
 *     responses:
 *       200:
 *         description: update product
 *         schema:
 *           type: object
 *           $ref: '#/definitions/Create_Update_Product'
 */
router.put('/products/:id', productController.updateProductApi);

/**
 * @swagger
 * /products/:id:
 *   delete:
 *     description: Delete products by id
 *     tags: [Products]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *       - type: string
 *     responses:
 *       200:
 *         description: products by id
 */
router.delete('/products/:id', productController.deleteProduct);

module.exports = router
