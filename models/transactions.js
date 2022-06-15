'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Transactions extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Transactions.init(
		{
			id_user: DataTypes.INTEGER,
			id_product: DataTypes.INTEGER,
			order_date: DataTypes.DATE,
		},
		{
			sequelize,
			modelName: 'Transactions',
		}
	);
	return Transactions;
};
