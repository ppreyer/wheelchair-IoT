// Facility Sequelize Model

module.exports = function(sequelize, DataTypes) {
  var Facility = sequelize.define("Facility", {
    // name: {
    //   type: DataTypes.STRING
    // },
    location: {
      type: DataTypes.STRING
    }
  });
  // Associate each facility to have many cushions
  Facility.associate = function(models) {
    Facility.hasMany(models.Cushion, {
    });  
  };  
  return Facility;
}

