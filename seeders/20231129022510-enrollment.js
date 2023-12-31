'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Enrollments', [
      {
      userID : 1,
      courseID : 13,
      enrollment_date : new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
      {
      userID : 1,
      courseID : 14,
      enrollment_date : new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Enrollments', null, {});
  }
};
