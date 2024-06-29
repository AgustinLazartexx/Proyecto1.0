import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Grid, Snackbar, Alert } from '@mui/material';

const AddCrop = () => {
  const [formData, setFormData] = useState({
    name: '',
    cycle: '',
    plantationHistory: '',
    yield: '',
    recommendations: ''
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [timestamp, setTimestamp] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      ...formData,
      yield: parseFloat(formData.yield)
    };

    axios.post('http://localhost:3001/api/crops/add', postData)
      .then((response) => {
        console.log(response.data);
        setTimestamp(response.data.createdAt);
        setOpenSnackbar(true);
      })
      .catch((error) => {
        console.error('Error adding crop:', error);
      });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Agregar Cultivo</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nombre del Cultivo"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Ciclo del Cultivo"
              name="cycle"
              value={formData.cycle}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Historial de Plantaciones"
              name="plantationHistory"
              value={formData.plantationHistory}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Rendimiento"
              name="yield"
              value={formData.yield}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              type="number"
              inputProps={{ min: "0", step: "0.01" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Recomendaciones"
              name="recommendations"
              value={formData.recommendations}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">Agregar</Button>
          </Grid>
        </Grid>
      </form>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Cultivo agregado exitosamente! {timestamp && `Fecha de ingreso: ${new Date(timestamp).toLocaleString()}`}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AddCrop;
