# 🌤️ Weather Web App

📌 This project is written in **English**.
For the Portuguese version, check the file [README.md](/README.md).

## Project Description

A web application built with HTML, CSS, and JavaScript that displays the current weather and a 5-day forecast for any city in the world, using the OpenWeatherMap API.

## :hammer: Features

- **Current weather lookup**: Search for the current weather of a city and display: local date and time (based on the city's time zone), weather conditions, temperature, humidity, atmospheric pressure, and wind speed.

- **5-day weather forecast**: View the weather forecast for the next 5 days of the selected city, showing weather condition, temperature, and humidity. Data is updated every 3 hours (limited by the free API plan).

- **Temperature and humidity charts**: Generates two charts (temperature and humidity) using the Chart.js library with values extracted every 3 hours over a 24-hour period.

## 🎥 Demo

![App Demo](/images/weather-web-app.gif)

## 🚀 How to Run the Project

1. Clone this repository:
    ```bash
    git clone https://github.com/evecleison/weather-web-app.git
    ```

2. Create a free account at [OpenWeatherMap](https://openweathermap.org) and get your API key.

3. Replace `YOUR_API_KEY` with your own API key in the `main.js` file:
    ```js
    const apiKey = 'YOUR_API_KEY';
    ```

4. Open the `index.html` file in your browser to use the app.  
The app is 100% frontend and requires no additional dependencies.

## 🛠️ Technologies Used

- HTML5  
- CSS3  
- JavaScript (ES6)  
- [OpenWeatherMap API](https://openweathermap.org)  
- [Chart.js](https://www.chartjs.org) – JavaScript chart library

## 👨‍💻 Author

- Evecleison Albuquerque do Nascimento

## 📄 License

This project is licensed under the MIT License.  
See the [LICENSE](https://github.com/evecleison/weather-web-app?tab=MIT-1-ov-file#MIT-1-ov-file) file for more details.