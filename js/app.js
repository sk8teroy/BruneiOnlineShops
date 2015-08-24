var app = angular.module('BruneiOnlineShops', ['ngRoute']);


app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller: 'QQController',
		templateUrl: 'views/QQTemplate.htm'
	})
	.when('/brustores', {
		controller: 'BruStoresController',
		templateUrl: 'views/BruStoresTemplate.htm'
	})
	.otherwise({
		redirectTo: '/'
	});
});


app.factory('QQData', ['$http', function ($http) {
	return $http.get('https://api.import.io/store/data/9538cf49-afcd-40c1-898d-bf15c21796b0/_query?input/webpage/url=http%3A%2F%2Fwww.qqestore.com%2Fnew_arrivals&_user=e5ea31c3-7d58-4a1c-abed-a100117ebd6b&_apikey=e5ea31c37d584a1cabeda100117ebd6bbfe0161f21296db97a3cbc0b4fcc0561308ad4bd697dd569367d8324e93c49d8980fe84f69a4064a7c6d22a3b18883130d2d4f3df9355d8fa227334190a7ecf6')
	.success(function(data){
		return data;
	})
	.error(function(err){
		return err;
	});
}]);

app.factory('BruStoresData', ['$http', function ($http) {
	return $http.get('https://api.import.io/store/data/0a7e93b8-60de-4048-93da-ad60fe232d8e/_query?input/webpage/url=http%3A%2F%2Fwww.brustores.com%2Fnewproducts&_user=e5ea31c3-7d58-4a1c-abed-a100117ebd6b&_apikey=e5ea31c37d584a1cabeda100117ebd6bbfe0161f21296db97a3cbc0b4fcc0561308ad4bd697dd569367d8324e93c49d8980fe84f69a4064a7c6d22a3b18883130d2d4f3df9355d8fa227334190a7ecf6')
	.success(function(data){
		return data;
	})
	.error(function(err){
		return err;
	});
}]);

app.controller('QQController', ['$scope', 'QQData', function($scope, QQData) {
	QQData.success(function(data){
		$scope.items = data.results;
	});
}]);

app.controller('BruStoresController', ['$scope', 'BruStoresData', function($scope, BruStoresData) {
	BruStoresData.success(function(data){
		$scope.items = data.results;
	});
}]);


