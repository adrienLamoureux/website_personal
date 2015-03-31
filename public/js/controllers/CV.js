// CVPage Controller
app.controller('CVCtrl', ['$scope', '$rootScope', 'CV', 'ngProgress', function ($scope, $rootScope, CV, ngProgress){
	ngProgress.color("#B40404");
	ngProgress.start();
	$scope.cv = {		
	};
	$scope.cv = CV.query(function(data){
		$scope.cv = data[0];
		ngProgress.complete();
	})[0];
}]);