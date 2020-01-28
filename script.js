

var weather = $(this).attr("data-weather");
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=kansas+city&APPID=dddc28a98071661cf0d3e17f3a345892";

var getWeather = function () {
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    console.log(response)

  });
}

function getWeather(data) {

   console.log(data)

    var temp = response.main.temp;
    var desc = response.weather[0].description;
    var place = response.name.place;
    

   for (var i = 0; i < weather.data; i++) 
   
    var weather = $('<div>')
    var p = $('<p>').text(weather.data)
    var weatherImage = $('<img>').attr()
    weather.append(p)
    $("#weatherdata").prepend(weather)


};
