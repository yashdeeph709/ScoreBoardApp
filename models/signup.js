var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var UserSchema=new Schema({
        "firstname":String,
        "lastname":String,
        "emailid":String,
        "password":String,
        "verify":Number
});
var signup=mongoose.model('signup',UserSchema);
module.exports=signup;