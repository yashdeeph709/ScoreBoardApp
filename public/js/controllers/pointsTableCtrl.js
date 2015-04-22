app.controller('pointsTableCtrl',function($scope,$http){
	$http.get('api/pointstable').success(function(data){
		$scope.points=data;
	})
	.error(function(err){
		$scope.message=err;
	});
});