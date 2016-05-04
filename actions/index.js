module.exports = function(app){
  app.actions = app.actions || {};
  //app.actions.jobs = require('./jobs')(app);
  app.actions.users = require('./users')(app);
  //app.actions.auth = require('./auth')(app);
}
