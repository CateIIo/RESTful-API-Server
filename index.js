/*
 * Primary file for the api
 *
 */

 // Dependencies
var server = require('./lib/server');
var workers = require('./lib/workers');

// Declare the app
var app = {};

// Init function
app.init = function() {
  // Start the server
  server.init();
  // Start the workers
  workers.init();
  
};

// Execute
app.init();

module.exports = app;
