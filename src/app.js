//challenge1. get city and temperature

let city = document.querySelector("#search-bar-result");
city.addEventListener("submit", search);

let apiKey = "7dc7836f71a474945c8b68b188f0066c";
let units = "metric";
let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${units}`;
function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  let realtimeTemp = document.querySelector("#currentTemp");
  realtimeTemp.innerHTML = `${temperature}˚C`;
}
axios.get(apiUrl).then(showTemperature);

function showCurrentLoca(information) {
  console.log(information);
}

function showPosition(position) {
  console.log(position);
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "7dc7836f71a474945c8b68b188f0066c";
  let units = "metric";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showCurrentLoca);
}

navigator.geolocation.getCurrentPosition(showPosition);
//challenge 2. get current location and temperature

//challenge 1. Display the current city
function formatDate(date) {
  let yearOutput = date.getFullYear();

  let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let monthOutput = month[date.getMonth()];

  let day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let dayOutput = day[date.getDay()];

  let dateOutput = date.getDate();
  let hourOutput = date.getHours();
  if (hourOutput < 10) {
    hourOutput = `0${hourOutput}`;
  }
  let minuteOutput = date.getMinutes();
  if (minuteOutput < 10) {
    minuteOutput = `0${minuteOutput}`;
  }
  return `${dayOutput} ${hourOutput}:${minuteOutput} ${monthOutput} ${dateOutput} ${yearOutput}`;
}

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-source");
  cityElement.innerHTML = cityInput.value;
}
let dateElement = document.querySelector("#currentTime");

let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

//challenge 2. display the city that you search for
let searchForm = document.querySelector("#search-bar-result");
searchForm.addEventListener("submit", search);

// Challenge 3. convert celcius and fahrenheit

let temperatureElement = document.querySelector("#temperature");
let temperature = temperatureElement.innerHTML;
