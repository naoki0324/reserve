import React from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const ConfirmPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { type, staff, course, slot } = location.state || {};

  const handleSubmit = () => {
    navigate('/complete');
  };

  const handleBack = () => navigate(-1);

  return (
    <div style={{ maxWidth: 500, margin: '40px auto', position: 'relative' }}>
      <Typography variant="h5" gutterBottom>ご予約内容の確認</Typography>
      <Card>
        <CardContent>
          <Typography variant="subtitle1" gutterBottom>
            ■ 日付: {slot?.date}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            ■ 時間: {slot?.time}（コース {course?.duration}分）
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {type === 'free' && '担当者: フリー'}
            {type === 'staff' && staff && `担当者: ${staff.name}`}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            コース: {course?.name}（￥{course?.price?.toLocaleString()}）
          </Typography>
        </CardContent>
      </Card>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 3 }}
        onClick={handleSubmit}
      >
        この内容で予約
      </Button>
      <div style={{ marginTop: 32 }}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleBack}
        >
          戻る
        </Button>
      </div>
    </div>
  );
};

export default ConfirmPage; 