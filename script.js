var cityInput = "";
var pastSearches = [];
var city = response.name;
var temp = response.temp;
var weather = response.weather;
var humidity = response.main.humidity;

//Weather API key: f3d9d80cd57331f1adc06438f8df083c
//http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={f3d9d80cd57331f1adc06438f8df083c}

function getWeather() {
    cityInput = document.getElementById("cityNameInput").value;
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&units=imperial&appid=166a433c57516f51dfab1f7edaed8413";
    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function (response) {
            console.log(response);
            // var city = response.name;
            console.log(city);
            // var temp = response.temp;
            consonsle.log(temp);
            // var weather = response.weather;
            console.log(weather);
            // var humidity = response.main.humidity;
            console.log(humidity);


        });

}