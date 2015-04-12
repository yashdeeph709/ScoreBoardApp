app.controller('championships',function($scope,$http){
	$scope.post=function(){
		$http.post('/api/addTeam');
	}
});