var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var UserSchema=new Schema({
        "emailid":String,
        "password":String
});
var login=mongoose.model('login',UserSchema);
module.exports=login;