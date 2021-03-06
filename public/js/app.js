// Application MyParty
var app = angular.module('myWebSite', ['naif.base64', 'ngRoute', 'ngResource','ngProgress', 'ui', 'ui-notification', 'youtube-embed']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: './partials/home.html',
			controller: 'HomeCtrl'
		})
		/*.when('/login', {
			templateUrl: './login.ejs'			
		})
		.when('/profile', {
			templateUrl: './profile.ejs'						
		})*/
		/*.when('/signup', {
			templateUrl: './signup.ejs'								
		})*/
		.when('/cv', {
			templateUrl: './partials/CV.html',
			controller: 'CVCtrl'
		})
		.when('/projects', {
			templateUrl: './partials/projects.html',
			controller: 'ProjectsCtrl'
		})
		.when('/interests', {
			templateUrl: './partials/interests.html',
			controller: 'InterestCtrl'
		})
		.when('/tests', {
			templateUrl: './partials/tests.html',
			controller: 'TestCtrl'
		})
		.when('/technologies', {
			templateUrl: './partials/technologies.html',
			controller: 'TechnoCtrl'
		})
		.otherwise({redirectTo: '/'});
});


