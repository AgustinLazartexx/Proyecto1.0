import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Historial = () => {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/sensordata/')
      .then(response => {
        setSensorData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Historial de Datos del Sensor
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Tipo de Sensor</TableCell>
              <TableCell align="right">Valor</TableCell>
              <TableCell align="right">Fecha</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sensorData.map((data) => (
              <TableRow key={data._id}>
                <TableCell component="th" scope="row">
                  {data.sensorType}
                </TableCell>
                <TableCell align="right">{data.value}</TableCell>
                <TableCell align="right">
                  {new Date(data.timestamp).toLocaleString('default', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Historial;
