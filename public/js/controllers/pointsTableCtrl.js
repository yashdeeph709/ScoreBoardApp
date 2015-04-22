app.controller('pointsTableCtrl',function($scope,$http){
	console.log('Pointstable Controller Loaded!');
	
	$http.get('api/pointstable').success(function(data){
		$scope.points=data;
	})
	.error(function(err){
		$scope.message=err;
	});
});