var app=angular.module('ScoreBoardApp');

app.factory('authToken',function($window){
	var storage=$window.localStorage;
	var cachedToken;
	var authToken={
		setToken:function(token){
			cachedToken=token;
			storage.setItem('userToken',token);
		},
		getToken:function(){
			if(!cachedToken)
				cachedToken=storage.getItem('userToken');
			return cachedToken;
		},
		isAuthenticated:function(){
			
			return !!authToken.getToken();
		},
		removeToken:function(){
			cachedToken=null;
			storage.removeItem('userToken');
		}};
		return authToken;
});