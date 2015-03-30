// HomePage Controller
app.controller('HomeCtrl', ['$scope', '$rootScope', 'Home', function ($scope, $rootScope, Home){
	$scope.home = {		
	};
	$scope.home = Home.query(function(data){
		$scope.home = data[0];
	})[0];
}]);