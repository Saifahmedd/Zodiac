import React from 'react';
import { Box, Stack, Typography, Avatar, Divider } from '@mui/material';
import { Person, Email, Phone } from '@mui/icons-material';

export default function AdminProfile() {
  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', p: 3, borderRadius: 4, boxShadow: 1 }}>
      <Avatar sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }} src="path/to/avatar.jpg" alt="Profile Picture" />
      <Typography variant="h5" align="center" gutterBottom>
        Saif Ali
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Stack spacing={5}>
        <InfoItem icon={<Person />} label="Name" value="Saif Ali" />
        <InfoItem icon={<Email />} label="Email" value="saif.ali@gmail.com" />
        <InfoItem icon={<Phone />} label="Mobile Number" value="0100-876-9261" />
      </Stack>
    </Box>
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