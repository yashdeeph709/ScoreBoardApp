app.controller('SignUpCtrl',function($scope,$state,$window,$http){
		var client_id="482231649292-r15jbpgbg5kukb4aorgr0dlk4odjh1sa.apps.googleusercontent.com";
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
		$scope.signup=function(){
		if($scope.firstname==null || $scope.lastname==null || $scope.email==null || $scope.password==null){
			$scope.flag=false;
			$scope.message="fill all required fields";
		}
		if($scope.password!=$scope.repeat){
			$scope.flag=false;
			$scope.message="Passwords donot match";
		}
		if(!$scope.flag){
		$state.go('activate');
		}
		}
});
