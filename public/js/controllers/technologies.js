// TechnologiesPage Controller
app.controller('TechnoCtrl', ['$scope', '$rootScope', 'Techno', 'ngProgress', function ($scope, $rootScope, Techno, ngProgress){
	ngProgress.color("#B40404");
	ngProgress.start();

	$scope.techno = Techno.query(function(data){
		$scope.techno = data[0];
		ngProgress.complete();
	})[0];
}]);