// HomePage Controller
app.controller('HomeCtrl', ['$scope', '$rootScope', 'Home', 'Image', 'ngProgress', function ($scope, $rootScope, Home, Image, ngProgress){
	ngProgress.color("#B40404");
	ngProgress.start();
	$scope.home = {		
	};
	$scope.image={
	};
	$scope.home = Home.query(function(data){
		$scope.home = data[0];
		$scope.image = Image.get({id: $scope.home.imageID}, function(image){
			$scope.image = image;
			ngProgress.complete();
		});
	})[0];
}]);