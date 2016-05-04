var route = require('koa-route');

module.exports = function(app){

  app.use(route.post('/users', function*() {
      this.body = 'Get';
  }));


  router
  .post('/',
  server.middlewares.bodyparser,
  server.middlewares.ensureBodyFields(['email', 'password']),
  server.actions.users.create)

  .get('/:id', server.actions.users.show)
  .get('/', server.actions.users.list)
  .get('/:id/offers', server.actions.users.offers)

  .put('/:id',
  server.middlewares.bodyparser,
  server.actions.users.update)

  .delete('/:id',
  server.actions.users.remove)

  return router;
};
