'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Contents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      section: {
        type: Sequelize.TEXT('long'),
        allowNull: false,
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
    await queryInterface.dropTable('Contents');
  }
};