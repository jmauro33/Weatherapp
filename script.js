
function displayWeather(){}


var weather = $(this).attr("data-weather");
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID" +
  weather +"dddc28a98071661cf0d3e17f3a345892" ;
$.ajax({
    url: queryURL,
    method: "GET"
 }).then(function(response) {
    
 console.log(response)

});
function getWeather(){}

document.getElementById="#Weather";

var getWeather = function(data) {
  var temp = data.main.temp;
  var description = data.weather[0].description;
  var place = data.name;
}

 console.log(weather)

var weatherDiv = $('<div>')
var p = $('<p>').text(results[i].rating)
var weatherImage = $('<img>').attr()
weatherDiv.append(p)
$().prepend(weatherDiv);