import React from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CompletePage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 500, margin: '40px auto', textAlign: 'center', position: 'relative' }}>
      <Typography variant="h5" gutterBottom>ご予約が完了しました</Typography>
      <Typography variant="body1" gutterBottom>
        ありがとうございました。<br />
        ご入力いただいたメールアドレス宛に確認メールをお送りしました。
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
        onClick={() => navigate('/')}
      >
        トップへ戻る
      </Button>
    </div>
  );
};

export default CompletePage; 