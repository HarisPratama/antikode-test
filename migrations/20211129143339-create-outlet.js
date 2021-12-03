'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Outlets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      picture: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      longitude: {
        type: Sequelize.DECIMAL(8, 6)
      },
      latitude: {
        type: Sequelize.DECIMAL(9, 6)
      },
      position: {
        type: Sequelize.GEOMETRY('POINT', 4326)
      },
      BrandId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Outlets');
  }
};