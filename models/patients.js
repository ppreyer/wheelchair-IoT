// Facility Sequelize Model

module.exports = function(sequelize, DataTypes) {
  var Facility = sequelize.define("Facility", {
    name: {
      type: DataTypes.STRING
    },
    location: {
      type: DataTypes.INTEGER
    }
  });
  // Associate each facility to have many cushions
  Facility.associate = function(models) {
    Facility.hasMany(models.Cushion, {
      foreignKey: {
        allowNull: false
      }
    });  
  };

  return Facility;
};

