const { STRING } = require("sequelize/types");

module.exports = function(sequelize, DataTypes) {
  var Items = sequelize.define("Items", {
    itemName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.NUMERIC,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1, 250],
    },
    category: {
      type: DataTypes.STRING,
    },
    photo: {
      type: DataTypes.STRING,
    },
  });

  Items.associate = function(models) {
    Items.belongsTo(models.Seller, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Items;
};
