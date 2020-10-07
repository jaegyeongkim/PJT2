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
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      birth: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      userRating: {
        type: DataTypes.FLOAT(),
        allowNull: true,
      },
      movie_cd: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      actors: {
        type: DataTypes.STRING(200),
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
