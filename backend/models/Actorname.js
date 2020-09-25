const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Actorname = sequelize.define(
    "Actorname",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "Actornames",
      charset: "utf8",
      collate: "utf8_unicode_ci",
      timestamps: false,
    }
  );

  return Actorname;
};
