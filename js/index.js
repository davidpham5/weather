"use strict";

var DarkSkyAPI = (function () {
	// Dark Sky API
	var API = 'https://api.darksky.net/forecast/'
	var KEY = getAPI_KEY();
	var url = API + KEY.API_KEY + '/38.9072, 77.0369';
	var weather = [];

	var getAPI = $.getJSON(url, function(data) {
		// weather = data;
		// var currentLoc = {
		// 	latidue: data.latitude,
		// 	longitude: data.longitude
		// };
		var items = [],
		$ul;
		
		$.each(data.currently, function (key, val) {
            //iterate through the returned data and build a list
            items.push('<li id="' + key + '">' + key + ': ' + val + '</li>');

        });
        var temp = Math.round(data.currently.temperature);
        $('#currentTemp').append(temp + ' ' + data.currently.summary);
        $ul = $('<ul />').appendTo('.data');
 		//append list items to list
       	$ul.append(items);
		
		 var currentWeather = data.currently;
		 console.log(currentWeather)
		// $('#data').html(currentWeather);
	})
	.done(function(data) {
		console.log('done!')
	})
	.fail(function(data) {
		console.log('fail!')
	})
	.always(function(data) {
		console.log( "complete!" );
	});
	
	
	//console.log(apiCall)
	
	// var publicAPI = {
	// 	weather: weather
	// }

	// return publicAPI;
	
})();

var skycons = (function(){
	  var skycons = new Skycons({"color": "#fff"});
	  
	  skycons.add("clear-day", Skycons.CLEAR_DAY);

	  // ...or by the canvas DOM element itself.
	 // skycons.add(document.getElementById("icon2"), Skycons.RAIN);

	  // if you're using the Forecast API, you can also supply
	  // strings: "partly-cloudy-day" or "rain".

	  // start animation!
	  skycons.play();

	  // you can also halt animation with skycons.pause()

	  // want to change the icon? no problem:
	 // skycons.set("icon1", Skycons.PARTLY_CLOUDY_NIGHT);

	  // want to remove one altogether? no problem:
	  //skycons.remove("icon2");
})();
var app = angular.module('stormyApp', []);


app.controller('AppCtrl', ['$scope', function ($scope) {
	$scope.weather = DarkSkyAPI;
	
}]);