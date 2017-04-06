// URL Head:
var url = "http://api.openweathermap.org/data/2.5/weather?";

// Location:
var city = "London,uk";
var zip = "90066,us";

// Units:
var metric = "units=metric";
var imperial = "units=imperial";
var kelvin = "units=kelvin";

// API Key:
var key = "&appid=OBFUSCATE";

var apiQuery = url + city + imperial + key;

console.log(apiQuery);