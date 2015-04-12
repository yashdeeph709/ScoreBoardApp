app.controller('LoginCtrl',function($scope,$state){	
	$scope.login=function(){
		if($scope.username==null || $scope.password==null){
			$scope.flag=false;
			$scope.message="username or password empty";
		}
		if(!$scope.flag){
		$state.go('dashboard.startmatch');
		}
	}
});
		