"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Carts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Carts.belongsTo(models.User, { foreignKey: "userID" });
      Carts.belongsTo(models.Course, { foreignKey: "courseID" });
    }
  }
  Carts.init(
    {
      userID: DataTypes.INTEGER,
      courseID: DataTypes.INTEGER,
      subtotal: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Carts",
    }
  );
  return Carts;
};
