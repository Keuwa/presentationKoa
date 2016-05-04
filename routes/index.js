module.exports = function(app){
  require('./jobs')(app);
  require('./users')(app);
  require('./auth')(app);
}
