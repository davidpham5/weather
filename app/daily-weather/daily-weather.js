'use strict';

function dailyWeatherCtrl() {

};

app.component('dailyWeather', {
	templateUrl: 'app/daily-weather/daily-weather-detail.html',
	controller: dailyWeatherCtrl,
	bindings: {
		daily: '<'
	}
});