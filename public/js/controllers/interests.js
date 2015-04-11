// InterestPage Controller
app.controller('InterestCtrl', ['$scope', '$rootScope', 'Interest', 'ngProgress', function ($scope, $rootScope, Interest, ngProgress){
	ngProgress.color("#B40404");
	ngProgress.start();

	$scope.interests = Interest.query(function(data){
		$scope.interests = data;
		ngProgress.complete();
	});
}]);