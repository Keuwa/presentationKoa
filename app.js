var koa = require('koa');
var router = require('koa-router')()
var jwt = require('koa-jwt')

var app = koa();

require('./settings')(app);

require('./models')(app);
//require('./middlewares')(app);
require('./actions')(app);
require('./routes')(app);

/*router.post('/',
  function *() {

  },
  function *(){

  }
);
router.get('/', app.actions.users.create);

app.use(router.routes())*/

var server = app.listen(3000, function() {
  console.log('Koa is listening to http://localhost:3000');
});
