'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course.belongsToMany(models.User, {
        through: 'Enrollments',
        foreignKey: 'courseID',
      });
      Course.hasMany(models.Content, { foreignKey: 'courseID' });

      Course.hasMany(models.Review, { foreignKey: 'courseID' });
      Course.belongsTo(models.User, { foreignKey: 'mentorID' });

      Course.hasMany(models.Cart, { foreignKey: 'courseID' });

      Course.belongsTo(models.Category, { foreignKey: 'categoryID' });
      
      Course.belongsTo(models.Mentor, { foreignKey: 'mentorID' });
    }
  }
  Course.init({
    title: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.TEXT('long'),
    short_desc: DataTypes.STRING,
    notes: DataTypes.STRING,
    duration: DataTypes.STRING,
    image: DataTypes.STRING,
    categoryID: DataTypes.STRING,
    mentorID : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};