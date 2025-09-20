import React, { useState } from 'react';
import { Button, Typography, MenuItem, Select, FormControl, InputLabel, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const staffList = [
  { id: 0, name: 'フリー' },
  { id: 1, name: '担当者A' },
  { id: 2, name: '担当者B' },
  { id: 3, name: '担当者C' },
];

const courses = [
  { id: 1, name: '30分コース', duration: 30, price: 3000 },
  { id: 2, name: '60分コース', duration: 60, price: 5500 },
  { id: 3, name: '90分コース', duration: 90, price: 8000 },
];

const TopPage = () => {
  const navigate = useNavigate();
  const [selectedStaff, setSelectedStaff] = useState(staffList[0].id);
  const [selectedCourse, setSelectedCourse] = useState(courses[0].id);

  const handleReserve = () => {
    const staff = staffList.find(s => s.id === selectedStaff);
    const course = courses.find(c => c.id === selectedCourse);
    const type = staff?.id === 0 ? 'free' : 'staff';
    navigate('/calendar', { state: { type, staff: staff?.id === 0 ? undefined : staff, course } });
  };

  const handleBack = () => navigate(-1);

  return (
    <Box sx={{ maxWidth: 500, margin: '40px auto' }}>
      <Typography variant="h5" gutterBottom>予約タイプ・コースを選択してください</Typography>
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel id="staff-label">担当者</InputLabel>
        <Select
          labelId="staff-label"
          value={selectedStaff}
          label="担当者"
          onChange={e => setSelectedStaff(Number(e.target.value))}
        >
          {staffList.map(staff => (
            <MenuItem key={staff.id} value={staff.id}>{staff.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel id="course-label">コース</InputLabel>
        <Select
          labelId="course-label"
          value={selectedCourse}
          label="コース"
          onChange={e => setSelectedCourse(Number(e.target.value))}
        >
          {courses.map(course => (
            <MenuItem key={course.id} value={course.id}>{course.name}（{course.duration}分 ￥{course.price.toLocaleString()}）</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleReserve}>
        日時を選択へ進む
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
    </Box>
  );
};

export default TopPage; 