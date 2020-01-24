var weather = $(this).attr("data-weather");
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=dddc28a98071661cf0d3e17f3a345892";

var getWeather = function() {
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response)
    
    // get the parts of the data you need
    // var temp = response.main.temp;


    // var description = response.weather[0].description;


    // var place = response.name;
    

    // select your dom elements and append the data
    // var weatherDiv = $('<div>')
    // var p = $('<p>').text(results[i].rating)
    // var weatherImage = $('<img>').attr()
    // weatherDiv.append(p)
    // $().prepend(weatherDiv);
  });
}

getWeather()
