// Display handlebar pages
var db = require("../models");

module.exports = function(app) {
  app.get("/home", function(req, res) {
    return res.render("nurses");
  });

  app.get("/patient-form", function(req, res) {
    return res.render("patient-form");
  });

  app.get("/patient-info", function(req, res) {
    return res.render("patient-info");
  });

};