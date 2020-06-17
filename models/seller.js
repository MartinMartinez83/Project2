module.exports = function(sequelize, DataTypes) {
  let Seller = sequelize.define("Seller", {
    // Giving the Author model a name of type STRING
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Seller.associate = function(models) {
    Seller.hasMany(models.Items, {
      onDelete: "cascade",
    });
  };

  return Seller;
};
