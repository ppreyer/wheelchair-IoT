// Nurse Sequelize Models
module.exports = function(sequelize, DataTypes) {
  var Nurse = sequelize.define("Nurse", {
    name: {
      type: DataTypes.STRING
    },
    username: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  });

  Nurse.associate = function(models) {
    Nurse.hasMany(models.Patient, {

    });
  };
  return Nurse;
};