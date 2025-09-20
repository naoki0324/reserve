import React, { useState } from 'react';
import { Button, TextField, Typography, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // test/1のみOK
    if (username === 'test' && password === '1') {
      setError('');
      navigate('/admin');
    } else {
      setError('ユーザー名またはパスワードが違います');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: '80px auto' }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>ログイン</Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="ユーザー名"
            fullWidth
            margin="normal"
            value={username}
            onChange={e => setUsername(e.target.value)}
            autoFocus
          />
          <TextField
            label="パスワード"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {error && <Typography color="error" variant="body2">{error}</Typography>}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            ログイン
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginPage; 