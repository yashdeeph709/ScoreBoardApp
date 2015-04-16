var app=angular.module('ScoreBoardApp');
app.config(router);

function router($stateProvider,$urlRouterProvider,$locationProvider,$httpProvider){
$stateProvider.state('home',{'url':'/',templateUrl:'partials/home.html'});
$stateProvider.state('dashboard',{'url':'/dashboard',templateUrl:'partials/Dashboard.html'});
$stateProvider.state('dashboard.startmatch',{'url':'/startmatch',templateUrl:'partials/startmatch.html'});
$stateProvider.state('dashboard.pointstable',{'url':'/pointstable',templateUrl:'partials/pointstable.html'});
$stateProvider.state('dashboard.history',{'url':'/history',templateUrl:'partials/history.html'});
$stateProvider.state('matchstart',{'url':'/start',templateUrl:'partials/MatchStart.html'});
$stateProvider.state('joinus',{'url':'/joinus',templateUrl:'partials/JoinUs.html'});
$stateProvider.state('watch',{'url':'/watch',templateUrl:'partials/Watch.html'});
$stateProvider.state('loop',{'url':'/loop',templateUrl:'partials/MatchLoop.html'});
$stateProvider.state('createcship',{'url':'/championship',templateUrl:'partials/createCship.html'});
$stateProvider.state('championships',{'url':'/championships',templateUrl:'partials/championships.html'});
$stateProvider.state('teamlist',{'url':'/teamlist',templateUrl:'partials/TeamList.html'});
$stateProvider.state('teamentry',{'url':'/teamentry',templateUrl:'partials/TeamEntry.html'});
$stateProvider.state('playerentry',{'url':'/playerentry/:teamid',templateUrl:'partials/PlayerEntry.html'});
$stateProvider.state('credits',{'url':'/credits',templateUrl:'partials/credit.html'});
$stateProvider.state('activate',{'url':'/activate',templateUrl:'partials/activate.html'});
$stateProvider.state('logout',{'url':'/logout',controller:'LogoutCtrl'});
$stateProvider.state('404',{'url':'/404',templateUrl:'partials/404.html'});
$urlRouterProvider.otherwise('/');
$httpProvider.interceptors.push('authInterceptor');
}

app.run(function ($window,ipCookie){
var params=$window.location.search.substring(1);
		if(params && $window.opener && $window.opener.location.origin==$window.location.origin){
			var pair=params.split('=');
			var code=decodeURIComponent(pair[1]);
				console.log(params);
			$window.opener.postMessage(code,$window.location.origin);
		}
});

