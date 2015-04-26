app.controller('matchLoopCtrl',function($scope,$http,$state,authToken){
  console.log('MatchLoop Controller Loaded!');

 	$scope.addRun=function(run){
 	var reqdata={	run:run, extra:$scope.extra}
	reqdata.matchid=authToken.getMatchId();
	
	$http.post('/match/run',reqdata).success(function(data){
//		console.log(data);                 
		$scope.match=data;
		$scope.extra=false;
		if(data.IningOver){
			$state.go('iningChange');
		}
		if(data.MatchOver){
			console.log("matchover")
			$state.go('dashboard.startmatch');
		}
	});
	}
});