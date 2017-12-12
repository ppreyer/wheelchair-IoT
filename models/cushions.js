// Cushion Sequelize Model

module.exports = function(sequelize, DataTypes) {
  var Cushion = sequelize.define("Cushion", {
    scanner_number: {
      type: DataTypes.INTEGER
    },
    facility_location: {
      type: DataTypes.STRING
    },
    spring_rate: {
      type: DataTypes.INTEGER, defaultValue: 100
    }
  });

  Cushion.associate = function(models) {
    // Associate each cushion to have many sensor datapoints
    Cushion.hasMany(models.Sensor, {
    });
    // Associate each cushion to belong to one facility
    Cushion.belongsTo(models.Facility, {
    });
  };
  return Cushion;
};