app.controller('championships',function($scope,championship){
	$scope.datas=championship.getChampionships();
});