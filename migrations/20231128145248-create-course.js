'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT('long'),
        allowNull: false,
      },
      short_desc: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      notes: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      duration: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      categoryID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model : {
            tableName : "Categories"
          },
          key : "id"
        },
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
      },
      mentorID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model : {
            tableName : "Mentors"
          }, 
          key : "id"
        },
        onDelete : "CASCADE",
        onUpdate : "CASCADE"
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
    await queryInterface.dropTable('Courses');
  }
};