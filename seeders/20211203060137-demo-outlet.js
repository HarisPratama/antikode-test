'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Outlets', [{
      "name": "Outlet 2",
      "picture": "logo1",
      "address": "logo2",
      "longitude": "99.999999",
      "latitude": "-6.175570",
      "position": Sequelize.fn('ST_GeomFromText', 'POINT(106.821360890536 -6.17557013902034)'),
      "BrandId": 1,
    },
    {
      "name": "Outlet 1",
      "picture": "logo1",
      "address": "logo2",
      "longitude": "99.999999",
      "latitude": "-6.195032",
      "position": Sequelize.fn('ST_GeomFromText', 'POINT(106.832188979332 -6.195031641662204)'),
      "BrandId": 1,
    },
    {
      "name": "Outlet 4",
      "picture": "logo1",
      "address": "logo2",
      "longitude": "99.999999",
      "latitude": "-6.240574",
      "position": Sequelize.fn('ST_GeomFromText', 'POINT(106.84357998025038 -6.240574353129212)'),
      "BrandId": 1,
    },
    {
      "name": "Outlet 5",
      "picture": "logo1",
      "address": "logo2",
      "longitude": "99.999999",
      "latitude": "-6.120074",
      "position": Sequelize.fn('ST_GeomFromText', 'POINT(106.70481465518596 -6.120074037858169)'),
      "BrandId": 1
    },
    {
      "name": "Outlet 9",
      "picture": "logo1",
      "address": "logo2",
      "longitude": "99.999999",
      "latitude": "-6.391974",
      "position": Sequelize.fn('ST_GeomFromText', 'POINT(106.86878402075546 -6.391973580927803)'),
      "BrandId": 1
    },
    {
      "name": "Outlet 11",
      "picture": "logo1",
      "address": "logo2",
      "longitude": "99.999999",
      "latitude": "-6.172024",
      "position": Sequelize.fn('ST_GeomFromText', 'POINT(106.84349032918678 -6.172024175289158)'),
      "BrandId": 1
    },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Outlets', null, {});
  }
};
