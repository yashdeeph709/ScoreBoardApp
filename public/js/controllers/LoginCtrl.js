app.controller('LoginCtrl',function($scope,$state,$window,$http,ipCookie){	
		console.log(ipCookie('uid'));
		if(ipCookie('uid')!=undefined){
			console.log('cookie checked')
			$state.go('dashboard.startmatch');
		}
$scope.login=function(){
		var result;
		$http.get('/userapi/user/'+$scope.username+'/'+$scope.password).success(function(data){
			if(data.success==1){
					console.log("login successful");
					$state.go('dashboard.startmatch');
			}
	});
};

		var client_id="482231649292-6caqino00d0fcd5feg1ufpk7n15chp4f.apps.googleusercontent.com";
		var redirect=$window.location.origin;
		var urlbuilder=[];
		urlbuilder.push("response_type=code",
			"client_id="+client_id,
			"redirect_uri="+redirect,
			"scope=profile email")

		$scope.googleauth=function(){
			var url="https://accounts.google.com/o/oauth2/auth?"+urlbuilder.join('&');
			var options="width=500,height=500,left="+($window.outerWidth-500)/2+",top=100";
			var popup=$window.open(url,'',options);
			$window.focus();
			$window.addEventListener('message',function(event){
					console.log(event.data);
					var code=event.data;
					popup.close();
					$http.post('o/auth/google',{
						"code":code,
						"client_id":client_id,
						"redirectUri":redirect
					});
			});
		}
});
		