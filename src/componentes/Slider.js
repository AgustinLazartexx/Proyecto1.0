import React from 'react';
import Slider from 'react-slick';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Importar imágenes
import image1 from '../assets/campo.jpg';
import image2 from '../assets/La_cosecha.jpg';
import image3 from '../assets/sector-agricola.jpg';

const imageData = [
  {
    title: "Agricultura Sostenible",
    description: "La agricultura sostenible es un modelo agrícola que busca proteger el medioambiente, garantizar la seguridad alimentaria y promover el bienestar rural",
    url: image1
  },
  {
    title: "Conservación de Recursos",
    description: "Integra tecnologías y prácticas amigables con el medio ambiente para cuidar y aprovechar al máximo los recursos naturales a largo plazo.",
    url: image2
  },
  {
    title: "Mitigación del Cambio Climático",
    description: "Contribuye a mitigar el cambio climático al crear sistemas alimentarios sostenibles.",
    url: image3
  }
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        // Activar el auto-play
    autoplaySpeed: 3000    // Tiempo entre cada slide (en milisegundos)
  };

  return (
    <Slider {...settings}>
      {imageData.map((image, index) => (
        <Card key={index} style={{ maxWidth: 800, margin: '0 auto' }}>
          <CardMedia
            component="img"
            height="400"
            image={image.url}
            alt={image.title}
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {image.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {image.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Slider>
  );
};

export default ImageSlider;
