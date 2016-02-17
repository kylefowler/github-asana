/**
 * Module dependencies.
 */

var express = require('express')
  , github_asana = require('./lib/github-asana')
  , bodyParser = require('body-parser');

var app = module.exports = express();

function error(err, req, res, next) {
  // log it
  console.error(err.stack);

  // respond with 500 "Internal Server Error".
  res.status(500);
  res.send('Internal Server Error');
}

// Configuration
app.use(bodyParser.urlencoded());
app.use(bodyParser.json())
//app.use(express.methodOverride());
//app.use(app.router());
app.use(error);

// Routes
app.post('/', github_asana.index);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
