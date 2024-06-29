import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography , Alert } from '@mui/material';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/api/auth/register', formData)
      .then(response => {
        console.log(response.data);
        setIsRegistered(true); // Usuario registrado con éxito
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Registrarse</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          name="username"
          value={formData.username}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Contraseña"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">Registrar</Button>
      </form>
      {isRegistered &&   <Alert  severity="success" sx={{ width: '100%' }}>
          Registrado exitosamente!
        </Alert>}
    </Container>
  );
};

export default Register;
