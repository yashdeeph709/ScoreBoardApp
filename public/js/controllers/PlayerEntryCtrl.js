app.controller('PlayerEntryCtrl',function($scope,$stateParams,$location,championship){
	$scope.players=championship.getPlayers($stateParams["teamid"]);
	$scope.addPlayer=function(name,skills,position){
		championship.addPlayer($stateParams['teamid'],name,skills,position);
	}
});
