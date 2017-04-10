$( document ).ready( function() {

	// Units:
	var degrees = "&deg;";
	var metric = "&units=metric"; // aka Celcius
	var metricDeg = degrees + " C";
	var imperial = "&units=imperial"; // aka Fahrenheit
	var imperialDeg = degrees + " F";
	// If units are not specified, default is "standard," aka Kelvin.

	// AJAX call -- forecast:
	function getForecast() {
		var city = $( "#city" ).val();
		var days = $( "#days" ).val();

		// API Key:
		var sample = "&appid=170e406aaa5d1d76d71ee5c974d5ed32";
		var key = "&appid=OBFUSCATE";

		if ( ( city != "" && days != "" ) && ( days >= 1 && days <= 16 ) ) {
			$.ajax( {
				url: "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + imperial + "&cnt=" + days + sample,
				type: "GET",
				dataType: "jsonp",
				success: function( data ) {

					// RIGHT HERE, I AM TRYING TO DISPLAY THE CITY NAME, BUT IT BREAKS MY ENTIRE CODE:
					// Pass the data into the resultsDescription function and store the result in a variable:
					// var widget = resultsDescription( data );
					// Display the city name and days in HTML:
					// $( "#resultsDescription" ).html( widget );
					
					// Create a variable to store an empty table:
					var table = "";

					// Use a for loop to generate the contents of the table:
					for ( var i = 0; i < data.list.length; i++ ) {
						table += "<tr>";
							table += "<td><img src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png'></td>";
							table += "<td>" + data.list[i].weather[0].main + "</td>";
							table += "<td>" + data.list[i].weather[0].description + "</td>";
							table += "<td>" + data.list[i].temp.morn + imperialDeg + "</td>";
							table += "<td>" + data.list[i].temp.night + imperialDeg + "</td>";
							table += "<td>" + data.list[i].temp.min + imperialDeg + "</td>";
							table += "<td>" + data.list[i].temp.max + imperialDeg + "</td>";
							table += "<td>" + data.list[i].pressure + " hPa</td>";
							table += "<td>" + data.list[i].humidity + "%</td>";
							table += "<td>" + data.list[i].speed + " mph</td>";
							table += "<td>" + data.list[i].deg + degrees + "</td>";
						table += "</tr>";
					}


					// Display the table in HTML:
					$( "#forecastWeather" ).html( table );
					// Clear the "city" field:
					$( "#city" ).val( "" );
					// Clear the "days" field:
					$( "#days" ).val( "" );
				}
			} )
		}
		else {
			errorRed();
		}
	};

	// If city field is empty when submitted, make the "Enter City" text flash red:
	function errorRed() {
		$( "#error" ).html( "<div id='red'>Enter City and Up To 16 Days To Forecast:</div>" );
	};

	// SOMETHING IN THIS FUNCTION MAY NOT BE WORKING:
	function resultsDescription( data ) {
		return "<p><h3 class='weather-text text-center' id='weather-text-top'>" + days + "-Day Weather Forecast for:" + data.city.name + ", " + data.location.country + "</h3></p>";
	};

	// Event listener for WEATHER FORECAST button click:
	$( "#submitForecast" ).click( function() {
		return getForecast();
	});

	// Event listener for ENTER key:
	document.addEventListener( "keypress", function( event ) {
		if ( event.keyCode === 13 || event.which === 13 ) {
			return getForecast();
		}
	} );

} );