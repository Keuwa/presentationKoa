module.exports = function(app){
  app.middlewares = app.middlewares || {};
  app.middlewares.bodyparser = require('body-parser').json();
  app.middlewares.ensureBodyFields = require('./ensureBodyFields');
  app.middlewares.ensureAuthenticated = require('./ensureAuthenticated')(app);
}
