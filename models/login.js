var mongoose=require('mongoose');
var bcrypt=require('bcrypt-nodejs');
var Schema=mongoose.Schema;

var UserSchema=new Schema({
        "emailid":String,
        "password":String
});
UserSchema.methods.comparePasswords=function(password,callback){
	bcrypt.compare(password,this.password,callback);
}
var login=mongoose.model('login',UserSchema);
module.exports=login;