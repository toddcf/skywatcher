$( document ).ready( function() {

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

		// Units:
		var metric = "&units=metric"; // aka Celcius
		var imperial = "&units=imperial"; // aka Fahrenheit
		// If units are not specified, default is "standard," aka Kelvin.

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
					console.log( data );
					$( "#showWeather" ).html();
				}

			});
		}
		// If "city" is empty:
		else {
			$( "#error" ).html( "<div>Please enter a city</div>" );
		}
	};

	// Event listener for button click:
	$( "#submitCity" ).click( function() {
		return getWeather();
	});

} );