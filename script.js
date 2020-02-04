//Weather API key: f3d9d80cd57331f1adc06438f8df083c

//http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={f3d9d80cd57331f1adc06438f8df083c}

"https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&units=imperial&appid=166a433c57516f51dfab1f7edaed8413"
var cityInput = document.getElementById("cityNameInput").textContent;

function getWeather() {
    $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&units=imperial&appid=166a433c57516f51dfab1f7edaed8413",
            method: "GET"
        })
        .then(function (response) {
            console.log(response);
        });
}

// $.ajax({
//     url: "https://api.openweathermap.org/data/2.5/weather?q=detroit&units=imperial&appid=166a433c57516f51dfab1f7edaed8413",
//     method: "GET"
//   })
//   .then(function(response) {
//     console.log(response);
//   });  <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
