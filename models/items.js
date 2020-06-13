module.exports = function(sequelize, DataTypes) {
  var Items = sequelize.define("Items", {
    name: {
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
    //     title: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     validate: {
    //       len: [1]
    //     }
    //   },
    //   body: {
    //     type: DataTypes.TEXT,
    //     allowNull: false,
    //     len: [1]
    //   }
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
