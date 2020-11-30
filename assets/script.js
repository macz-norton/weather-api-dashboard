// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
// WHEN I open the weather dashboard
// THEN I am presented with the last searched city forecast

// When user clicks `citySearch` button
$("#citySearch").on("click", function(event) {
    event.preventDefault();

    var userCity = $(".userInput").val().trim();
    console.log(userCity);

    JSON.stringify(userCity);
    localStorage.setItem("city", userCity);

    var userCitySaved = localStorage.getItem("city");
    console.log(userCitySaved);

    var cityButton = $("<button>");
    cityButton.attr("type", "button");
    cityButton.addClass("btn btn-light btn-lg btn-block");
    cityButton.attr("data-city", userCitySaved);
    cityButton.text(userCitySaved);
    $(".searchList").prepend(cityButton);
    
});

// function getWeather(){

//     var city = "";
//     var APIkey = "";
//     var queryCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;
    
//     $.ajax({
//         url: queryCurrent,
//         method: "GET"
//     }).then(function(response) {
    
//         var cityNameEl = $("<h2>").text(response.name);
//         var weatherIconEl = $("<i>").icon(response.weather.icon);
//         var temperatureEl = $("<p>").text(response.list.main.temp.metric);
//         var humidityEl = $("<p>").text(response.list.main.humidity);
//         var windSpeedEl = $("<p>").text(response.list.wind.speed);
//         // var uvIndexEl = $("<p>").text(
    
//     })

// }



// var city = "";
// var APIkey = "";
// var query5day = "api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&cnt=5&appid=" + APIkey;

// $.ajax({
//     url: query5day,
//     method: "GET"
// }).then(function(response) {

//     var dateEl = $("<h3>").text(response.list.dt);
//     var weatherEl = $("<i>").i(response.list.weather.icon);
//     var temperatureEl = $("<p>").text(response.list.main.temp.metric);
//     var humidityEl = $("<p>").text(response.list.main.humidity);
// });

// var latitude = "";
// var longitude = "";
// var APIkey = "";
// var query5day = "https://api.openweathermap.org/data/2.5/uvi?lat=" + latitude + "&lon=" + longitude + "&appid=" + APIkey;

// $.ajax({
//     url: query5day,
//     method: "GET"
// }).then(function(response) {

//     var dateEl = $("<h3>").text(response.list.dt);

// three variables that will get the data from each of the three APIs. 
// var people, places, reports 
// wait for all queries to be done before doing something with the data.
// $.when( 
//     $.get(url_1, data => people = data),
//     $.get(url_2, data => places = data),
//     $.get(url_3, data => reports = data)
// ).then(function() {
//     ...

// // Use bootstrap classes in JavaScript 

// var wind = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.speed + " MPH");
// var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");