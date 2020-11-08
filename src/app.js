//Previous challenge 1. Display the current city
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

function showWeatherCondition(response) {
  console.log(response.data);
  console.log(response.data.name);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "7dc7836f71a474945c8b68b188f0066c";
  let units = "metric";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeatherCondition);
}

function handleSubmit(event) {
  debugger;
  event.preventDefault();
  let city = document.querySelector("#city-source").value;
  searchCity(city);

  // let cityElement = document.querySelector("#city");
  // let cityInput = document.querySelector("#city-source");
  // cityElement.innerHTML = cityInput.value;
  // Make an API call to openweather API
  // Once I get the response, we display city name and temepratuer
}
let dateElement = document.querySelector("#currentTime");

let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

//Previous challenge 2. display the city that you search for
function searchLocation(position) {
  let apiKey = "7dc7836f71a474945c8b68b188f0066c";
  let units = "metric";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl =
    "${apiEndpoint}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}";
  axios.get(apiUrl).then(showWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navitator.geolocation.getCurrentLocation(searchLocation);
}

let searchForm = document.querySelector("#search-bar-result");
searchForm.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#currentLoca");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("New York");
