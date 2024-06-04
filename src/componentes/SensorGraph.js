import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Container, Typography, TextField, Button } from '@mui/material';

// Registrar las escalas y componentes necesarios
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SensorGraph = () => {
  const [sensorData, setSensorData] = useState([]);
  const [sensorType, setSensorType] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    fetchSensorData();
  }, []);

  const fetchSensorData = () => {
    axios.get('http://localhost:3000/api/sensordata/')
      .then(response => {
        setSensorData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSensorData = { sensorType, value: Number(value) };
    axios.post('http://localhost:3000/api/sensordata/add', newSensorData)
      .then(response => {
        setSensorData([...sensorData, response.data]);
        setSensorType('');
        setValue('');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const data = {
    labels: sensorData.map(data => new Date(data.timestamp).toLocaleString('default', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })),
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
        Sensor Data Graph
      </Typography>
      <Line data={data} />
      <form onSubmit={handleSubmit}>
        <TextField
          label="Sensor Type"
          value={sensorType}
          onChange={(e) => setSensorType(e.target.value)}
          required
        />
        <TextField
          label="Value"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Add Data
        </Button>
      </form>
    </Container>
  );
};

export default SensorGraph;
