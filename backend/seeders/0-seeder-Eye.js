"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let datas = [{
      name: "test",
      image: "test",
      explain: "test",
    }, ];

    return queryInterface.bulkInsert("Eyes", datas, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Eyes", null, {});
  },
};
// peopleCd, repRoleNm, homepages, 