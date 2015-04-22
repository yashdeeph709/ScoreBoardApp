app.controller('matchHistory',function($scope,$http){
	$http.get('api/matchhistory').success(function(data){
		$scope.matches=data;
	})
	.error(function(err){
		$scope.message=err;
	});
});