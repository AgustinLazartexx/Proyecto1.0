import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import SensorData from './SensorData';

// Registrar las escalas y componentes necesarios
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [sensorData, setSensorData] = useState([]);
  const [formData, setFormData] = useState({ sensorType: '', value: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:3001/api/sensordata/')
      .then(response => {
        setSensorData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
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
    labels: sensorData.map(data => new Date(data.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: 'Datos del Sensor',
        data: sensorData.map(data => data.value),
        fill: false,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Line data={data} />
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
              label="Valor"
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
      {sensorData.map(data => (
        <SensorData key={data._id} sensorType={data.sensorType} value={data.value} timestamp={data.timestamp} />
      ))}
    </Container>
  );
};

export default Dashboard;
