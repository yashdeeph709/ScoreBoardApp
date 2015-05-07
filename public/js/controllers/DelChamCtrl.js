app.controller('DelChamCtrl',function($http,$state,$scope){
	$http.post('api/delCham');
	$state.go('createcship');
});