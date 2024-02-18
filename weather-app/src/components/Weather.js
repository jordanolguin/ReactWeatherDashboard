import { useState } from "react";
import axios from "axios";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forcastData, setForcastData] = useState(null);

  const fetchWeatherData = async () => {
    if (!city) return;

    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(null);
    }
  };

  const fetchForcastData = async () => {
    if (!city) return;

    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const forcastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;

    try {
      const response = await axios.get(forcastUrl);
      setForcastData(response.data);
    } catch (error) {
      console.error("Error fetching forcast data:", error);
      setForcastData(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchWeatherData();
    await fetchForcastData();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} className="mb-3">
        <Form.Group controlId="cityInput">
          <Form.Label>City:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city name"
            value={city || ""}
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Get Weather
        </Button>
      </Form>

      {weatherData && (
        <Card className="mb-3">
          <Card.Body>
            <Card.Title>{weatherData.name}</Card.Title>
            <Card.Text>
              Temperature: {weatherData.main.temp}°F
              <br />
              Humidity: {weatherData.main.humidity}%<br />
              Wind Speed: {weatherData.wind.speed} mph
              <br />
              Conditions: {weatherData.weather[0].description}
            </Card.Text>
          </Card.Body>
        </Card>
      )}

      {forcastData && (
        <Row xs={1} md={2} lg={3} className="g-4">
          {forcastData.list.slice(0, 5).map((forcast, index) => (
            <Col key={index}>
              <Card>
                <Card.Body>
                  <Card.Title>
                    {new Date(forcast.dt * 1000).toLocaleDateString()}
                  </Card.Title>
                  <Card.Text>
                    Temperature: {forcast.main.temp}°F
                    <br />
                    {forcast.weather[0].description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Weather;
