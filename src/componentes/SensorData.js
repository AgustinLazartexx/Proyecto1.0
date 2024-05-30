import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const SensorData = ({ sensorType, value, timestamp }) => {
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <CardContent>
        <Typography variant="h5">{sensorType}</Typography>
        <Typography variant="body2">Valor: {value}</Typography>
        <Typography variant="body2">Fecha: {new Date(timestamp).toLocaleString()}</Typography>
      </CardContent>
    </Card>
  );
};

export default SensorData;
