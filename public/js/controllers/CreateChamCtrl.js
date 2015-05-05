app.controller('CreateChCtrl',function($scope,$state,championship,$http){
	console.log('create championship controller Loaded!');
	$http.get('match/getTeams')
			.success(function(data){
				$state.go('dashboard.startmatch');		
			});	
	$scope.createChampionship=function(){			
		championship.setChampionship($scope.name,$scope.organizer,
		$scope.description,$scope.overs);
		$state.go("teamentry");
	}
});
