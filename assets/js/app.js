$( document ).ready( function() {

	// Units:
	var metric = "&units=metric"; // aka Celcius
	var metricDeg = "&deg;C";
	var imperial = "&units=imperial"; // aka Fahrenheit
	var imperialDeg = "&deg;F";
	// If units are not specified, default is "standard," aka Kelvin.

	// AJAX Call:
	function getWeather() {
		var city = $( "#city" ).val();

		var xmlMode = "&xml";
		// Default is JSON. Concatonate xmlMode after city if you want to return XML instead.

		// URL Head:
		var url = "http://api.openweathermap.org/data/2.5/weather?";

		// Default countryCode is United States.
		// var countryCode = "us";

		// Location by City:
		// var userCityName;
		// var cityName = "q=" + userCityName + "," + countryCode;
		var userCityId;
		var cityID = "id=" + userCityId;

		// Location by Coordinates:
		var lat;
		var lon;
		var geo = "lat=" + lat + "&lon=" + lon;

		// Location by Zip:
		var userZip;
		// var zip = "zip=" + userZip + "," + countryCode;

		// API Key:
		var sample = "&appid=170e406aaa5d1d76d71ee5c974d5ed32";
		var key = "&appid=OBFUSCATE";

		// Only if "city" is not empty:
		if ( city != "" ) {
			$.ajax( {
				url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + imperial + sample,
				type: "GET",
				dataType: "jsonp",
				success: function( data ) {
					// Pass the data into the showResults function and store the result in a variable:
					var widget = showResults( data );
					// Display the results in HTML:
					$( "#showWeather" ).html( widget );
					// Clear the "city" field:
					$( "#city" ).val( "" );
				}

			});
		}
		// If "city" is empty:
		else {
			$( "#error" ).html( "<div>Please enter a city</div>" );
		}
	};

	// Display the results to HTML:
	function showResults( data ) {
		return	"<p>Temperature: " + data.main.temp + imperialDeg + "</p>" +
				"<p>Pressure: " + data.main.pressure + " hPa</p>" +
				"<p>Wind Speed: " + data.wind.speed + " mph</p>" +
				"<p>Humidity: " + data.main.humidity + "%</p>";
				

	};

	// Event listener for button click:
	$( "#submitCity" ).click( function() {
		return getWeather();
	});

} );