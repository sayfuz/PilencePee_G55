'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'Jaime Andrés',
        last_name: 'Azcarate Carmona',
        phone: 3175213008,
        role: "root",
        email: 'jaimeandres196@hotmail.com',
        password: 'burgundy'
      },
      {
        name: 'Mateo',
        last_name: 'Rodríguez Marín',
        phone: 3122790701,
        role: "root",
        email: 'mate-45@hotmail.com',
        password: 'burgundy'
      },
      {
        name: 'Lina María',
        last_name: 'Castañeda Cárdenas',
        phone: 3208942453,
        role: "root",
        email: 'lina-mariacast@hotmail.com',
        password: 'burgundy'
      },
      {
        name: 'Stiven David',
        last_name: 'Cabrera Linero',
        phone: 3022188675,
        role: "root",
        email: 'steven_cab@hotmail.com',
        password: 'burgundy'        
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', {}, null);
  }
};
