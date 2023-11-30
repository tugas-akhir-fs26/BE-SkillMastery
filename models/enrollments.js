"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Enrollments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Enrollments.belongsTo(models.User, { foreignKey: "userID" });
      Enrollments.belongsTo(models.Course, { foreignKey: "courseID" });
    }
  }
  Enrollments.init(
    {
      userID: DataTypes.INTEGER,
      mentorID: DataTypes.INTEGER,
      enrollment_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Enrollments",
    }
  );
  return Enrollments;
};
