var app=angular.module('ScoreBoardApp');
app.config(router);

function router($routeProvider,$locationProvider){
$locationProvider.html5Mode(true);
$routeProvider.when('/',{templateUrl:'partials/Home.html'});
$routeProvider.when('/start',{templateUrl:'partials/MatchStart.html'});
$routeProvider.when('/watch',{templateUrl:'partials/watch.html'});
$routeProvider.when('/loop',{templateUrl:'partials/MatchLoop.html'});
$routeProvider.when('/championship',{templateUrl:'partials/championship.html'});
}

