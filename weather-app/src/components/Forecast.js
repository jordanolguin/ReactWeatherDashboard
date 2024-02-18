import { Card, Row, Col } from "react-bootstrap";

const Forecast = ({ forecastData }) => {
  if (!forecastData) return null;

  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {forecastData.list
        .filter((_, index) => index % 8 === 0)
        .map((forecast, index) => (
          <Col key={index}>
            <Card>
              <Card.Body>
                <Card.Title>
                  {new Date(forecast.dt * 1000).toLocaleDateString()}
                </Card.Title>
                <Card.Text>
                  Temperature: {forecast.main.temp}°F
                  <br />
                  {forecast.weather[0].description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </Row>
  );
};

export default Forecast;
