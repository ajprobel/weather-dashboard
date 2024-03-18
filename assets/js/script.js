
function requestAPI() {
  var APIKey = "&appid=198d52fdb751968bcee7b1eb5d05e192";
  var APIBaseURL = "https://api.openweathermap.org/data/2.5/forecast";
  var lat = "?lat=39.30";
  var lon = "&lon=-84.51";

  http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit={limit}&appid={API key}

  fetch(APIBaseURL + lat + lon + APIKey)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      // Changing Today's information
      var today = dayjs.unix(data.list[0].dt);
      $("#cityName").text(data.city.name + " - " + (today.format('MMMM D, YYYY')));
      var icon = "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png";
      $("#todayIcon").attr("src", icon);
      $("#todayTemp").text(Math.ceil(data.list[0].main.temp - 273) + "°C");
      $("#todayHum").text(data.list[0].main.humidity + "%");
      $("#todayWind").text(data.list[0].wind.speed + " m/s");

      // Changing 5 Day Forecast
      var date = dayjs.unix(data.list[5].dt);
      console.log(date.format('MMMM D, YYYY'));
      $("#day1Date").text((date.format('MMMM D, YYYY')));
      icon = "https://openweathermap.org/img/wn/" + data.list[5].weather[0].icon + "@2x.png";
      $("#day1Icon").attr("src", icon);
      $("#day1Temp").text(Math.ceil(data.list[5].main.temp - 273) + "°C");
      $("#day1Hum").text(data.list[5].main.humidity + "%");
      $("#day1Wind").text(data.list[5].wind.speed + " m/s");

      date = dayjs.unix(data.list[13].dt);
      console.log(date.format('MMMM D, YYYY'));
      $("#day2Date").text((date.format('MMMM D, YYYY')));
      icon = "https://openweathermap.org/img/wn/" + data.list[13].weather[0].icon + "@2x.png";
      $("#day2Icon").attr("src", icon);
      $("#day2Temp").text(Math.ceil(data.list[13].main.temp - 273) + "°C");
      $("#day2Hum").text(data.list[13].main.humidity + "%");
      $("#day2Wind").text(data.list[13].wind.speed + " m/s");

      date = dayjs.unix(data.list[21].dt);
      console.log(date.format('MMMM D, YYYY'));
      $("#day3Date").text((date.format('MMMM D, YYYY')));
      icon = "https://openweathermap.org/img/wn/" + data.list[21].weather[0].icon + "@2x.png";
      $("#day3Icon").attr("src", icon);
      $("#day3Temp").text(Math.ceil(data.list[21].main.temp - 273) + "°C");
      $("#day3Hum").text(data.list[21].main.humidity + "%");
      $("#day3Wind").text(data.list[21].wind.speed + " m/s");

      date = dayjs.unix(data.list[29].dt);
      console.log(date.format('MMMM D, YYYY'));
      $("#day4Date").text((date.format('MMMM D, YYYY')));
      icon = "https://openweathermap.org/img/wn/" + data.list[29].weather[0].icon + "@2x.png";
      $("#day4Icon").attr("src", icon);
      $("#day4Temp").text(Math.ceil(data.list[29].main.temp - 273) + "°C");
      $("#day4Hum").text(data.list[29].main.humidity + "%");
      $("#day4Wind").text(data.list[29].wind.speed + " m/s");

      date = dayjs.unix(data.list[37].dt);
      console.log(date.format('MMMM D, YYYY'));
      $("#day5Date").text((date.format('MMMM D, YYYY')));
      icon = "https://openweathermap.org/img/wn/" + data.list[37].weather[0].icon + "@2x.png";
      $("#day5Icon").attr("src", icon);
      $("#day5Temp").text(Math.ceil(data.list[37].main.temp - 273) + "°C");
      $("#day5Hum").text(data.list[37].main.humidity + "%");
      $("#day5Wind").text(data.list[37].wind.speed + " m/s");

    });
}

// Runs API Request when button is clicked
var searchBtn = $("#searchBtn");
searchBtn.on("click", getCoord)

function getCoord() {
  cityName = document.querySelector("#searchBar").value
  geoAPI = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + " &limit=1&appid=198d52fdb751968bcee7b1eb5d05e192"
  fetch(geoAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      var newLat = data[0].lat
      var newLon = data[0].lon
      console.log(newLat)
      console.log(newLon)
    });
}