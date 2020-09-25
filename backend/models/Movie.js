const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    "Movie",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      poster: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      genre: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      birth: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      total_cnt: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "Movies",
      charset: "utf8",
      collate: "utf8_unicode_ci",
      timestamps: false,
    }
  );

  return Movie;
};