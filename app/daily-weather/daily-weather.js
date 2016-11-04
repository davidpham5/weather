'use strict';

function dailyWeatherCtrl() {

};

app.component('dailyWeather', {
	templateUrl: 'app/daily-weather/daily-weather.html',
	controller: dailyWeatherCtrl,
	bindings: {
		daily: '<'
	}
});