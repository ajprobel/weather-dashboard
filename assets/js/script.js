
function requestAPI() {
  // shows results section
  $("#results").attr("class", "column ml-3 has-text-centered")

  // defining variables for use in API - lat and lon will change!
  var APIKey = "&appid=198d52fdb751968bcee7b1eb5d05e192";
  var APIBaseURL = "https://api.openweathermap.org/data/2.5/forecast";
  var lat = "?lat=39.368340";
  var lon = "&lon=-84.329590";

  // calling API to turn the search inquiry into coordinates for latitude and longitude
  function getCoord() {
    cityName = document.querySelector("#searchBar").value
    geoAPI = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + " &limit=1&appid=198d52fdb751968bcee7b1eb5d05e192"
    fetch(geoAPI)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        lat = ("?lat=" + data[0].lat);
        lon = ("&lon=" + data[0].lon);
        getWeather();
        return;
      })
      .then()
  }

  getCoord();

  // gets weather data based on new latitude and longitude coordinates
  function getWeather() {
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
        $("#day1Date").text((date.format('MMMM D, YYYY')));
        icon = "https://openweathermap.org/img/wn/" + data.list[5].weather[0].icon + "@2x.png";
        $("#day1Icon").attr("src", icon);
        $("#day1Temp").text(Math.ceil(data.list[5].main.temp - 273) + "°C");
        $("#day1Hum").text(data.list[5].main.humidity + "%");
        $("#day1Wind").text(data.list[5].wind.speed + " m/s");

        date = dayjs.unix(data.list[13].dt);
        $("#day2Date").text((date.format('MMMM D, YYYY')));
        icon = "https://openweathermap.org/img/wn/" + data.list[13].weather[0].icon + "@2x.png";
        $("#day2Icon").attr("src", icon);
        $("#day2Temp").text(Math.ceil(data.list[13].main.temp - 273) + "°C");
        $("#day2Hum").text(data.list[13].main.humidity + "%");
        $("#day2Wind").text(data.list[13].wind.speed + " m/s");

        date = dayjs.unix(data.list[21].dt);
        $("#day3Date").text((date.format('MMMM D, YYYY')));
        icon = "https://openweathermap.org/img/wn/" + data.list[21].weather[0].icon + "@2x.png";
        $("#day3Icon").attr("src", icon);
        $("#day3Temp").text(Math.ceil(data.list[21].main.temp - 273) + "°C");
        $("#day3Hum").text(data.list[21].main.humidity + "%");
        $("#day3Wind").text(data.list[21].wind.speed + " m/s");

        date = dayjs.unix(data.list[29].dt);
        $("#day4Date").text((date.format('MMMM D, YYYY')));
        icon = "https://openweathermap.org/img/wn/" + data.list[29].weather[0].icon + "@2x.png";
        $("#day4Icon").attr("src", icon);
        $("#day4Temp").text(Math.ceil(data.list[29].main.temp - 273) + "°C");
        $("#day4Hum").text(data.list[29].main.humidity + "%");
        $("#day4Wind").text(data.list[29].wind.speed + " m/s");

        date = dayjs.unix(data.list[37].dt);
        $("#day5Date").text((date.format('MMMM D, YYYY')));
        icon = "https://openweathermap.org/img/wn/" + data.list[37].weather[0].icon + "@2x.png";
        $("#day5Icon").attr("src", icon);
        $("#day5Temp").text(Math.ceil(data.list[37].main.temp - 273) + "°C");
        $("#day5Hum").text(data.list[37].main.humidity + "%");
        $("#day5Wind").text(data.list[37].wind.speed + " m/s");

      });
  }
}

function renderSearchHistory() {
  var search = localStorage.getItem("Search");

  if (!search) {
    return;
  } else {
    console.log(search);
    var newArray = search.split(",");
    console.log(newArray);
    console.log(newArray.length)

    function renderthisplease() {
      for (var n = 0; n < newArray.length; n++) {
        var newlistEL = $('<button>');
        newlistEL.text(newArray[n]);
        newlistEL.attr("class", "button is-fullwidth is-link is-outlined m-2");
        newlistEL.appendTo(searchListEl);
        console.log("done")
      }
    }

    renderthisplease();
  }


}



renderSearchHistory();


// Define empty array for local storage
var searchedCities = [];

// Function for updating local storage with search items
function updateLocalStorage() {
  localStorage.setItem("Search", searchedCities);
}

// Defines creation of new search history items in HTML
var searchListEl = $("#searchHistory");
function updateSearchHistory() {
  searchListEl.text("");
  for (var i = 0; i < searchedCities.length; i++) {
    var newlistEL = $('<button>');
    newlistEL.text(searchedCities[i]);
    newlistEL.attr("class", "button is-fullwidth is-link is-outlined m-2");
    newlistEL.appendTo(searchListEl);
  }
}

// Runs API Request when button is clicked
var searchBtn = $("#searchBtn");
searchBtn.on("click", function () {
  requestAPI();
  searchedCities.push(document.querySelector("#searchBar").value)
  updateLocalStorage();
  updateSearchHistory();
  console.log(searchedCities)
})

