var app=angular.module('ScoreBoardApp');

app.factory('Login',function(){
	return{
		users:[{
			"id":1,
			"username":"admin",
			"password":"admin"
			},{
			"id":2,
			"username":"user",
			"password":"user"
			},{
			"id":3,
			"username":"loophole",
			"password":"loophole"
			}
		],
		checkuser:function(username,password){
			for(i=0;i<users.length;i++){
				if(users[i].username==username && users[i].password==password){
					return true;
				}else{
					return false;
				}
			}
		}
	};
});
app.factory('Signup',function(){
	return{
		"user":{
			"FirstName":"",
			"LastName":"",
			"EmailID":"",
			"password":"",
		},
		addUser:function(){

		}
	};
})