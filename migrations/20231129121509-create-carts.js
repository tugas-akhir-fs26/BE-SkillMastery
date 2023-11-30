'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Carts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model : {
            tableName : "Users"
          },
          key : "id"
        },
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      },
      courseID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model : {
            tableName : "Courses"
          },
          key : "id"
        },
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      },
      subtotal: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Carts');
  }
};