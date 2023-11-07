import React, { useState, useEffect } from 'react';
import CreateFits from './CreateFits'; // Import the CreateFits component

function Weather() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Denver&appid=c82d5efadbe37e6a719e4c9825b64b6b&units=metric`
        );
        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
        } else {
          console.error('Failed to fetch weather data');
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    fetchData();
  }, []);
  const convertCelsiusToFahrenheit = (celsius) => {
    return ((celsius * 9 / 5) + 32).toFixed(2);
  };

  return (
    <div
      id="weather"
      style={{
        display: 'flex',
        marginTop: '-740px',
        justifyContent: 'center',
        padding: '120px',
        border: '10px solid #000',
        backgroundColor: '#f9f9f9',
        height: '800px',
        width: '100px',
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: '10px', // Apply rounded border to the outer div
        marginLeft: '2025px',

        backgroundImage: 'url("https://img.freepik.com/premium-vector/day-with-clouds-weather-app-screen-mobile-interface-design-forecast-weather-background-time-concept-vector-banner_87946-4137.jpg")',
      }}
    >
      {weatherData ? (
        <div>
          <h2 style={{ borderBottom: '4px solid #000', color: 'black', marginTop: '-100px', fontSize: '55px' }}>
            Weather
          </h2>
          <p style={{ fontWeight: 'bold', fontSize: '30px', color: 'black', marginTop: '100px' }}>
            Temperature: {convertCelsiusToFahrenheit(weatherData.main.temp)}°F
          </p>
          <p style={{ fontWeight: 'bold', fontSize: '30px', color: 'black' }}>
            Max Temperature: {convertCelsiusToFahrenheit(weatherData.main.temp_max)}°F
          </p>
          <p style={{ fontWeight: 'bold', fontSize: '30px', color: 'black' }}>
            Lowest Temperature: {convertCelsiusToFahrenheit(weatherData.main.temp_min)}°F
          </p>
          <p style={{ fontWeight: 'bold', fontSize: '30px', color: 'black' }}>
            Humidity: {weatherData.main.humidity}%
          </p>
        </div>
      ) : (
        <p>Weather Data</p>
      )}
    </div>
  );
}

export default Weather;
