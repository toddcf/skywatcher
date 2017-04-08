$( document ).ready( function() {

	// Units:
	var degrees = "&deg;";
	var metric = "&units=metric"; // aka Celcius
	var metricDeg = degrees + " C";
	var imperial = "&units=imperial"; // aka Fahrenheit
	var imperialDeg = degrees + " F";
	// If units are not specified, default is "standard," aka Kelvin.

	// AJAX Call:
	function getWeather() {
		var city = $( "#city" ).val();

		var xmlMode = "&xml";
		// Default is JSON. Concatonate xmlMode after city if you want to return XML instead.

		// URL Head:
		var url = "http://api.openweathermap.org/data/2.5/weather?";

		// Location by City:
		var userCityId;
		var cityID = "id=" + userCityId;

		// Location by Coordinates:
		var lat;
		var lon;
		var geo = "lat=" + lat + "&lon=" + lon;

		// Location by Zip:
		var userZip;
		// var zip = "zip=" + userZip + "," + sys.country;

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
			// $( "#error" ).html( "<div class='alert alert-danger' id='errorCity'>Please enter a city</div>" );
			// Future Iterations: Instead of the code above, make the existing "Enter City Here" text glow red.
			errorRed();
		}
	};

	function errorRed() {
		$( "#error" ).html( "<div id='red'>Enter City:</div>" );
		// document.querySelector( DOMstrings.inputBtn ).classList.toggle( "red" );
	};

	// Display the results to HTML:
	function showResults( data ) {
		return	"<p><h3 class='weather-text' id='weather-text-top'>Current Weather for " + data.name + ", " + data.sys.country + "</h3></p>" +
				// "<img src=\"" + data.weather.icon + "\">" +
				"<p class='weather-text'>" + data.weather[0].main + " (" + data.weather[0].description + ")</p>" +
				"<p class='weather-text'>Temperature: " + data.main.temp + imperialDeg + "</p>" +
				"<p class='weather-text'>Pressure: " + data.main.pressure + " hPa</p>" +
				"<p class='weather-text'>Humidity: " + data.main.humidity + "%</p>" +
				"<p class='weather-text'>Wind Speed: " + data.wind.speed + " mph</p>" +
				"<p class='weather-text' id='weather-text-bottom'>Wind Direction: " + data.wind.deg + degrees + "</p>";
				

	};

	// Event listener for button click:
	$( "#submitCity" ).click( function() {
		return getWeather();
	});

	// Event listener for ENTER key:
	document.addEventListener( "keypress", function( event ) {
		if ( event.keyCode === 13 || event.which === 13 ) {
			return getWeather();
		}
	});

} );