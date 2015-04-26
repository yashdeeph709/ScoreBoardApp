var app=angular.module('ScoreBoardApp');

app.controller('iningChangeCtrl',function($scope,$http,$state,authToken){
	console.log('iningChangeCtrl loaded!')
	$http.post('/match/second',{matchid:authToken.getMatchId()})
	.success(function(data){
		$scope.data=data;
	}).error(function(err){
		$scope.data=err;
	});
	$scope.startSecond=function(){
		var reqdata={bat1:$scope.batson,bat2:$scope.batsoff,bowl:$scope.bowl};
		reqdata.matchid=authToken.getMatchId();
		var result=$http.post('/match/startSecond',reqdata)
		result.success(function(data){
			console.log(data);
			$state.go('loop');
		});
	}
});
