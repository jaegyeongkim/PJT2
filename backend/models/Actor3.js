const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Actor3 = sequelize.define(
    "Actor3",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      gender: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      birth: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      face: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      movie: {
        type: DataTypes.STRING(250),
        allowNull: true,
      },
      video: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      movie_total: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "Actors3",
      charset: "utf8",
      collate: "utf8_unicode_ci",
      timestamps: false,
    }
  );

  return Actor3;
};
