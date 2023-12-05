'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      Name: 'skillmastery',
      Avatar: '',
      email: 'skillmastery@gmail.com',
      password : "123",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      Name: 'Andri',
      Avatar: '',
      email: 'andri@gmail.com',
      password : "123",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
