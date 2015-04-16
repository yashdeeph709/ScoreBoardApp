app.controller('LoginCtrl', function($scope, $state,auth,$auth) {
    $scope.login = function() {
        var result;
        auth.login($scope.email,$scope.password).success(function(data) {
            $state.go('dashboard.startmatch');
        }).error(function(err) {
            $scope.message = err.message;
        });
    };
    $scope.authenticate = function(provider) {
      $auth.authenticate(provider);
    };
    $scope.googleauth = function() {
        auth.oauth();
    }
});