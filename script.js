var pastSearches = [];

// function clearCurrentWeather (){
//     $("#currentWeather");
// }


//Weather API key: f3d9d80cd57331f1adc06438f8df083c
//http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={f3d9d80cd57331f1adc06438f8df083c}

// pastSearches.push(setCity)
// displaySearchHistory();

// function getUV (){
// var lat = response.coord.lon
// var lon = response.coord.lat
// $.ajax({
//     url: "http://api.openweathermap.org/data/2.5/uvi/history?appid=166a433c57516f51dfab1f7edaed8413&lat=" + lat + "&lon= + lon",
//     method: "GET"
// })
// .then(function (response) {
// uv = response.value;
//     pUV = $("<p>").text("UV index: " + UV)
//     currentWeatherDiv.append(pUV)
//     $("#currentWeather").append(currentWeatherDiv)
// })}

// function displaySearchHistory(){
//         $("#searchHistory").empty();

//         for (var i = 0; i < pastSearches.length; i++) {
//           var a = $("<button>");
//           a.addClass("pastCities");
//           a.attr("data-name", pastSearches[i]);
//           a.text(pastSearches[i]);
//           $("#searchHistory").append(a);
//         }
//       }

function clearHist() {
    localStorage.clear();
    $("#searchHistory").empty();
}

// var frisco = $.ajax({ url: "https://api.openweathermap.org/data/2.5/weather?q=frisco&units=imperial&appid=166a433c57516f51dfab1f7edaed8413", method: "GET"}) .then(function (response) {console.log(response);})

function getWeather() {
    $("#currentWeather").empty();
    cityInput = document.getElementById("cityNameInput").value;
    var queryurl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&units=imperial&appid=166a433c57516f51dfab1f7edaed8413";
    $.ajax({
            url: queryurl,
            method: "GET"
        })
        .then(function (response) {

            var currentWeatherDiv = $("<div.current>");
            var city = response.name;
            pName = $("<p>").text("City: " + city)
            currentWeatherDiv.append(pName)
            $("#currentWeather").append(currentWeatherDiv)


            var temp = response.main.temp;
            ptemp = $("<p>").text("Temperature: " + temp)
            currentWeatherDiv.append(ptemp)
            $("#currentWeather").append(currentWeatherDiv)

            var humidity = response.main.humidity;
            pHumidity = $("<p>").text("Humidity: " + humidity)
            currentWeatherDiv.append(pHumidity)
            $("#currentWeather").append(currentWeatherDiv)

            var wind = response.wind.speed;
            pWind = $("<p>").text("Wind: " + wind)
            currentWeatherDiv.append(pWind)
            $("#currentWeather").append(currentWeatherDiv)

            // var weatherDescription = response.weather[0].main;
            // var weatherDescription = response.weather[0].description;
            // var weatherDescription = response.weather[0].icon;

            //reformat unix time
            // var unix_timestamp = 1580876826
            // var date = new Date(unix_timestamp * 1000);
            // var hours = date.getHours();
            // var minutes = "0" + date.getMinutes();
            // var seconds = "0" + date.getSeconds();

            // var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);


            var lat = response.coord.lat
            var lon = response.coord.lon

            //UV API call
            $.ajax({
                    url: "http://api.openweathermap.org/data/2.5/uvi?appid=166a433c57516f51dfab1f7edaed8413&lat=" + lat + "&lon=" + lon,
                    method: "GET"
                })
                .then(function (response) {
                    UV = response.value;
                    pUV = $("<p>").text("UV index: " + UV)
                    currentWeatherDiv.append(pUV)
                    $("#currentWeather").append(currentWeatherDiv)
                })
            // 5 day API call

            $.ajax({
                    url: "http://api.openweathermap.org/data/2.5/forecast?appid=166a433c57516f51dfab1f7edaed8413&lat=" + lat + "&lon=" + lon,
                    method: "GET"
                })
                .then(function (response) {
                    fiveDay = response;
                    pfiveDay = $("<p>").text("Five Day Forecast: " + fiveDay)
                    currentWeatherDiv.append(pfiveDay)
                    $("#currentWeather").append(currentWeatherDiv)
                })



            cityButtonName = response.name;
            localStorage.setItem(cityButtonName, "https://api.openweathermap.org/data/2.5/weather?q=" + cityButtonName + "&units=imperial&appid=166a433c57516f51dfab1f7edaed8413");
            var cityButtonURL = localStorage.getItem(cityButtonName.toString())
            var historicWeatherDiv = $("<div.historic>");
            var city = response.name;
            buttonName = $("<button>").text(city)
            historicWeatherDiv.append(buttonName)
            breakElement = $("<br>")
            $("#searchHistory").append(historicWeatherDiv)
            $("#searchHistory").append(breakElement)


        });
}

// let unix_timestamp = 1549312452
// var date = new Date(unix_timestamp * 1000);
// var hours = date.getHours();
// var minutes = "0" + date.getMinutes();
// var seconds = "0" + date.getSeconds();

// var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

// console.log(formattedTime);