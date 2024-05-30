import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        About
      </Typography>
      <Typography variant="body1">
        Esta plataforma de agricultura inteligente está diseñada para ayudar a los agricultores a monitorear y optimizar sus cultivos utilizando tecnología avanzada y análisis de datos.
      </Typography>
    </Container>
  );
};

export default About;
