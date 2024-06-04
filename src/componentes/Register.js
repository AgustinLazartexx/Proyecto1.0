import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography } from '@mui/material';

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
      <Typography variant="h4" gutterBottom>Register</Typography>
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
        <Button type="submit" variant="contained" color="primary">Register</Button>
      </form>
      {isRegistered && <Typography variant="body1" color="success">Usuario registrado con éxito</Typography>}
    </Container>
  );
};

export default Register;
