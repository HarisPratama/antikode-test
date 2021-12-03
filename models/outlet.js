'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Outlet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Outlet.belongsTo(models.Brand)
    }
  };
  Outlet.init({
    name: DataTypes.STRING,
    picture: DataTypes.STRING,
    address: DataTypes.STRING,
    longitude: DataTypes.DECIMAL(8, 6),
    latitude: DataTypes.DECIMAL(9, 6),
    position: DataTypes.GEOMETRY('POINT', 4326),
    BrandId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Outlet',
  });
  return Outlet;
};