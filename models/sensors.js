// Nurse Sequelize Models
module.exports = function(sequelize, DataTypes) {
  var Sensor = sequelize.define("Sensor", {
    spring_rate: {
        type: DataTypes.INTEGER
      }
  });

// Assocate sensor datapoints to have one cushion ID
  Sensor.associate = function(models) {
    Sensor.belongsTo(models.Cushion, {
    });
  };
  return Sensor;
};