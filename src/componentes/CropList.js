import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const CropList = () => {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/crops')
      .then(response => {
        setCrops(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Lista de Cultivos</Typography>
      <Grid container direction="column" spacing={4}>
        {crops.map((crop) => (
          <Grid item key={crop._id}>
            <Card sx={{ margin: 2, padding: 2 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>{crop.name}</Typography>
                <Typography variant="body2"><strong>Ciclo del Cultivo:</strong> {crop.cycle}</Typography>
                <Typography variant="body2"><strong>Historial de Plantaciones:</strong> {crop.plantationHistory}</Typography>
                <Typography variant="body2"><strong>Rendimiento:</strong> {crop.yield}</Typography>
                <Typography variant="body2"><strong>Recomendaciones:</strong> {crop.recommendations}</Typography>
                <Typography variant="body2"><strong>Fecha de Ingreso:</strong> {new Date(crop.createdAt).toLocaleString()}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CropList;
