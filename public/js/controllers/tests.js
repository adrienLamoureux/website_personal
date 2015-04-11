// TestPage Controller
app.controller('TestCtrl', ['$scope', '$rootScope', 'ngProgress', function ($scope, $rootScope, ngProgress){
	ngProgress.color("#B40404");
	ngProgress.start();

	ngProgress.complete();
}]);