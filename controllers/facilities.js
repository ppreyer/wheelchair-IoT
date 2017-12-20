var db = require("../models");
var Sequelize = require('sequelize');
const Op = Sequelize.Op;
var moment = require('moment');
var CurrentDate = moment();

module.exports = function(app) {
    // Add a new facility to database

    app.get("/home", function(req, res, next) {
            db.Facility.findAndCountAll({}).then(function(result) {
                facility = result;
                next();
            });
        },
        function(req, res, next) {
            db.Cushion.findAll({}).then(function(result) {
                calculateAverageAge(result);
                next();
            });
        },
        function(req, res, next) {
            db.Cushion.findAndCountAll({
                where: {
                    spring_rate: {
                        [Op.lt]: 80
                    }
                }
            }).then(function(result) {
                rate = result
                next();
            });
        },
        function(req, res, next) {
            db.Cushion.findAndCountAll({
                where: {
                    spring_rate: {
                        [Op.between]: [80, 90]
                    }
                }
            }).then(function(result) {
                lowRate = result
                next();
            });
        },
        function(req, res) {

            db.Cushion.findAndCountAll({}).then(function(result) {
                var hbsObject = {
                    cushions: result,
                    facilities: facility,
                    spring_rate: rate,
                    lowRate: lowRate
                }
                return res.render("home", hbsObject);
            });
        });


    app.get("/facilities", function(req, res) {
        db.Facility.findAll({
            include: [db.Cushion]
        }).then(function(result) {
            var hbsObject = {
                facilities: result
            }
            return res.render("facilities", hbsObject);
        });
    });

    app.post("/home", function(req, res) {
        var newFacility = {
            location: req.body.location
        }
        db.Facility.create(newFacility).then(function(result) {
            return res.json(result);
        });
    })
};

function calculateAverageAge(result) {
    if (result.length === 0) {
        return;
    } else {
        var converted = moment(result[0].dataValues.createdAt, "YYYY-MM-DD");
        console.log("TIMESTAMP", converted);
    }
}