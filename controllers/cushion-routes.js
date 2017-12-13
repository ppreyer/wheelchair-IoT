var db = require("../models");

module.exports = function(app) {
  Add a new cushion to database
  app.post("/new-cushion", function(req, res) {
    convertStringToInt(req.body.scanner_number);
    db.Cushion.create(req.body).then(function(result) {  
      return res.json(result);
    });
  })
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
  };
};

};



