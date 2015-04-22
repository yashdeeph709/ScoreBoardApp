app.controller('championships',function($scope,championship){
	console.log('championhships controller Loaded!');
	$scope.datas=championship.getChampionships();
});