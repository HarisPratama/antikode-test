'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        "name": "Nokia",
        "picture": "logo1",
        "price": 10000,
        "BrandId": 1
      },
      {
        "name": "Nokia 1",
        "picture": "logo1",
        "price": 10000,
        "BrandId": 1
      },
      {
        "name": "Sumsang ",
        "picture": "logo1",
        "price": 10000,
        "BrandId": 2
      },
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
