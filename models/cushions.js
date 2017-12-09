// Cushion Sequelize Model

module.exports = function(sequelize, DataTypes) {
  var Cushion = sequelize.define("Cushion", {
    name: {
      type: DataTypes.STRING
    },
    total_compressions: {
      type: DataTypes.INTEGER
    },
    usage: {
      type: DataTypes.INTEGER
    },
    compressions_left: {
        type: DataTypes.INTEGER
      }
  });

  Cushion.associate = function(models) {
    Cushion.belongsTo(models.Patient, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Cushion;
};