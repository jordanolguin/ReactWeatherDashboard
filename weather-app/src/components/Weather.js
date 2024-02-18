import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
      const city = "New York";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

      try {
        const response = await axios.get(url);
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data", error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      {weatherData ? (
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{weatherData.name}</Card.Title>
            <Card.Text>Temperature: {weatherData.main.temp}°F</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;
