
var APIKey = "2dfc798628fe4b23a5ba491ed0f74479";

var weather = $(this).attr("data-weather");

var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
"q=kansas+city&units=imperial&APPID=" + APIKey;
"https://api.openweathermap.org/data/2.5/weather?q=kansas+city&units=imperial&APPID=2dfc798628fe4b23a5ba491ed0f74479"
function getWeather (response){

  $.ajax({
    url: queryURL,
    method: "GET"

  })

  .then(function(response) {


  console.log(queryURL);


  console.log(response);

  
  $(".city").html("<h1>" + response.name + " Weather Details</h1>");
  $(".wind").text("Wind Speed: " + response.wind.speed);
  $(".humidity").text("Humidity: " + response.main.humidity);
  $(".temp").text("Temperature (F) " + response.main.temp);


  var tempF = (response.main.temp - 273.15) * 1.80 + 32;
  $(".tempF").text("Temperature (Kelvin) " + tempF);


  console.log("Wind Speed: " + response.wind.speed);
  console.log("Humidity: " + response.main.humidity);
  console.log("Temperature (F): " + response.main.temp);
getForecast()

})
.catch(function(error){
  console.log(error)
})

};


getWeather()


var forecastqueryURL = "https://api.openweathermap.org/data/2.5/forecast?" +
"q=kansas+city&units=imperial&APPID=" + APIKey;

function getForecast(response){

  $.ajax({
    url: forecastqueryURL,
    method: "GET"

  }).then(function(response) {


    console.log(forecastqueryURL);
  
  
    console.log(response);
    var cardnum = 1
  for (i = 0; i < response.list.length; i++){
    if(response.list[i].dt_txt.indexOf("15:00:00")!==-1){
      var p = $("<p>").text("temp: " + response.list[i].main.temp_max)
      var p2 = $("<p>").text("weather: " + response.list[i].weather[0].description)
      $(".card-"+cardnum).append(p)
      $(".card-"+cardnum).append(p2)
      cardnum++
    }
  }
 

  })
.catch(function(error){
  console.log(error)
});

}