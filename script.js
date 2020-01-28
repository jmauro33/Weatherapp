
var weather = $(this).attr("data-weather");
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=kansas+city&APPID=dddc28a98071661cf0d3e17f3a345892";

var getWeather = function () {
  $.ajax({
    url: queryURL,
    method: "GET"

  }).then(function getWeather (response) {

    console.log(response)

  for (var i= 0; i < weather.response; i++)

  var response = main.response.temp;
  var response = data.weather[0].description
  var response = data.place;

    
  });
}

function showCity (city) {

  console.log(city)

  var city = main.city;
  
  for (var i = 0; i < main.city; i++)

  var city = location;
}





function showWeather(data) {

   console.log(data)

    var data = main.data.temp;
    var data = data.weather[0].description;
    var data = data.place;


   for (var i = 0; i < weather.data; i++) 
   
    var weather = $('<div>')
    var p = $('<p>').text(weather.data)
    weather.append(p)
    $("#data-weather").prepend(weather)

};
