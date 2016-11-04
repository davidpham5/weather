'use strict';

app.service('DarkSkyService', function($http, $q) {

	var deferred = $q.defer();
	var API = 'https://api.darksky.net/forecast/'
	var KEY = getAPI_KEY();
	var url = API + KEY.API_KEY + '/38.9072, 77.0369';
	var currentWeather = {};

	var getAPI = $http.get(url)
		.then(function(result) {
			deferred.resolve(result);
		}).catch(function(result) {

		}).finally(function(result) {
			
		});

	var getWeather = function() {
		return deferred.promise;
	};

	currentWeather = getWeather();

	var publicAPI = {
		getWeather: getWeather(),
		currentWeather: currentWeather
	}
	
	return publicAPI;
});