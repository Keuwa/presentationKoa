module.exports = function(router,app){


  router.post('/user', app.actions.users.create);

  router.get('/user', app.actions.users.list);

  router.del('/user/:id', app.actions.users.remove);

  router.get('/user/:id', app.actions.users.show);

  router.put('/user/:id', app.actions.users.update);

  router.get('/user/:id/offers', app.actions.users.offers);



return router
};
