import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const SensorData = ({ sensorType, value, timestamp }) => {
  const formattedTimestamp = new Date(timestamp).toLocaleString('default', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <Card variant="outlined" style={{ marginTop: '1rem' }}>
      <CardContent>
        <Typography variant="h6">
          Tipo de Sensor: {sensorType}
        </Typography>
        <Typography variant="body1">
          Valor: {value}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Fecha: {formattedTimestamp}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SensorData;
