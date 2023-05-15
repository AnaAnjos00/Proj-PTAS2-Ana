'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('usuarios', [
      {nome: 'Milly'},
      {nome: 'Nynna'},
      {nome: 'Beidou'},
      {nome: 'Barbara'},
      {nome: 'Ganyu'}

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
