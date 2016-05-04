module.exports = function(app){
  var Schema = app.models.mongoose.Schema;
  var UserSchema = Schema({
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    firstName: {
      type: String,
      default: 'foo'
    },
    lastName: {
      type: String,
      default: 'bar'
    },
    offers: [{
      type: Schema.Types.ObjectId,
      ref: 'Job'
    }]
  });

  return app.models.mongoose.model('User', UserSchema);
}
