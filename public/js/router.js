var app=angular.module('ScoreBoardApp');
app.config(router);

function router($routeProvider){
$routeProvider.when('/',{templateUrl:'partials/home.html'});
$routeProvider.when('/dashboard',{templateUrl:'partials/Dashboard.html'});
$routeProvider.when('/start',{templateUrl:'partials/MatchStart.html'});
$routeProvider.when('/joinus',{templateUrl:'partials/JoinUs.html'});
$routeProvider.when('/watch',{templateUrl:'partials/Watch.html'});
$routeProvider.when('/loop',{templateUrl:'partials/MatchLoop.html'});
$routeProvider.when('/championship',{templateUrl:'partials/createCship.html'});
$routeProvider.when('/teamlist',{templateUrl:'partials/TeamList.html'});
$routeProvider.when('/teamentry',{templateUrl:'partials/TeamEntry.html'});
$routeProvider.when('/playerentry/:teamid',{templateUrl:'partials/PlayerEntry.html'});
$routeProvider.when('/credits',{templateUrl:'partials/credit.html'});
}

