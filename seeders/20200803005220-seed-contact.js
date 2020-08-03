"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Contacts", [
      {
        firstname: "Marluan",
        lastname: "Ricardo",
        phone: "79827343",
        email: "ricardo@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: "Maximo",
        lastname: "Junior",
        phone: "79855343",
        email: "maximpeoficiales@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
