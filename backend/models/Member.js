const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define(
    "Member",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        unique: true,
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      birth: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "Members",
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

  return Member;
};
