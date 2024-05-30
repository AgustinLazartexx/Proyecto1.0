import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Container, Typography } from '@mui/material';
import SensorData from './SensorData';

// Registrar las escalas y componentes necesarios
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/sensorData/')
      .then(response => {
        setSensorData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

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
      {sensorData.map(data => (
        <SensorData key={data._id} sensorType={data.sensorType} value={data.value} timestamp={data.timestamp} />
      ))}
    </Container>
  );
};

export default Dashboard;
