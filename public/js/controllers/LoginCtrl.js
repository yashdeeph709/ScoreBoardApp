app.controller('LoginCtrl', function($scope,$state,auth) {
    $scope.login = function() {
        var result;
        auth.login($scope.email,$scope.password).success(function(data) {
            $state.go('dashboard.startmatch');
        }).error(function(err) {
            $scope.message = err.message;
        });
    };
});