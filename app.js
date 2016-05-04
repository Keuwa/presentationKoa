var koa = require('koa');


var app = koa();

require('./settings')(app);

require('./models')(app);
//require('./middlewares')(app);
require('./actions')(app);
require('./routes')(app);



var server = app.listen(3000, function() {
  console.log('Koa is listening to http://localhost:3000');
});
