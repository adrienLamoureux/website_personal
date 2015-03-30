// CVPage Controller
app.controller('CVCtrl', ['$scope', '$rootScope', 'CV', function ($scope, $rootScope, CV){
	$scope.cv = {		
	};
	$scope.cv = CV.query(function(data){
		$scope.cv = data[0];
	})[0];
}]);