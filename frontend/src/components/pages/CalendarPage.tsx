import React from 'react';
import { Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

// 10:00〜24:00まで30分刻みの時間枠を生成
const generateTimeSlots = () => {
  const slots: string[] = [];
  for (let h = 10; h <= 24; h++) {
    for (let m = 0; m < 60; m += 30) {
      if (h === 24 && m > 0) continue; // 24:00は1枠のみ
      const hour = h.toString().padStart(2, '0');
      const min = m.toString().padStart(2, '0');
      slots.push(`${hour}:${min}`);
    }
  }
  return slots;
};

// 今日・翌日・翌々日の3日分の日付を生成
const generateDates = () => {
  const dates: string[] = [];
  const today = new Date();
  for (let i = 0; i < 3; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const yyyy = d.getFullYear();
    const mm = (d.getMonth() + 1).toString().padStart(2, '0');
    const dd = d.getDate().toString().padStart(2, '0');
    dates.push(`${yyyy}-${mm}-${dd}`);
  }
  return dates;
};

// サンプルで一部予約不可枠を作成
const generateSampleAvailability = (dates: string[], times: string[]) => {
  const availability: Record<string, Record<string, boolean>> = {};
  dates.forEach(date => {
    availability[date] = {};
    times.forEach(time => {
      // サンプル: 偶数時・偶数分は予約不可
      const [h, m] = time.split(':').map(Number);
      availability[date][time] = !((h % 2 === 0) && (m % 2 === 0));
    });
  });
  return availability;
};

const CalendarPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { type, staff, course } = location.state || {};

  const dates = generateDates();
  const times = generateTimeSlots();
  const availability = generateSampleAvailability(dates, times);

  const handleSelect = (date: string, time: string) => {
    // 翌々日（3日目）を選択した場合はWaitPageへ遷移
    if (date === dates[2]) {
      navigate('/wait', { state: { date, time } });
      return;
    }
    const slot = { date, time, available: true };
    navigate('/confirm', { state: { type, staff, course, slot } });
  };

  const handleBack = () => navigate(-1);

  return (
    <div style={{ maxWidth: 900, margin: '40px auto', position: 'relative' }}>
      <Typography variant="h5" gutterBottom>日時を選択してください</Typography>
      {type === 'staff' && staff && (
        <Typography variant="subtitle1" color="primary" gutterBottom>
          担当者: {staff.name}
        </Typography>
      )}
      <Typography variant="subtitle1" gutterBottom>
        コース: {course?.name}（{course?.duration}分）
      </Typography>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>時間</TableCell>
              {dates.map(date => (
                <TableCell key={date} align="center">
                  {date}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {times.map(time => (
              <TableRow key={time}>
                <TableCell>{time}</TableCell>
                {dates.map(date => (
                  <TableCell key={date + time} align="center">
                    {availability[date][time] ? (
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => handleSelect(date, time)}
                      >
                        選択
                      </Button>
                    ) : (
                      <Button
                        variant="outlined"
                        color="secondary"
                        size="small"
                        disabled
                      >
                        予約不可
                      </Button>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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

export default CalendarPage; 