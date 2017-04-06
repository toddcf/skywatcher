$( document ).ready( function() {

	var xmlMode = "&xml";
	// Default is JSON. Concatonate xmlMode after city if you want to return XML instead.

	// URL Head:
	var url = "http://api.openweathermap.org/data/2.5/weather?";

	// Default countryCode is United States.
	var countryCode = "us";

	// Location by City:
	var userCityName;
	var cityName = "q=" + userCityName + "," + countryCode;
	var userCityId;
	var cityID = "id=" + userCityId;

	// Location by Coordinates:
	var lat;
	var lon;
	var geo = "lat=" + lat + "&lon=" + lon;

	// Location by Zip:
	var userZip;
	var zip = "zip=" + userZip + "," + countryCode;

	// Units:
	var metric = "&units=metric"; // aka Celcius
	var imperial = "&units=imperial"; // aka Fahrenheit
	// If units are not specified, default is "standard," aka Kelvin.

	// API Key:
	var key = "&appid=OBFUSCATE";

	var apiQuery = url + cityName + imperial + key;

	console.log(apiQuery);

	// AJAX Call:
	function getWeather() {

	};

	// Event listener for button click:
	$( #submitCity ).click( function() {
		return getWeather();
	});

} );