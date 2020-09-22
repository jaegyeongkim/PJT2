const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Mouse = sequelize.define(
    "Mouse",
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
      image: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      explainn: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "Mouses",
      charset: "utf8",
      collate: "utf8_unicode_ci",
      timestamps: false,
    }
  );

  return Mouse;
};
