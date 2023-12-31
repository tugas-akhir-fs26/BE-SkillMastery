'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Categories", [
      {
        name: "coding",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "design",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "musik",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "marketing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "business",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "machine learning",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};

