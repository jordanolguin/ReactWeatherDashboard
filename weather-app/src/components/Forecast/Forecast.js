import "./Forecast.css";

const Forecast = ({ forecastData }) => {
  if (!forecastData) return null;

  return (
    <div className="forecast-container">
      {forecastData.list
        .filter((_, index) => index % 8 === 0)
        .map((forecast, index) => (
          <div className="forecast-card" key={index}>
            <div className="forecast-date">
              {new Date(forecast.dt * 1000).toLocaleDateString()}
            </div>
            <div className="forecast-icon">
              <img
                src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                alt="Weather condition icon"
              />
            </div>
            <div className="forecast-temp">Temp: {forecast.main.temp}°F</div>
            <div className="forecast-description">
              {forecast.weather[0].description}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Forecast;
