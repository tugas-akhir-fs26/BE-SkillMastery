'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Reviews', [{
      userID: 1,
      courseID: 1,
      rating : 4.8,
      comment : "coursenya bagus hehehe",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userID: 2,
      courseID: 1,
      rating : 4.8,
      comment : "coursenya bagus hehehe",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
