var bcrypt=require('bcrypt-nodejs');

var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var UserSchema=new Schema({
        "firstname":String,
        "lastname":String,
        "emailid":String,
        "password":String,
        "verify":Number
});
UserSchema.pre('save',function(next){
	var user=this;
	if(!user.isModified('password')) return next();
	bcrypt.genSalt(10, function(err,salt){
		if(err) return next(err);
		bcrypt.hash(user.password,salt,null,function(err,salt){
			if(err) return next(err);
			user.password=salt;
			next();
		});  
	});
});

var signup=mongoose.model('signup',UserSchema);

module.exports=signup;