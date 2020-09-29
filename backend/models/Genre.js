const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define(
    "Genre",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      genre_name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "Genres",
      charset: "utf8",
      collate: "utf8_unicode_ci",
      timestamps: false,
    }
  );
  // User.associate = function (models) {
  //   User.hasMany(models.Coupon, {
  //     foreignKey: "user_id",
  //     onDelete: "cascade",
  //   });
  // };

  return Genre;
};
