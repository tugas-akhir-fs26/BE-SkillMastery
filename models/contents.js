'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Contents.belongsTo(models.Course, { foreignKey: 'courseID' });
    }
  }
  Contents.init({
    courseID: DataTypes.INTEGER,
    section: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Contents',
  });
  return Contents;
};