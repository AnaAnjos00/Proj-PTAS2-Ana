'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('pessoas', null, [
      {nome:'Qiqi', idade:10, sobrenome: 'Zombi'},
      {nome:'Hu Tao', idade:17, sobrenome: 'Yaki'},
      {nome:'Ganyu', idade:16, sobrenome: 'Guard'},
      {nome:'Keqing', idade:18, sobrenome: 'Lira'},
      {nome:'Kyra', idade:20, sobrenome: 'Sawamura'}   
    ]
      );
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('pessoas', null, {});
     
  }
};
