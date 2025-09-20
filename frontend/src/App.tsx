import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Button, Card, CardContent, Typography } from '@mui/material';
import GridLegacy from '@mui/material/GridLegacy';
import { useLocation, useNavigate } from 'react-router-dom';
import TopPage from './components/pages/TopPage';
import CalendarPage from './components/pages/CalendarPage';
import ConfirmPage from './components/pages/ConfirmPage';
import CompletePage from './components/pages/CompletePage';
import WaitPage from './components/pages/WaitPage';
import LoginPage from './components/pages/LoginPage';
import AdminPage from './components/pages/AdminPage';

const staffList = [
  { id: 1, name: '担当者A' },
  { id: 2, name: '担当者B' },
  { id: 3, name: '担当者C' },
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/top" element={<TopPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/confirm" element={<ConfirmPage />} />
        <Route path="/complete" element={<CompletePage />} />
        <Route path="/wait" element={<WaitPage />} />
      </Routes>
    </Router>
  );
}

export default App;
