import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Agricultura Inteligente
        </Typography>
        <Box display="flex" alignItems="center">
          <Button color="inherit" component={Link} to="/">Inicio</Button>
          <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
          
          <Button color="inherit" component={Link} to="/contact">Contactos</Button>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Button color="primary" variant="contained" component={Link} to="/login" style={{ margin: '0 10px' }}>iniciar sesion</Button>
          <Button color="primary" variant="contained" component={Link} to="/register">Registrarse</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
