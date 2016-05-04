var mongoose = require('mongoose');

module.exports = function(app){
  app.models = app.models || {};
  app.models.mongoose = mongoose.connect(app.settings.db.mongo);

  //app.models.Job = require('./Job')(app);
  app.models.User = require('./User')(app);
  //app.models.AuthToken = require('./AuthToken')(app);
}


/*var mongo = require('koa-mongoose');

module.exports = function(app){
  app.models = app.models || {};
  //app.use(mongo(app.settings.mongo));

app.use(mongo({
    username: app.settings.mongo.username,
    password: app.settings.mongo.password,
    host: app.settings.mongo.host,
    port: app.settings.mongo.post,
    database: app.settings.mongo.url,
    }
  ));

  //app.models.Job = require('./Job')(app);
  //app.models.User = require('./User')(app);
  //app.models.AuthToken = require('./AuthToken')(app);
}
*/
