// projectsPage Controller
app.controller('ProjectsCtrl', ['$scope', '$rootScope', 'Project', 'ngProgress', function ($scope, $rootScope, Project, ngProgress){
	ngProgress.color("#B40404");
	ngProgress.start();

	$scope.projects = Project.query(function(data){
		$scope.projects = data;
		ngProgress.complete();
	});
}]);