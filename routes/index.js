var router = require('koa-router')()

module.exports = function(app){
//  require('./jobs')(app);
  require('./users')(router,app);
  require('./auth')(router,app);

  app
    .use(router.routes())
    .use(router.allowedMethods());
}
