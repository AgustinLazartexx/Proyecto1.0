import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Snackbar } from '@mui/material';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [isSessionStarted, setIsSessionStarted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/api/auth/login', formData)
      .then(response => {
        console.log(response.data);
        setIsSessionStarted(true); // Sesión iniciada con éxito
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsSessionStarted(false); // Ocultar la alerta
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">Login</Button>
      </form>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={isSessionStarted}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Sesión iniciada"
        sx={{ width: '50%', fontSize: '20px' }} // Tamaño y estilo personalizado
      />
    </Container>
  );
};

export default Login;
