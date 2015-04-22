app.controller('TeamEntryCtrl',function($scope,championship){
	console.log('TeamEntry Controller Loaded!');
	
	$scope.teams=championship.getTeams();
	$scope.addTeam=function(teamname){
		championship.addTeam(teamname);
		$scope.teams=championship.getTeams();
	}
});
