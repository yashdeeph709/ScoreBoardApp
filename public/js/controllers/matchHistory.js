app.controller('matchHistory',function($scope,$http){
	console.log('match history Controller Loaded!');
	
	$http.get('api/matchhistory').success(function(data){
		$scope.matches=data;
	})
	.error(function(err){
		$scope.message=err;
	});
});