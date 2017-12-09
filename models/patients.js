// Patient Sequelize Model

module.exports = function(sequelize, DataTypes) {
  var Patient = sequelize.define("Patient", {
    name: {
      type: DataTypes.STRING
    },
    age: {
      type: DataTypes.INTEGER
    },
    weight: {
      type: DataTypes.INTEGER
    },
    chair_hours: {
      type: DataTypes.INTEGER
    },
    diagnosis: {
      type: DataTypes.TEXT
    }
  });

  Patient.associate = function(models) {
    Patient.belongsTo(models.Nurse, {
      foreignKey: {
        allowNull: false
      }
    });
    Patient.hasOne(models.Patient, {
      foreignKey: {
        allowNull: false
      }
    });  
  };

  return Patient;
};