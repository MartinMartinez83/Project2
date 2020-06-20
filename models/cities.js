module.exports = function(sequelize, DataTypes) {
    var Cities = sequelize.define("Cities", {
      cityName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    Cities.associate = function(models) {
      Cities.hasMany(models.Items);
    };
  
    return Cities;
  };