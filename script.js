
var APIKey = "ddc28a98071661cf0d3e17f3a345892";

var weather = $(this).attr("data-weather");
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
"q=Kansas+City,Missouri&units=imperial&appid=" + APIKey;

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
});

};


