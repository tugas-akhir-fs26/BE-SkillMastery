'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Reviews.belongsTo(models.User, { foreignKey: 'userID' });
      Reviews.belongsTo(models.Course, { foreignKey: 'courseID' });
    }
  }
  Reviews.init({
    userID: DataTypes.INTEGER,
    courseID: DataTypes.INTEGER,
    rating: DataTypes.FLOAT,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reviews',
  });
  return Reviews;
};