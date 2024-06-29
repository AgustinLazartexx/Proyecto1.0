import React from 'react';
import { Container, Grid, Typography, Link, Box, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: 'white', py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              YourWebsite
            </Typography>
            <Typography variant="body2">
              Nuestra misión es proporcionar las mejores soluciones para la agricultura inteligente. Conéctese con nosotros para obtener más información sobre nuestros productos y servicios.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Enlaces Rápidos
            </Typography>
            <Box>
              <Link href="/about" color="inherit" underline="none">About Us</Link><br />
              <Link href="/products" color="inherit" underline="none">Products</Link><br />
              <Link href="/awards" color="inherit" underline="none">Awards</Link><br />
              <Link href="/help" color="inherit" underline="none">Help</Link><br />
              <Link href="/contact" color="inherit" underline="none">Contact</Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Síguenos
            </Typography>
            <Box>
              <IconButton href="https://www.facebook.com" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton href="https://www.twitter.com" color="inherit">
                <Twitter />
              </IconButton>
              <IconButton href="https://www.instagram.com" color="inherit">
                <Instagram />
              </IconButton>
              <IconButton href="https://www.linkedin.com" color="inherit">
                <LinkedIn />
              </IconButton>
              <IconButton href="https://www.youtube.com" color="inherit">
                <YouTube />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2" component="p">
            &copy; 2024 YourWebsite. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
