// Declare server environment and npm packages
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var path = require("path");
var Highcharts = require('highcharts');

// Load module after Highcharts is loaded
// require('highcharts/modules/exporting')(Highcharts);

var app = express();
var PORT = process.env.PORT || 3000;

var db = require("./models");

// Apply middleware bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

// Declare public as a main path
app.use(express.static("public"));

// Setup handlebars
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

require("./controllers/html-routes.js")(app);
require("./controllers/cushion-routes.js")(app);
require("./controllers/facilities.js")(app);
require("./controllers/sensor-data.js")(app);
// require("./public/Javascript/home.js")(highChart);

// Sync to local MySQL DB and start server
db.sequelize.sync({
    force: true
}).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on " + PORT);
    });
});