app.controller('CreateChCtrl',function($scope,$state,championship){
	$scope.createChampionship=function(){		
			$http.get('match/getTeams')
			.success(function(data){
				$state.go('dashboard.startmatch');		
			});
		championship.setChampionship($scope.championship.name,$scope.championship.organizer,
		$scope.championship.description,$scope.championship.overs,$scope.championship.players
		,$scope.noob,$scope.wide,$scope.overstrike);
		console.log(championship);
		$state.go("teamentry");
	}
});
