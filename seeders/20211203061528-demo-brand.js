'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Brands', [
      {
        "name": "Nokia",
        "logo": "logo1",
        "banner": "logo2"
      },
      {
        "name": "Samsung",
        "logo": "logo1",
        "banner": "logo2"
      },
      {
        "name": "Apple",
        "logo": "logo1",
        "banner": "logo2"
      },
      {
        "name": "Xiaomi",
        "logo": "logo1",
        "banner": "logo2"
      },
      {
        "name": "MITO",
        "logo": "logo1",
        "banner": "logo2"
      },
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
