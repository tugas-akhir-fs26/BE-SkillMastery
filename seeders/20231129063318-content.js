'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Contents', [{
      courseID: 1,
      section : `{"section_1" : "bla bla bla", "section_2" : 'bla bla bla'}`,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      courseID: 2,
      section : "{section_1 : 'bla bla bla', section_2 : 'bla bla bla'}",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Contents', null, {});
  }
};
