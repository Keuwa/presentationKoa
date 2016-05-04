var koa = require('koa');
var _ = require('koa-route')


var app = koa();

require('./settings')(app);



require('./models')(app);
//require('./middlewares')(app);
require('./actions')(app);
/*
require('./routes')(app);
*/



app.use(_.post('/', app.actions.users.create));
app.use(_.get('/', app.actions.users.list));

var server = app.listen(3000, function() {
  console.log('Koa is listening to http://localhost:3000');
});
