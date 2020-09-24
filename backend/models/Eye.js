const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Eye = sequelize.define(
    "Eye", {
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
      image: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      explain: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
    }, {
      sequelize,
      tableName: "Eyes",
      charset: "utf8",
      collate: "utf8_unicode_ci",
      timestamps: false,
    }
  );

  return Eye;
};