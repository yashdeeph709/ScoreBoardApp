var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var UserSchema=new Schema({
        "firstname":String,
        "lastname":String,
        "emailid":String,
        "password":String
});
var signup=mongoose.model('signup',UserSchema);
module.exports=signup;