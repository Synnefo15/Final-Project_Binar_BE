const express = require('express');
const router = express.Router();

const userController = require('../controller/users.controller');

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





module.exports = router
