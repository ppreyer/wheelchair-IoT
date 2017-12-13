var db = require("../models");

module.exports = function(app) {
  // Add a new facility to database

  app.get("/home", function(req, res) {
    db.Facility.findAll({}).then(function(data) {
      console.log("ALL", data);
      return res.json(data);
      });
      // return res.render("facilities", hbsObject);
    });

  app.post("/home", function(req, res) {
    var newFacility = {
      location: req.body.location
    }
    db.Facility.create(newFacility).then(function(result) {  
      // console.log("NEW", result);
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
