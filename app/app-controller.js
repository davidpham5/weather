app.controller('AppCtrl', ['$scope','DarkSkyService', function ($scope, DarkSkyService) {
	
	$scope.weather = DarkSkyService;
	
	var promise = $scope.weather.getWeather;
	
	promise.then(function(result) {
		$scope.currentWeather = result.data;
	});
	
}]);