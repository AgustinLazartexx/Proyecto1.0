import React from 'react';
import { Container, Typography, Grid, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar las escalas y componentes necesarios
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const exampleData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Temperatura',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(75,192,192,1)',
    },
  ],
};

const Home = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Bienvenido a la Plataforma de Agricultura Inteligente
      </Typography>
      <Typography variant="body1" paragraph>
        Nuestra plataforma ofrece herramientas avanzadas para monitorear y optimizar el rendimiento de sus cultivos. Utilizando tecnología de sensores y análisis de datos, proporcionamos información en tiempo real para ayudarle a tomar decisiones informadas.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '1rem' }}>
            <Typography variant="h5" gutterBottom>
              Monitorización de Temperatura
            </Typography>
            <Line data={exampleData} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '1rem' }}>
            <Typography variant="h5" gutterBottom>
              Funcionalidades Principales
            </Typography>
            <Typography variant="body1">
              - Monitoreo en tiempo real de las condiciones del suelo y del clima.
            </Typography>
            <Typography variant="body1">
              - Alertas y notificaciones sobre cambios críticos.
            </Typography>
            <Typography variant="body1">
              - Informes detallados y análisis históricos.
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/dashboard" style={{ marginTop: '1rem' }}>
              Ir al Dashboard
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
