// Cushion Sequelize Model

module.exports = function(sequelize, DataTypes) {
  var Cushion = sequelize.define("Cushion", {
    name: {
      type: DataTypes.STRING
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
      foreignKey: {
        allowNull: false
      }
    });
    // Associate each cushion to belong to one facility
    Cushion.belongsTo(models.Facility, {
      foreignKey: {
        allowNull: {
          allowNull: false
        };
      }
    })
  };
  return Cushion;
};