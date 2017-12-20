# Smart Cushion App
A web and mobile application that allows an end user to easily track the inventory of their smart cushions.  A potential end user might fit the following use cases: a manager of a cushion manufacturing plant, a nurse managing wheelchair cushions for his/her patients, or a sales rep deciding on facilities that need new wheelchair cushions.

## Running the App
This app is hosted on Heroku and can be visted here: https://floating-eyrie-92880.herokuapp.com/home.
You may also run the application locally.  You'll first need to setup a local database and adjust the config.json file located in the config directory to your local settings.  Additionally, please initialize npm to download the required package dependencies for your local environment. Lastly, you can start the app by typing either 'npm start' or 'node server.js' into your CLI.

## Beta App Features
The first version of the application consists of three pages:
1. Homepage 2. Cushions 3. Facilities  

1. Homepage - The homepage is where the end user will be able to track data at the aggregate level include total facilities in the system, total number of cushions currently in use, total number of cushions that are close to dipping under health care safety regulations, and total number of cushions that are under the regulation line and need replacement.  The user will also be able to add a new Facility on this page as well as navigate to the other two pages 

<img width="751" alt="homepage" src="https://user-images.githubusercontent.com/1817873/34223336-f17ceff0-e58c-11e7-90ba-8ba65250ce17.PNG">

2. Cushions - The cushions page is where the end user will be able to look at cushion information for each active facility in the system. The table is sortable by Facility Number, Facility Name, and Total Number of Cushions per Facility. A user can also add a new cushion to a particular facility and enter its Spring Rate (Health of Cushion) on this page.

<img width="713" alt="cushions" src="https://user-images.githubusercontent.com/1817873/34223334-f15d5352-e58c-11e7-81cb-873b24622292.PNG">

3. Facilities - The facilities page is where the end user can look at cushion inventory data for a particular facility. This data can be accessed by clicking on any 'Facility Number' in the table located on the Cushions page.

<img width="774" alt="facilities" src="https://user-images.githubusercontent.com/1817873/34223335-f16da3ec-e58c-11e7-8965-1bceb1be2d2a.PNG">

## Technologies
Server Environment: node.js and express.js | Heroku
Database: MySQL | JawsDB
CSS: Twitter Bootstrap
NPM Packages: body-parser, chart.js, tablesorter.js, handlebars, path, sequelize,
Testing: mocha.js, chai.js, nightmare

## Contributors
Parker Preyer (ppreyer) and Will Holt (willholt11)

