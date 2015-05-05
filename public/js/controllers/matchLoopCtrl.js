app.controller('matchLoopCtrl',function($scope,$http,$state,authToken){
  	console.log('MatchLoop Controller Loaded!');

 	$scope.addRun=function(run){
 	var reqdata={	run:run, extra:$scope.extra}
	reqdata.matchid=authToken.getMatchId();
			$http.post('/match/run',reqdata).success(function(data){
				$scope.match=data;
				$scope.extra=false;
				if(data.IningOver){
					$state.go('iningChange');
				}
				if(data.MatchOver){
					$state.go('dashboard.startmatch');
				}
			});
	}

	$scope.wicket=function(w){
		var reqdata={matchid:authToken.getMatchId(),team:authToken.getIning(1)};
		var promize=$http.post('/match/getPlayers',reqdata)
		promize.success(function(data){
			$scope.wicket=w;
			$scope.batsmans=data;
		});
		promize.error(function(err){
			$scope.data=err;
		});
	}

	$scope.nextBatsman=function(){
	var reqdata={matchid:authToken.getMatchId(),wicket:$scope.wicket,nextMan:$scope.nextBat};
		var promize=$http.post('/match/wicket',reqdata)
		promize.success(function(data){
			$scope.batsmans=data;
		});
		promize.error(function(err){
			$scope.data=err;
		});
	}
});