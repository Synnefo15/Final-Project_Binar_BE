'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Products extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Products.init(
		{
			id_user: DataTypes.INTEGER,
			id_category: DataTypes.INTEGER,
			product_name: DataTypes.STRING,
			product_description: DataTypes.STRING,
			price: DataTypes.INTEGER,
			product_image: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Products',
		}
	);
	return Products;
};
