app.controller('SignUpCtrl',function($scope,$state,Signup){
		$scope.signup=function(){
		if(Signup.create($scope.fname,$scope.lname,$scope.email,$scope.password,$scope.repeat)){
		console.log("service create called with mailid"+$scope.email);
			$state.go('activate');
		}else{
			$scope.flag=true;
			$scope.message=Signup.getLastMessage();
		}
		};
		$scope.passCheck=function(){
			console.log('passcheck called');
		     var desc = new Array();
		     desc[0] = "Very Weak";
		     desc[1] = "Weak";
		     desc[2] = "Better";
		     desc[3] = "Medium";
		     desc[4] = "Strong";
		     desc[5] = "Strongest";
			 var score   = 0;
		     if ($scope.password.length > 6) score++;
		     if ( ( $scope.password.search(/[a-z]/) ) && ( $scope.password.search(/[A-Z]/) ) ) score++;
		     if ($scope.password.search(/\d+/)) score++;
		     if ( $scope.password.search(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/) ) score++;
		     if ($scope.password.length > 12) score++;
		     $scope.strengthMsg = desc[score];
		     $scope.className = "strength" + score;
		};
});
