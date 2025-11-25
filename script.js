const weatherData = [
    { city: "Bangalore", temp: 28, condition: "Sunny", icon: "01d", bg: "#f7b733" },
    { city: "Mumbai", temp: 31, condition: "Cloudy", icon: "03d", bg: "#738290" },
    { city: "Delhi", temp: 22, condition: "Rainy", icon: "09d", bg: "#3a7bd5" },
    { city: "Chennai", temp: 27, condition: "Storm", icon: "11d", bg: "#232526" },
    { city: "Ooty", temp: 18, condition: "Cold", icon: "13d", bg: "#74b9ff" }
];

function getWeather() {
    const weatherCard = document.getElementById("weather-card");
    const cityInput = document.getElementById("cityName").value;

    if (!cityInput) {
        alert("Please enter a city");
        return;
    }

    const match = weatherData.find(w => w.city.toLowerCase() === cityInput.toLowerCase());

    if (!match) {
        alert("City not found in static data!");
        return;
    }

    displayWeather(match);
}

function displayWeather(data) {
    document.getElementById("city-display").innerText = data.city;
    document.getElementById("temp-display").innerText = data.temp + "°C";
    document.getElementById("condition-display").innerText = data.condition;

    document.getElementById("weather-icon").src =`https://openweathermap.org/img/wn/${data.icon}@4x.png`;
    document.getElementById("weather-card").style.background = data.bg;
}
document.getElementById("refreshBtn").addEventListener("click", refreshWeather);
