var app=angular.module('ScoreBoardApp');
app.config(router);

function router($routeProvider,$locationProvider){
$routeProvider.when('/',{templateUrl:'partials/main.html'});
$routeProvider.when('/start',{templateUrl:'partials/MatchStart.html'});
$routeProvider.when('/watch',{templateUrl:'partials/watch.html'});
$routeProvider.when('/loop',{templateUrl:'partials/MatchLoop.html'});
$routeProvider.when('/championship',{templateUrl:'partials/championship.html'});
$routeProvider.when('/credits',{templateUrl:'partials/credits.html'});
}

