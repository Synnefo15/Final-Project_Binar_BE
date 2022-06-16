const userRepository = require('../repository/user.repository');

const { user } = require('../models/index.js');

exports.findAllUsers = async () => {
	return await userRepository.findAll();
};

exports.findUserById = async (id) => {
	return await userRepository.findById(id);
};

exports.createNewUser = async (payload) => {
	try {
		const user = {
			role_name:payload.fields.role_name,
			email:payload.fields.email,
			password:payload.fields.password,
			hp:payload.fields.hp,
			foto:payload.fields.foto,
			alamat:payload.fields.alamat,
			
		}
		return await userRepository.save(user)
	} catch (err) {
		console.log(err);
	}
}

exports.updateUser = async (payload,ids) => {
	try {
		const user = {
			role_name: payload.fields.role_name,
			email: payload.fields.email,
			password: payload.fields.password,
			hp: payload.fields.hp,
			foto: payload.fields.foto,
			alamat: payload.fields.alamat,
		};

		const userById = await userRepository.findById(ids)

		if (userById == null) {
			return null
		} else {
			return await userRepository.update(user,ids)
		}
		
	} catch (error) {
		console.log(error);
	}
}

exports.deleteUser = async (user) => {
	userRepository.delete(user)
}