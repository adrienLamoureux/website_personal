// NavigationBar Controller
app.controller('NavigationCtrl', ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout){
		$scope.activeMenu=0;
		$scope.activeSubMenu=0;

	// change Menu state
	$scope.changeActiveMenu = function(id) {
		$scope.activeMenu=id;
		if(id != 5)
			$scope.activeSubMenu=0;
	};

	// change SubMenu state
	$scope.changeActiveSubMenu = function(id) {
		$scope.activeSubMenu=id;
	};
}]);