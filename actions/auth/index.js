var jwt = require('jsonwebtoken');

module.exports = function(server){
   return {
     login: function *(){
       var AuthToken = server.models.AuthToken;
       var User = server.models.User;
       var res = yield User.findOne(this.request.body).exec();
       if (!res)
        this.throw = ("invalid credentials");
       else {
          yield new AuthToken({userId: res._id}).save()
          this.body=res;
        }
     },
     logout:  function *(){
       this.body('not done yet')
     }
   }
}
