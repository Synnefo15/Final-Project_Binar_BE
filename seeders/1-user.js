'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Users', [
			{
				id: 1,
				role_name: 'admin',
				email: 'user1@email.com',
				password: 'user111',
				hp: '081234',
				foto: 'gambar1.jpg',
				alamat: 'probolinggo',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id: 2,
				role_name: 'admin',
				email: 'user2@email.com',
				password: 'user222',
				hp: '081234',
				foto: 'gambar1.jpg',
				alamat: 'lumajang',
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
