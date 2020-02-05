var pastSearches = [];

// function clearCurrentWeather (){
//     $("#currentWeather");
// }


//Weather API key: f3d9d80cd57331f1adc06438f8df083c
//http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={f3d9d80cd57331f1adc06438f8df083c}

// pastSearches.push(setCity)
// displaySearchHistory();


function displaySearchHistory(){
        $("#searchHistory").empty();

        for (var i = 0; i < pastSearches.length; i++) {
          var a = $("<button>");
          a.addClass("pastCities");
          a.attr("data-name", pastSearches[i]);
          a.text(pastSearches[i]);
          $("#searchHistory").append(a);
        }
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
            ptemp = $("<p>").text("Temp: " + temp)
            currentWeatherDiv.append(ptemp)
            $("#currentWeather").append(currentWeatherDiv)

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


        

            // var temp = response.temp;
            // consonsle.log(temp);

            // var weather = response.weather;
            // console.log(weather);

            // var humidity = response.main.humidity;
            // console.log(humidity);


        });

}

// $("#currentWeather").append(currentWeatherDiv)
// $.ajax({
//     url: "https://api.openweathermap.org/data/2.5/weather?q=frisco&units=imperial&appid=166a433c57516f51dfab1f7edaed8413",
//     method: "GET"
// })
// .then(function (response) {
//     console.log("city save")
//     cityButtonName = response.name;
//     localStorage.setItem(cityButtonName, "https://api.openweathermap.org/data/2.5/weather?q=" + cityButtonName + "&units=imperial&appid=166a433c57516f51dfab1f7edaed8413");
//     var cityButtonURL = localStorage.getItem(cityButtonName.toString())
//     var historicWeatherDiv = $("<div.historic>");
//     var city = response.name;
//     buttonName = $("<button>").text(city)
//     historicWeatherDiv.append(buttonName)
//     $("#searchHistory").append(historicWeatherDiv)

// })
