import React from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const WaitPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { date, time } = location.state || {};

  return (
    <div style={{ maxWidth: 500, margin: '40px auto', textAlign: 'center', position: 'relative' }}>
      <Typography variant="h5" gutterBottom>ご予約はまだできません</Typography>
      <Typography variant="body1" gutterBottom>
        {date && time ? `${date} ${time} のご予約は、時間までお待ちください。` : '時間までお待ちください。'}
      </Typography>
      <Button
        variant="outlined"
        color="secondary"
        sx={{ mt: 3 }}
        onClick={() => navigate(-1)}
      >
        戻る
      </Button>
    </div>
  );
};

export default WaitPage; 