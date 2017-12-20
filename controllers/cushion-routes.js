var db = require("../models");
var Sequelize = require('sequelize');
const Op = Sequelize.Op;
var moment = require('moment');
var CurrentDate = moment();
console.log(CurrentDate);

console.log('LOAD cushion-routes.js');
module.exports = function(app) {

    app.get("/new-cushion", function(req, res) {
        db.Facility.findAll({
            include: [{
                model: db.Cushion,
                as: 'Cushion'
            }],
            attributes: ['id', 'location', [Sequelize.fn('COUNT', Sequelize.col('Cushion.FacilityId')), 'count']],
            group: 'Cushion.FacilityId'
        }).then(function(result) {
            res.locals.result = result;
            console.log("HERE", result);
            var hbsObject = {
                facilities: res.locals.result
            };
            return res.render("new-cushion", hbsObject)
        });
    });

    // Add a new cushion to database
    app.post("/new-cushion", function(req, res) {
        convertStringToInt(req.body.spring_rate);
        convertStringToInt(req.body.FacilityId);
        var newCushion = {
            spring_rate: req.body.spring_rate,
            FacilityId: req.body.FacilityId
        }
        db.Cushion.create(newCushion).then(function(result) {
            return db.Facility.findAll({}).then(function(result) {
                res.locals.result = result;
                res.locals.result.forEach(function(facility, i, arr) {
                    db.Cushion.count({
                        where: {
                            'FacilityId': facility.id
                        }
                    }).then(function(result) {
                        facility.count = result;
                    });
                });
                var hbsObject = {
                    facilities: res.locals.result
                };
                return res.render("new-cushion", hbsObject);
            });
        });
    });

    app.post("/cushion-info", function(req, res) {
        convertStringToInt(req.body.id);
        db.Cushion.findAll({
            where: {
                id: req.body.id
            }
        }).then(function(result) {
            return res.json(result);
        });
    });


    app.put("/new-cushion/:id"),
        function(req, res) {
            convertStringToInt(req.body.scanner_number);
            db.Cushion.update(req.body, {
                where: {
                    scanner_number: req.params.id
                }
            }).then(function(result) {
                return res.json(result);
            });
        };

    app.get("/facilities", function(req, res, next) {
            console.log("TAG", req.query.tagId);
            db.Cushion.findAndCountAll({
                where: {
                    FacilityId: req.query.tagId
                }
            }).then(function(result) {
                res.locals.result = result;
                console.log("FACILITY", res.locals.result);
                next();
            });
        },

        function(req, res, next) {
            db.Cushion.findAndCountAll({
                where: {
                    FacilityId: req.query.tagId,
                    spring_rate: {
                        [Op.lt]: 80
                    }
                }
            }).then(function(result) {
                rate = result
                console.log("SPRING RATE", rate)
                next();
            });
        },
        function(req, res) {
            db.Cushion.findAndCountAll({
                where: {
                    FacilityId: req.query.tagId,
                    spring_rate: {
                        [Op.between]: [80, 90]
                    }
                }
            }).then(function(result) {
                lowRate = result
                console.log("REPLACE", lowRate);

                var hbsObject = {
                    facilities: res.locals.result,
                    spring_rate: rate,
                    lowRate: lowRate
                }
                console.log(hbsObject);
                return res.render("facilities", hbsObject);
            });
        });

    function convertStringToInt(body) {
        if (typeof body === 'string') {
            body = 'number';
            return body;
        };
    };

};
