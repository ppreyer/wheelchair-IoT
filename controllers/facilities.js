var db = require("../models");

module.exports = function(app) {
  // Add a new facility to database

  app.get("/home", function(req, res, next) {
    db.Facility.findAll({}).then(function(result) {
      var facilityObject = {
        facilities: result
      }
      res.locals.result = result;
      next();
    });
  },
    function(req, res) {

    db.Cushion.findAndCountAll({}).then(function(result) {
      var hbsObject = {
        cushions: result,
        facilities: res.locals.result
      }
      // return res.json(result);
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
      // return res.json(result);
      return res.render("facilities", hbsObject);
    });
  });

  app.post("/home", function(req, res) {
    var newFacility = {
      location: req.body.location
    }
    db.Facility.create(newFacility).then(function(result) {  
      console.log("NEW", result);
      return res.json(result);
    });
  })
  };
  // app.post("/facilities", function(req, res) {
  //   db.Facility.findAll({
  //     include: [db.Cushion]
  //   }).then(function(result) {
  //     var hbsObject = {
  //       facilities: result
  //     }
  //     return res.render("facilities", hbsObject);
  //   });
  // });
