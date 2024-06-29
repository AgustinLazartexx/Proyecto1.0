import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import axios from 'axios';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const newMessage = { text: input, sender: 'user' };
    setMessages([...messages, newMessage]);

    try {
      const response = await axios.post('http://localhost:3001/api/chat', {
        prompt: input
      });

      const aiMessage = { text: response.data.message, sender: 'ai' };
      setMessages([...messages, newMessage, aiMessage]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      const errorMessage = error.response ? error.response.data.message : 'Error fetching AI response';
      const aiMessage = { text: errorMessage, sender: 'ai' };
      setMessages([...messages, newMessage, aiMessage]);
    }

    setInput('');
  };

  return (
    <Paper elevation={3} sx={{ padding: 2, marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>
        Chat con IA
      </Typography>
      <Box sx={{ height: '300px', overflowY: 'scroll', padding: 2, border: '1px solid #ccc', marginBottom: 2 }}>
        {messages.map((message, index) => (
          <Typography key={index} align={message.sender === 'user' ? 'right' : 'left'} variant="body1">
            <strong>{message.sender === 'user' ? 'Tú: ' : 'IA: '}</strong>{message.text}
          </Typography>
        ))}
      </Box>
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Escribe tu mensaje..."
        value={input}
        onChange={handleInputChange}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleSendMessage} fullWidth>
        Enviar
      </Button>
    </Paper>
  );
};

export default Chat;
