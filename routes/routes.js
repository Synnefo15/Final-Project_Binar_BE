const express = require('express');
const router = express.Router();

const userController = require('../controller/users.controller');
const transController = require('../controller/transaksi.controller');

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

// &---- User ----
router.get('/users/profile',userController.findAllUserApi)
router.get('/users/profile/:id',userController.findUserByIdApi)
router.post('/users/profile',userController.createNewUserApi)
router.put('/users/profile/:id',userController.updateUserApi)
router.delete('/users/profile/:id',userController.deleteCar)

// &---- Transaksi ----
router.get('/users/transaksi',transController.findAllTransApi)
router.get('/users/transaksi/:id',transController.findTransByIdApi)
router.post('/users/transaksi',transController.createNewTransApi)
router.put('/users/transaksi/:id',transController.updateTransApi)
router.delete('/users/transaksi/:id',transController.deleteTrans)





module.exports = router
