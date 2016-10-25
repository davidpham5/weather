'use strict';

var skycons = (function(){
	  var skycons = new Skycons({"color": "#000"});
	  
	  skycons.add("clear-day", Skycons.CLEAR_DAY);

	  // start animation!
	  skycons.play();

	  // you can also halt animation with skycons.pause()

	  // want to change the icon? no problem:
	 // skycons.set("icon1", Skycons.PARTLY_CLOUDY_NIGHT);

	  // want to remove one altogether? no problem:
	  //skycons.remove("icon2");
})();