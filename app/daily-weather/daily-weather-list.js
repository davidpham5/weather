'use strict';

function dailyWeatherListCtrl($scope, $element, $attrs) {
	var self = this;
	console.log(self);
};

app.component('dailyWeatherList', {
  templateUrl: 'daily-weather-list.html',
  controller: dailyWeatherListCtrl
});