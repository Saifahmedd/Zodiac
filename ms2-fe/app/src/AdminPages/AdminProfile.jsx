import React from 'react';
import { Box, Stack, Typography, Avatar, Divider } from '@mui/material';
import { Person, Email, Phone } from '@mui/icons-material';
import Home from "./AdminHome"

export default function AdminProfile() {
  return (
    <div>
        <Home/>
    
    <Box sx={{ maxWidth: 400, mx: 'auto', p: 3, borderRadius: 4, boxShadow: 1 }}>
      <Avatar sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }} src="https://mui.com/static/images/avatar/3.jpg" alt="Profile Picture" />
      <Typography variant="h5" align="center" gutterBottom>
        Nada Ibrahim
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Stack spacing={5}>
        <InfoItem icon={<Person />} label="Name" value="Nada Ibrahim" />
        <InfoItem icon={<Email />} label="Email" value="nada.abdelfattah@guc.edu.eg" />
        <InfoItem icon={<Phone />} label="Mobile Number" value="0100-876-9261" />
      </Stack>
    </Box>
    </div>
  );
}

function InfoItem({ icon, label, value }) {
  return (
    
    <Stack direction="row" alignItems="center" spacing={1}>
      {icon}
      <Typography variant="body1" fontWeight="bold">{label}:</Typography>
      <Typography variant="body1">{value}</Typography>
    </Stack>
    
  );
}