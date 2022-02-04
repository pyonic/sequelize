'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {name: 'Andy', email: 'adny@gmail.com', role: 'USER', createdAt: new Date(), updatedAt: new Date()},
      {name: 'Lucy', email: 'Lucy@gmail.com', role: 'USER', createdAt: new Date(), updatedAt: new Date()},
      {name: 'Aknes', email: 'Aknes@gmail.com', role: 'USER', createdAt: new Date(), updatedAt: new Date()},
      {name: 'Warmot', email: 'Warmot@gmail.com', role: 'USER', createdAt: new Date(), updatedAt: new Date()},
      {name: 'Jim', email: 'Jim@gmail.com', role: 'USER', createdAt: new Date(), updatedAt: new Date()},
      {name: 'Dwight', email: 'Dwight@gmail.com', role: 'USER', createdAt: new Date(), updatedAt: new Date()},
      {name: 'Michle', email: 'Michle@gmail.com', role: 'ADMIN', createdAt: new Date(), updatedAt: new Date()},
      {name: 'Rachol', email: 'Rachol@gmail.com', role: 'USER', createdAt: new Date(), updatedAt: new Date()}]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
