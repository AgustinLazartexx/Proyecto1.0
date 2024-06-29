import React from 'react';
import { Container, Typography, Grid, Paper, Button, Card, CardContent, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Weather from './Weather';
import WeatherMap from './WeatherMap';
import ImageSlider from './Slider'; // Importa el componente Slider
import Chat from './Chat'; // Importa el componente de Chat

// Registrar las escalas y componentes necesarios para Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const exampleData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Temperatura',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: '#4caf50',
      borderColor: '#4caf50',
    },
  ],
};

const Home = () => {
  return (
    <Container maxWidth="lg" style={{ padding: '2rem 0' }}>
      <Typography variant="h3" gutterBottom style={{ color: '#4caf50', textAlign: 'center', marginBottom: '2rem' }}>
        Bienvenido a la Plataforma de Agricultura Inteligente
      </Typography>
      <Typography variant="body1" paragraph style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Nuestra plataforma ofrece herramientas avanzadas para monitorear y optimizar el rendimiento de sus cultivos. Utilizando tecnología de sensores y análisis de datos, proporcionamos información en tiempo real para ayudarle a tomar decisiones informadas.
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <ImageSlider /> {/* Agrega el Slider aquí */}
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '1.5rem', backgroundColor: '#f1f8e9' }}>
            <Typography variant="h5" gutterBottom>
              Monitorización de Temperatura
            </Typography>
            <Line data={exampleData} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: '1.5rem', backgroundColor: '#f1f8e9' }}>
            <Weather />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '1.5rem', backgroundColor: '#f1f8e9' }}>
            <WeatherMap />
          </Paper>
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Button variant="contained" color="primary" component={Link} to="/dashboard" style={{ marginRight: '1rem' }}>
            Ir al Dashboard
          </Button>
          <Button variant="contained" color="primary" component={Link} to="/gestion-cultivos">
            Gestión de Cultivos
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" component="div">
                Últimas Noticias
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Manténgase informado con las últimas noticias sobre agricultura y tecnología.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component={Link} to="/news">Leer más</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" component="div">
                Funcionalidades Destacadas
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Descubre todas las funcionalidades que nuestra plataforma tiene para ofrecer.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component={Link} to="/features">Explorar</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" component="div">
                Testimonios
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Vea lo que otros agricultores tienen que decir sobre nuestra plataforma.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component={Link} to="/testimonials">Leer Testimonios</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '1.5rem', backgroundColor: '#f1f8e9', marginTop: '2rem' }}>
            <Typography variant="h5" gutterBottom>
              Preguntas Frecuentes
            </Typography>
            <Typography variant="body1" paragraph>
              Encuentra respuestas a las preguntas más comunes sobre el uso de nuestra plataforma.
            </Typography>
            <Button size="small" component={Link} to="/faq">Ver Preguntas Frecuentes</Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '1.5rem', backgroundColor: '#f1f8e9', marginTop: '2rem' }}>
            <Chat />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
