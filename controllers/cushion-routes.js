var db = require("../models");

console.log('LOAD cushion-routes.js');

module.exports = function(app) {
  
  app.get("/new-cushion", function (req, res, next) {
     db.Facility.findAll({}).then(function(result) {
      var facilityObject = {
        facilities: result
      }
      res.locals.result = result;
      console.log(facilityObject);
     next()
    });
  },
    function(req, res) {

    db.Cushion.findAll({}).then(function(result) {
      var hbsObject = {
        cushions: result,
        facilities: res.locals.result
      }
      console.log();
      return res.render("new-cushion", hbsObject);
    });
  });

  // Add a new cushion to database
  app.post("/new-cushion", function(req, res) {
    convertStringToInt(req.body.scanner_number);
    convertStringToInt(req.body.FacilityId);
    console.log("BODY", req.body.FacilityId);
    var newCushion = {
      scanner_number: req.body.scanner_number,
      facility_location: req.body.facility_location,
      FacilityId: req.body.FacilityId
    }
    db.Cushion.create(newCushion).then(function(result) {  
      console.log("NEW", result)
      return res.json(result);
    });
  });

 app.post("/cushion-info", function (req, res) {
  convertStringToInt(req.body.id);
    db.Cushion.findAll({
      where: {
        id: req.body.id
      }
    }).then(function(result) {
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



