$( document ).ready( function() {

	function getForecast(){
		var city = $( "#city" ).val();
		var days = $( "#days" ).val();

		if ( city != "" && days != "" ) {

		}
		else {
			errorRed();
		}
	};

	// If city field is empty when submitted, make the "Enter City" text flash red:
	function errorRed() {
		$( "#error" ).html( "<div id='red'>Enter City and Number of Days to Forecast:</div>" );
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