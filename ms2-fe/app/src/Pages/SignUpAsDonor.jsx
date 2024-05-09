import React, { useState } from 'react';
import { Box, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const SignUpAsDonor = () => {
  const [role, setRole] = useState('');
  const [showTeachingFields, setShowTeachingFields] = useState(false);
  const [showDoctorFields, setShowDoctorFields] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      gender: data.get('gender'),
      email: data.get('email'),
      contactNumber: data.get('contactNumber'),
      password: data.get('password'),
      address: data.get('address'),
      area: data.get('area'),
      governorate: data.get('governorate'),
      role: data.get('role'),
      document: data.get('document')
      // Add more fields as needed
    });
  };

  const handleRoleChange = (event) => {
    const selectedRole = event.target.value;
    setRole(selectedRole);
    setShowTeachingFields(selectedRole === 'teacher');
    setShowDoctorFields(selectedRole === 'doctor');
  };

  return (
    <Box>
      <Typography variant="h6">Registration for Donors</Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="firstName"
          label="First Name"
          name="firstName"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
        />
        <TextField
          margin="normal"
          fullWidth
          id="gender"
          label="Gender"
          name="gender"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          type="email"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="contactNumber"
          label="Contact Number"
          name="contactNumber"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
          type="password"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="address"
          label="Address"
          name="address"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="area"
          label="Area"
          name="area"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="governorate"
          label="Governorate"
          name="governorate"
        />
            <TextField
          margin="normal"
          required
          fullWidth
          id="document"
          label="Upload Document(s)"
          name="document"
          type="file"
          InputLabelProps={{ shrink: true }}
        />
        <FormControl fullWidth margin="normal" required>
          <InputLabel id="role-label">Role</InputLabel>
          <Select
            labelId="role-label"
            id="role"
            name="role"
            value={role}
            onChange={handleRoleChange}
          >
            <MenuItem value="regularDonor">Regular Donor</MenuItem>
            <MenuItem value="teacher">Teacher</MenuItem>
            <MenuItem value="doctor">Doctor</MenuItem>
          </Select>
        </FormControl>
        {showTeachingFields && (
          <>
            <TextField
              margin="normal"
              required
              fullWidth
              id="subjects"
              label="Subjects I can teach"
              name="subjects"
            />
        
            <TextField
              margin="normal"
              required
              fullWidth
              id="probonoStudents"
              label="How manyPro-bono students I can tutor"
              name="probonoStudents"
            />
          </>
        )}
        {showDoctorFields && (
          <>
            <TextField
              margin="normal"
              required
              fullWidth
              id="clinicAddress"
              label="Clinic Address"
              name="clinicAddress"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="clinicArea"
              label="Clinic Area"
              name="clinicArea"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="clinicGovernorate"
              label="Clinic Governorate"
              name="clinicGovernorate"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="specialty"
              label="Specialty"
              name="specialty"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="probonoCases"
              label="Pro-bono cases I can take on"
              name="probonoCases"
            />
          </>
        )}
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default SignUpAsDonor;
