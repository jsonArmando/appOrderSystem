var express = require('express');
var bodyParser = require('body-parser');
var properties = require('./config/properties')
var db = require('./config/database');
var customersRoutes = require('./customers/customers.routes');
var technicalsRoutes= require('./technical/technicals.routes');
var ticketsRoutes = require('./ticket/ticket.routes');
//Init db
db();

var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });
var app = express();

app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

//Init Routes
var router = express.Router();
//use express router
app.use('/api', router)
customersRoutes(router);
technicalsRoutes(router);
ticketsRoutes(router);

app.listen(properties.PORT, () => console.log(`Server is running on ${properties.PORT}`));
