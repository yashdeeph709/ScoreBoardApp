var app = angular.module('ScoreBoardApp');

app.factory('Signup', function($http) {
    return {
        "FirstName": "",
        "LastName": "",
        "email": "",
        "password": "",
        "repeat": "",
        "message":"",
        validate: function() {
            this.message = [];
            if (this.FirstName == null || this.LastName == null || this.email == null || this.password == null) {
                this.message="You left one of the important fields empty!";
                console.log("empty fields"+this.message);
                return false;
            }
            if (this.password.length < 8) {
                this.message="Your Password length is less than 8";
                console.log("password length");
                return false;
            }
            if(this.password!=this.repeat){
            	this.message="Your repeated password doesn't match the first one";
            	console.log("repeat doesn't match")
                return false;
            }
            return true;
        },
        getLastMessage:function(){
        	return this.message;
        },
        create: function(fname, lname, email, password, repeat){
            this.FirstName = fname;
            this.LastName = lname;
            this.email = email;
            this.password = password;
            this.repeat = repeat;
            if (this.validate()) {
                $http.post('/userapi/user', {
                    'fname': this.FirstName,
                    'lname': this.LastName,
                    'email': this.email,
                    'password': this.password
                });
                return true;
            }else{
            	return false;
            }
        }

    };
});
