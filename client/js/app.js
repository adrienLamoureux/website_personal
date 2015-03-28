// Application MyParty
var app = angular.module('myWebSite', ['naif.base64', 'ngRoute', 'ngResource','ngProgress', 'ui', 'ui-notification']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: './partials/home.html',
			controller: 'HomeCtrl'
		})
		.otherwise({redirectTo: '/'});
});


