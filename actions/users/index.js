var bodyparser = require("koa-bodyparser")

module.exports = function(app){

  var User = app.models.User;
  app.use(bodyparser());

   var usersFunction = {
     create: function *(){
      var user = new User(this.request.body);
      user.save();
      this.body = user;
     },

     list: function *(){
       //var names = Object.keys(db);
       var res = yield User.find({}).exec();
       this.body = res
     },

     offers: function *(){
       var names = Object.keys(db);
       this.body = "Not done yet";
     },

     remove: function *(){
       var id = this.request.url.split('/')[2];
       var res = yield User.findByIdAndRemove(id).exec();
       console.log(id);
       this.body = res
     },

     show: function *(){
       this.body = "Not done yet";
     },

     update: function *(name){
       this.body = "Not done yet";
     }
   };
  return usersFunction;
}
