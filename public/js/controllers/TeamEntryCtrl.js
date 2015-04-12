app.controller('TeamEntryCtrl',function($scope,championship){
	$scope.teams=championship.getTeams();
	$scope.addTeam=function(teamname){
		championship.addTeam(teamname);
		$scope.teams=championship.getTeams();
	}
});
