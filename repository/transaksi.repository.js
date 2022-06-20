const db = require('../models/index');
const Transaction = db.transactions;

exports.findAll = async () => {
	return await Transaction.findAll();
};

exports.findById = async (id) => {
	return await Transaction.findByPk(id);
};

exports.save = async (trans) => {
	return await Transaction.create(trans);
};

exports.update = async (trans, ids) => {
	return await Transaction.update(trans, {
		where: { id: ids },
	});
};

exports.delete = async (trans) => {
	trans.destroy();
};
