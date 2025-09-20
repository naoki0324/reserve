import React, { useState } from 'react';
import { Button, Typography, Box, Paper, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

// 初期ダミーユーザー
const initialUsers = [
  { id: 1, name: '山田太郎', email: 'taro@example.com', role: 'customer' },
  { id: 2, name: '佐藤花子', email: 'hanako@example.com', role: 'staff' },
  { id: 3, name: '管理者', email: 'admin@example.com', role: 'admin' },
];

const AdminPage = () => {
  const [users, setUsers] = useState(initialUsers);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('customer');

  const handleAdd = () => {
    if (!name || !email) return;
    setUsers([...users, { id: Date.now(), name, email, role }]);
    setName('');
    setEmail('');
    setRole('customer');
  };

  const handleDelete = (id: number) => {
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <Box sx={{ maxWidth: 700, margin: '40px auto' }}>
      <Typography variant="h5" gutterBottom>店舗メニュー（ユーザー管理）</Typography>
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="subtitle1" gutterBottom>ユーザー追加</Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField label="氏名" value={name} onChange={e => setName(e.target.value)} size="small" />
          <TextField label="メール" value={email} onChange={e => setEmail(e.target.value)} size="small" />
          <TextField label="種別" value={role} onChange={e => setRole(e.target.value)} size="small" placeholder="customer/staff/admin" />
          <Button variant="contained" onClick={handleAdd}>追加</Button>
        </Box>
      </Paper>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>氏名</TableCell>
              <TableCell>メール</TableCell>
              <TableCell>種別</TableCell>
              <TableCell>操作</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map(user => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <IconButton color="error" onClick={() => handleDelete(user.id)} size="small">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AdminPage; 