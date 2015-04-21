var app=angular.module('ScoreBoardApp');

app.controller('changeCtrl',function($scope,$http){
	$scope.changePass=function(){
		var data={
			verificationCode:$stateParams.get('code'),
			password:$scope.password,
			reenter:$scope.reenter
		}
		$http.post('userapi/changePassword',data)
		.success(function(data){
			$scope.message=data.message;
		}).error(function(err){
			$scope.message=err;
		});
	}
});