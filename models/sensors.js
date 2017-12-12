// Nurse Sequelize Models
module.exports = function(sequelize, DataTypes) {
  var Sensor = sequelize.define("Sensor", {
    
  });

// Assocate sensor datapoints to have one cushion ID
  Sensor.associate = function(models) {
    Sensor.hasOne(models.Cushion, {
      compression_value: {
        type: DataTypes.INTEGER
      }
    });
  };
  return Sensor;
};