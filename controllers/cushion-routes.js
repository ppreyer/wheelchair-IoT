var db = require("../models");

module.exports = function(app) {
  
  app.get("/new-cushion", function(req, res) {
    console.log("I got here");
    db.Cushion.findAll({}).then(function(result) {
      console.log("FIND", result);
      var hbsObject = {
        cushions: result
      }
      return res.render("new-cushion", hbsObject);
    });
  });

  // Add a new cushion to database
  app.post("/new-cushion", function(req, res) {
    convertStringToInt(req.body.scanner_number);
    var newCushion = {
      scanner_number: req.body.scanner_number,
      facility_location: req.body.facility_location
    }
    db.Cushion.create(newCushion).then(function(result) {  
      console.log("NEW", result)
      return res.json(result);
    });
  });

  app.put("/new-cushion/:id"), function(req, res) {
    convertStringToInt(req.body.scanner_number);
    db.Cushion.update(req.body, 
    {
      where: {
        scanner_number: req.params.id
      }
    }).then(function(result) {
      return res.json(result);
    });
  };

function convertStringToInt(body) {
  if (typeof body === 'string') {
    body = 'number';
    return body;
  };
};

};



