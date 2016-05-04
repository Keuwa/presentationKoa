module.exports = function(router,app){


  router.post('/auth', app.actions.auth.login);




return router
};
