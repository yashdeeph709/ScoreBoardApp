app.factory('auth', function($http,authToken,$http,$window){
    this.login=function(email,password){
        return $http.post('/userapi/login',{emailid:email,password:password})
        .success(function(data){
            authToken.setToken(data.token);
            console.log(data);
        });
    }
    return this;
});
