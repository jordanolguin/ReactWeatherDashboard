import { useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import CitySearch from "../CitySearch/CitySearch";
import Forecast from "../Forecast/Forecast";
import SearchHistory from "../SearchHistory/SearchHistory";
import "./Weather.css";

const Weather = () => {
  const [city, setCity] = useState("");
  const [history, setHistory] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const fetchWeatherData = async (selectedCity) => {
    const searchCity = selectedCity || city;
    if (!searchCity) return;

    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=imperial`;

    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
      if (searchCity && !history.includes(searchCity)) {
        setHistory([...history, searchCity]);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(null);
    }
  };

  const fetchForecastData = async (selectedCity) => {
    const searchCity = selectedCity || city;
    if (!searchCity) return;

    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=${apiKey}&units=imperial`;

    try {
      const response = await axios.get(forecastUrl);
      setForecastData(response.data);
    } catch (error) {
      console.error("Error fetching forecast data:", error);
      setForecastData(null);
    }
  };

  const handleCitySearchSubmit = async (searchCity) => {
    setCity(searchCity);
    await fetchWeatherData(searchCity);
    await fetchForecastData(searchCity);
  };

  const handleCitySelect = async (selectedCity) => {
    setCity(selectedCity);
    await fetchWeatherData(selectedCity);
    await fetchForecastData(selectedCity);
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  return (
    <Container>
      <CitySearch onCitySubmit={handleCitySearchSubmit} />
      {weatherData && (
        <div className="weather-card glassmorphism">
          <div className="weather-info">
            <h2>{weatherData.name}</h2>
            <div className="weather-icon">
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                alt={weatherData.weather[0].description}
              />
            </div>
            <p>Temperature: {weatherData.main.temp}°F</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind Speed: {weatherData.wind.speed} mph</p>
            <p>Conditions: {weatherData.weather[0].description}</p>
          </div>
        </div>
      )}
      <Forecast forecastData={forecastData} />
      <SearchHistory
        history={history}
        onCitySelect={handleCitySelect}
        onClearHistory={handleClearHistory}
      />
    </Container>
  );
};

export default Weather;
