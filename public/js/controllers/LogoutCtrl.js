app.controller('LogoutCtrl',function(authToken,$state){
	console.log('Logout Controller Loaded!');
	
	authToken.removeToken();
	$state.go('home');
});