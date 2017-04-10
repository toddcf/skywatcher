$( document ).ready( function() {

	function getForecast( id ){
		this.id = id;
		var days = document.getElementById( this.id ).text;

		console.log( days );

					    // var x = document.getElementById("btn1").value;
					    // document.getElementById("demo").innerHTML = x;
	};

	// Event listener for WEATHER FORECAST button click:
	$( ".submitForecast" ).click( function( id ) {
		return getForecast();
	});

	// Event listener for ENTER key:
	document.addEventListener( "keypress", function( event ) {
		if ( event.keyCode === 13 || event.which === 13 ) {
			return getForecast();
		}
	} );

} );