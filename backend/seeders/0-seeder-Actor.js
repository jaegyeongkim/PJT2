"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let datas = [{
      gender: "남자",
      name: "sungho",
      image: "asdfasdf",
      birth: "asdfasdf",
      face: "asdfasd",
      movie: "test",
      video: "test",
    }, ];

    return queryInterface.bulkInsert("Actors", datas, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Actors", null, {});
  },
};