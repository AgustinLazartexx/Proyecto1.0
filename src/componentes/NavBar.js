import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box, Menu, MenuItem } from '@mui/material';

const NavBar = () => {
  const [anchorElCultivos, setAnchorElCultivos] = useState(null);
  const [anchorElMonitoreo, setAnchorElMonitoreo] = useState(null);

  const handleCultivosMenuOpen = (event) => {
    setAnchorElCultivos(event.currentTarget);
  };

  const handleCultivosMenuClose = () => {
    setAnchorElCultivos(null);
  };

  const handleMonitoreoMenuOpen = (event) => {
    setAnchorElMonitoreo(event.currentTarget);
  };

  const handleMonitoreoMenuClose = () => {
    setAnchorElMonitoreo(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#f8f8f8', boxShadow: 'none', borderBottom: 1, borderColor: 'divider' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button sx={{ color: 'black', mx: 1 }} component={Link} to="/">Inicio</Button>
          <Button sx={{ color: 'black', mx: 1 }} component={Link} to="/about">Sobre Nosotros</Button>
          <Button
            sx={{ color: 'black', mx: 1 }}
            onClick={handleMonitoreoMenuOpen}
            aria-controls="monitoreo-menu"
            aria-haspopup="true"
          >
            Monitoreo
          </Button>
          <Menu
            id="monitoreo-menu"
            anchorEl={anchorElMonitoreo}
            keepMounted
            open={Boolean(anchorElMonitoreo)}
            onClose={handleMonitoreoMenuClose}
          >
            <MenuItem component={Link} to="/dashboard" onClick={handleMonitoreoMenuClose}>
              Control Temperatura
            </MenuItem>
          </Menu>
          <Button
            sx={{ color: 'black', mx: 1 }}
            onClick={handleCultivosMenuOpen}
            aria-controls="cultivos-menu"
            aria-haspopup="true"
          >
            Gestión de Cultivos
          </Button>
          <Menu
            id="cultivos-menu"
            anchorEl={anchorElCultivos}
            keepMounted
            open={Boolean(anchorElCultivos)}
            onClose={handleCultivosMenuClose}
          >
            <MenuItem component={Link} to="/add-crop" onClick={handleCultivosMenuClose}>
              Agregar Cultivo
            </MenuItem>
            <MenuItem component={Link} to="/crops" onClick={handleCultivosMenuClose}>
              Lista de Cultivos
            </MenuItem>
          </Menu>
        </Box>
        <Box display="flex" alignItems="center">
          <Button color="primary" variant="contained" component={Link} to="/login" sx={{ mx: 1 }}>
            Iniciar Sesión
          </Button>
          <Button color="primary" variant="contained" component={Link} to="/register" sx={{ mx: 1 }}>
            Registrarse
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
