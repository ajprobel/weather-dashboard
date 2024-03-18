var APIKey = "&appid=198d52fdb751968bcee7b1eb5d05e192";
var APIBaseURL = "https://api.openweathermap.org/data/2.5/forecast";
var lat = "?lat=44.34";
var lon = "&lon=10.99";

function requestAPI() {
    fetch(APIBaseURL + lat + lon + APIKey)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data);
      });
} 

requestAPI();
