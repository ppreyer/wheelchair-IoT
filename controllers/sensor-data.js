var db = require("../models");

module.exports = function(app) {

  app.get("/dummy-data", function (req, res, next) {
     db.Cushion.findAll({}).then(function(result) {
      var cushionObject = {
        cushions: result
      }
      res.locals.result = result;
      console.log("CUSHION", cushionObject);
     next()
    });
  },
    function(req, res) {

    db.Sensor.findAll({}).then(function(result) {
      var hbsObject = {
        sensors: result,
        cushions: res.locals.result
      }
      return res.render("dummy-data", hbsObject);
    });
  });


app.post("/dummy-data", function(req, res) {
    convertStringToInt(req.body.CushionId);
    convertStringToInt(req.body.spring_rate);
    console.log("BODY", req.body);
    var newDataPoint = {
      spring_rate: req.body.spring_rate,
      CushionId: req.body.CushionId
    }
    db.Sensor.create(newDataPoint).then(function(result) {  
      console.log("NEW", result)
      return res.json(result);
    });
  });


function convertStringToInt(body) {
  if (typeof body === 'string') {
    body = 'number';
    return body;
  };
};

};