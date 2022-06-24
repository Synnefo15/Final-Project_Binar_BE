'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Transactions', [
			{
				id_user: 1,
				id_product: 7,
				order_date: new Date(),
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id_user: 2,
				id_product: 8,
				order_date: new Date(),
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
