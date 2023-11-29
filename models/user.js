"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Course, {
        through: "Enrollments",
        foreignKey: "userID",
      });

      User.hasOne(models.Mentor, { foreignKey: "userID" });
      User.hasOne(models.MentorProfile, { foreignKey: "userID" });

      User.hasMany(models.Reviews, { foreignKey: 'userID' });
      User.hasMany(models.Course, { foreignKey: 'mentorID' });

      User.hasMany(models.Cart, { foreignKey: 'userID' });
    }
  }
  User.init(
    {
      Name: DataTypes.STRING,
      Avatar: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
