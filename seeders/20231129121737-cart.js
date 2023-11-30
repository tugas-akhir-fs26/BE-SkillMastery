'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Carts', [{
      userID: 1,
      courseID: 2,
      subtotal : "Rp.200.000",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userID: 1,
      courseID: 1,
      subtotal : "Rp.150.000",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Carts', null, {});
  }
};
