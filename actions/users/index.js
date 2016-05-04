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
       this.body = 'pets: ' + names.join(', ');
     },

     remove: function *(){
       var names = Object.keys(db);
       this.body = 'pets: ' + names.join(', ');
     },

     show: function *(){
       var names = Object.keys(db);
       this.body = 'pets: ' + names.join(', ');
     },

     update: function *(name){
       var pet = db[name];
       if (!pet) return this.throw('cannot find that pet', 404);
       this.body = pet.name + ' is a ' + pet.species;
     }
   };
  return usersFunction;
}
