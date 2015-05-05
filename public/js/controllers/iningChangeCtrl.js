var app=angular.module('ScoreBoardApp');

app.controller('iningChangeCtrl',function($scope,$http,$state,authToken){
	console.log('iningChangeCtrl loaded!')
		$http.post('/match/getPlayers',{matchid:authToken.getMatchId(),team:2})
		.success(function(data){
			$scope.batsmans=data;
		}).error(function(err){
			$scope.data=err;
		});

		$http.post('/match/getPlayers',{matchid:authToken.getMatchId(),team:1})
		.success(function(data){
			$scope.bowlers=data;
		}).error(function(err){
			$scope.data=err;
		});

	$scope.startSecond=function(){
		var reqdata={bat1:$scope.batson,bat2:$scope.batsoff,bowl:$scope.bowl};
		reqdata.matchid=authToken.getMatchId();
		
		var result=$http.post('/match/startSecond',reqdata)		
		result.success(function(data){
			authToken.setIning(2);
			$state.go('loop');
		});
		result.error(function(err){
			$scope.message=err.message;
		});
	
	}
});
