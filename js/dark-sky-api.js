'use strict';

var DarkSkyAPI = (function () {
	// Dark Sky API
	var API = 'https://api.darksky.net/forecast/'
	var KEY = getAPI_KEY();
	var url = API + KEY.API_KEY + '/38.9072, 77.0369';
	var weather = [];

	var getAPI = $.getJSON(url, function(data) {
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

	
})();