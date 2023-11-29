'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mentor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Mentor.belongsTo(models.User, { foreignKey: 'userID' });
      Mentor.hasMany(models.Course, { foreignKey: 'mentorID' });
    }
  }
  Mentor.init({
    userID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Mentor',
  });
  return Mentor;
};