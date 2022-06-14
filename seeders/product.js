'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
			{
				id_user: 1,
				id_category: 1,
				product_name: 'radio bekas',
				product_description: 'murah masih fungsi',
				price: 1000,
				product_image: 'radio.jpg',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			{
				id_user: 2,
				id_category: 2,
				product_name: 'sepeda bekas',
				product_description: 'murah masih fungsi',
				price: 21000,
				product_image: 'sepeda.jpg',
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
