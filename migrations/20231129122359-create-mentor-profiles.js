'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Mentor_Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references :  {
          model : {
            tableName : "Users"
          },
          key : "id"
        },
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      },
      mentorID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references :  {
          model : {
            tableName : "Users"
          },
          key : "id"
        },
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      },
      bio: {
        type: Sequelize.TEXT,
        allowNull : false
      },
      skill: {
        type: Sequelize.TEXT,
        allowNull : false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Mentor_Profiles');
  }
};