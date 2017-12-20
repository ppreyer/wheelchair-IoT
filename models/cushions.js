// Cushion Sequelize Model
module.exports = function(sequelize, DataTypes) {
    var Cushion = sequelize.define("Cushion", {
        description: {
            type: DataTypes.STRING
        },
        facility_location: {
            type: DataTypes.STRING
        },
        spring_rate: {
            type: DataTypes.INTEGER
        }
    });

    Cushion.associate = function(models) {
        // Associate each cushion to have many sensor datapoints
        Cushion.hasMany(models.Sensor, {});
        // Associate each cushion to belong to one facility
        Cushion.belongsTo(models.Facility, {
            foreignKey: 'FacilityId',
            as: 'Cushion'
        });
    };
    return Cushion;
};