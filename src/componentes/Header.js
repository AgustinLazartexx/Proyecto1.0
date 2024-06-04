import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%">
          <img src={logo} alt="Logo" style={{ width: 150, height: 150, marginBottom: 10 }} />
          <Typography variant="h6" align="center">
            "Cultiva Inteligencia, Cosecha Innovación"
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

