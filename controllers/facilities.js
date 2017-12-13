var db = require("../models");

module.exports = function(app) {
  // Add a new cushion to database
  app.post("/facilities", function(req, res) {
    db.Facility.create(req.body).then(function(result) {  
      return res.json(result);
    });
  });

};