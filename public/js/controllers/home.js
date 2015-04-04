// HomePage Controller
app.controller('HomeCtrl', ['$scope', '$rootScope', 'Home', 'Image', 'ngProgress', function ($scope, $rootScope, Home, Image, ngProgress){
	ngProgress.color("#B40404");
	ngProgress.start();
	$scope.home = {		
	};
	$scope.image={
		filetype: null,
		base64: null
	};
	$scope.home = Home.query(function(data){
		$scope.home = data[0];
		$scope.image.filetype = data[0].filetype;
		$scope.image.base64 = data[0].base64;
		ngProgress.complete();
	})[0];
}]);