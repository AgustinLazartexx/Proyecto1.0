import React from 'react';
import { Container, Grid, Typography, Paper, Box } from '@mui/material';

const HomePage = () => {
  return (
    <Container>
      <Grid container spacing={2} justifyContent="center" style={{ marginTop: '20px' }}>
        <Grid item xs={12} md={2}>
          <Box border={1} padding={2}>
            <Typography variant="h6" align="center">Gestión de Cultivos</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Box border={1} padding={2}>
            <Typography variant="h6" align="center">Lista de Cultivos</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Box border={1} padding={2}>
            <Typography variant="h6" align="center">Dashboard</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Box border={1} padding={2}>
            <Typography variant="h6" align="center">Clima en Tiempo Real</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Box border={1} padding={2}>
            <Typography variant="h6" align="center">Otro Item</Typography>
          </Box>
        </Grid>
      </Grid>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4">About Ecova</Typography>
        <Typography variant="body1">Eco-friendly products can be made from scratch.</Typography>
        <Typography variant="body1">If anything’s hot in today’s economy, it’s saving money, including a broad range of green businesses helping people save energy, water, and other resources.</Typography>
        <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>More About Us</Button>
      </Paper>
    </Container>
  );
};

export default HomePage;
