import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Container, Typography, TextField, Button, Grid, Paper, Box } from '@mui/material';
import SensorData from './SensorData';

// Registrar las escalas y componentes necesarios para Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [sensorData, setSensorData] = useState([]);
  const [formData, setFormData] = useState({ sensorType: '', value: '' });
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = '719ba0b1cd9b825034a482d3751b3fae'; // Reemplaza con tu API Key de OpenWeatherMap
  const city = 'Tucuman'; // Puedes cambiar esto por cualquier ciudad que desees

  useEffect(() => {
    fetchData();
    fetchWeatherData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/sensordata/');
      setSensorData(response.data);
    } catch (error) {
      console.error('Error fetching sensor data:', error);
    }
  };

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/sensordata/add', formData);
      setFormData({ sensorType: '', value: '' });
      fetchData(); // Actualizar los datos después de agregar uno nuevo
    } catch (error) {
      console.error('Error adding sensor data:', error);
    }
  };

  const data = {
    labels: sensorData.map((data) => new Date(data.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: 'Datos del Sensor',
        data: sensorData.map((data) => data.value),
        fill: false,
        backgroundColor: '#4caf50',
        borderColor: '#4caf50',
      },
    ],
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Control de Temperatura
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ padding: 2, backgroundColor: '#f1f8e9' }}>
            <Line data={data} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ padding: 2, backgroundColor: '#f1f8e9' }}>
            <Typography variant="h5" gutterBottom>
              Datos Meteorológicos
            </Typography>
            {loading ? (
              <Typography>Loading...</Typography>
            ) : error ? (
              <Typography>Error fetching weather data: {error.message}</Typography>
            ) : (
              <Box>
                <Typography variant="body1"><strong>Ciudad:</strong> {weatherData.name}</Typography>
                <Typography variant="body1"><strong>Temperatura:</strong> {weatherData.main.temp}°C</Typography>
                <Typography variant="body1"><strong>Condiciones:</strong> {weatherData.weather[0].description}</Typography>
                <Typography variant="body1"><strong>Humedad:</strong> {weatherData.main.humidity}%</Typography>
                <Typography variant="body1"><strong>Viento:</strong> {weatherData.wind.speed} m/s</Typography>
              </Box>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 2, backgroundColor: '#f1f8e9' }}>
            <Typography variant="h5" gutterBottom>
              Agregar Datos del Sensor
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Tipo de Sensor"
                    variant="outlined"
                    name="sensorType"
                    value={formData.sensorType}
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Valor (°C)"
                    variant="outlined"
                    name="value"
                    value={formData.value}
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary">
                    Agregar Dato
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          {sensorData.map((data) => (
            <SensorData key={data._id} sensorType={data.sensorType} value={`${data.value} °C`} timestamp={data.timestamp} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
