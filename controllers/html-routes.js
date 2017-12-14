// Display handlebar pages
var db = require("../models");

console.log('LOAD html-routes.js');

module.exports = function(app) {
  // Render html routes for app
  // app.get("/home", function(req, res) {
  //   return res.render("home");
  // });

  // app.get("/new-cushion", function(req, res) {
  //   return res.render("new-cushion");
  // });

  app.get("/facilities", function(req, res) {
    return res.render("facilities");
  });

  // app.get("/cushion-info", function(req, res) {
  //   return res.render("cushion-info");
  // });

};