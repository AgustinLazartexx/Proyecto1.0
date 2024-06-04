import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography } from '@mui/material';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = '719ba0b1cd9b825034a482d3751b3fae'; // Reemplaza con tu API Key de OpenWeatherMap
  const city = 'Tucuman'; // Puedes cambiar esto por cualquier ciudad que desees

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city, apiKey]);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error fetching weather data: {error.message}</Typography>;

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Clima en {weatherData.name}
      </Typography>
      <Typography variant="body1">
        Temperatura: {weatherData.main.temp}°C
      </Typography>
      <Typography variant="body1">
        Condiciones: {weatherData.weather[0].description}
      </Typography>
      <Typography variant="body1">
        Humedad: {weatherData.main.humidity}%
      </Typography>
      <Typography variant="body1">
        Viento: {weatherData.wind.speed} m/s
      </Typography>
    </Container>
  );
};

export default Weather;
