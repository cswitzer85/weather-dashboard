//clears the search history by clearing local storage and removing all buttons that were previously appended
function clearHist() {
    localStorage.clear();
    $("#searchHistory").empty();
}
//submission of a city will gather all information and print the the screen, as well as create a button that can be used to recall city info
function getWeather() {
    $("#currentWeather").empty();
    cityInput = document.getElementById("cityNameInput").value;
    var queryurl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&units=imperial&appid=166a433c57516f51dfab1f7edaed8413";
    //initial API call for data
    $.ajax({
            url: queryurl,
            method: "GET"
        })
        .then(function (response) {

            var currentWeatherDiv = $("<div.current>");
            var city = response.name;
            pName = $("<p>").text("City: " + city).css("font-size", "xx-large")
            currentWeatherDiv.append(pName)
            $("#currentWeather").append(currentWeatherDiv)

            var currentTimeAndDate = new Date();
            var year = currentTimeAndDate.getFullYear();
            var month = currentTimeAndDate.getMonth();
            var day = currentTimeAndDate.getDate();
            var weekdays = moment.weekdays();
            var monthArray = ["January", "Februrary", "March", "April", "May", "June", "July", "August", "Sepetember", "October", "November", "December"]
            var dayOfWeek = weekdays[currentTimeAndDate.getDay()];
            pDate = $("<p>").text("Date: " + dayOfWeek + " " + monthArray[month] + " " + day + " " + year)
            currentWeatherDiv.append(pDate)
            $("#currentWeather").append(currentWeatherDiv)

            var temp = response.main.temp;
            ptemp = $("<div>").text("Temperature: " + temp)
            currentWeatherDiv.append(ptemp)
            $("#currentWeather").append(currentWeatherDiv)

            var humidity = response.main.humidity;
            pHumidity = $("<div>").text("Humidity: " + humidity)
            currentWeatherDiv.append(pHumidity)
            $("#currentWeather").append(currentWeatherDiv)

            var wind = response.wind.speed;
            pWind = $("<div>").text("Wind: " + wind)
            currentWeatherDiv.append(pWind)
            $("#currentWeather").append(currentWeatherDiv)

            var weatherDescription = response.weather[0].description;
            pWeatherDescription = $("<p>").text("Weather Condition: " + weatherDescription)
            currentWeatherDiv.append(pWeatherDescription)
            $("#currentWeather").append(currentWeatherDiv)

            var weatherIcon = response.weather[0].icon;
            pIcon = $("<img>").attr("src", "http://openweathermap.org/img/wn/" + weatherIcon + "@2x.png");
            currentWeatherDiv.append(pIcon)
            $("#currentWeather").append(currentWeatherDiv)

            //UV API call
            var lat = response.coord.lat
            var lon = response.coord.lon
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
                    var forecastWeatherDiv = $("<div.forecast>");
                    fiveDay = response;
                    var fiveDayText = $("<p>").text("Five Day Forecast:")
                    var tempK1 = fiveDay.list[0].main.temp;
                    var tempF1 = (tempK1-273.15)*9/5+32
                    pfiveDay1 = $("<p>").text(monthArray[month] + " " + (day+1) + " " + year + " ; Temperature: " + Math.floor(tempF1) + "degrees F")
                    var tempK2 = fiveDay.list[8].main.temp;
                    var tempF2 = (tempK2-273.15)*9/5+32
                    pfiveDay2 = $("<p>").text(monthArray[month] + " " + (day+2) + " " + year + " ; Temperature: " + Math.floor(tempF2) + "degrees F")
                    var tempK3 = fiveDay.list[16].main.temp;
                    var tempF3 = (tempK3-273.15)*9/5+32
                    pfiveDay3 = $("<p>").text(monthArray[month] + " " + (day+3) + " " + year + " ; Temperature: " + Math.floor(tempF3) + "degrees F")
                    var tempK4 = fiveDay.list[24].main.temp;
                    var tempF4 = (tempK4-273.15)*9/5+32
                    pfiveDay4 = $("<p>").text(monthArray[month] + " " + (day+4) + " " + year + " ; Temperature: " + Math.floor(tempF4) + "degrees F")
                    var tempK5 = fiveDay.list[36].main.temp;
                    var tempF5 = (tempK5-273.15)*9/5+32
                    pfiveDay5 = $("<p>").text(monthArray[month] + " " + (day+5) + " " + year + " ; Temperature: " + Math.floor(tempF5) + "degrees F")
                    forecastWeatherDiv.append(fiveDayText, pfiveDay1, pfiveDay2, pfiveDay3, pfiveDay4, pfiveDay5);
                    $("#forecastWeather").append(forecastWeatherDiv)
                })


            //button created for current city
            cityButtonName = response.name;
            localStorage.setItem(cityButtonName, "https://api.openweathermap.org/data/2.5/weather?q=" + cityButtonName + "&units=imperial&appid=166a433c57516f51dfab1f7edaed8413");
            var cityButtonURL = localStorage.getItem(cityButtonName.toString())
            var historicWeatherDiv = $("<div.historic>");
            buttonName = $("<button>").text(cityButtonName)
            historicWeatherDiv.append(buttonName)
            breakElement = $("<br>")
            $("#searchHistory").append(historicWeatherDiv)
            $("#searchHistory").append(breakElement)


        });
}