app.factory('Home', ['$resource', function($resource){
	return $resource('./../api/home/:id', {id: '@_id'}, {
		query: {method: 'GET', isArray:true},
		get: {method:'GET', isArray:false},
		post: {method:'POST', isArray:false},
		put: {method:'PUT', isArray:false},
		delete:{method: 'DELETE', isArray:false}
	});
}]);

app.factory('CV', ['$resource', function($resource){
	return $resource('./../api/cv/:id', {id: '@_id'}, {
		query: {method: 'GET', isArray:true},
		get: {method:'GET', isArray:false},
		post: {method:'POST', isArray:false},
		put: {method:'PUT', isArray:false},
		delete:{method: 'DELETE', isArray:false}
	});
}]);