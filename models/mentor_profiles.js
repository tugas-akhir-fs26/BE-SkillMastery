"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Mentor_Profiles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Mentor_Profiles.belongsTo(models.User, { foreignKey: "userID" });
      Mentor_Profiles.belongsTo(models.Mentor, { foreignKey: "mentorID" });
    }
  }
  Mentor_Profiles.init(
    {
      userID: DataTypes.INTEGER,
      mentorID: DataTypes.INTEGER,
      bio: DataTypes.TEXT,
      skill: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Mentor_Profiles",
    }
  );
  return Mentor_Profiles;
};
