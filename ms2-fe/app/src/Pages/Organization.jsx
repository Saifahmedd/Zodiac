import React, { useState } from 'react';
import { Box, Typography, TextField, Button, CircularProgress } from '@mui/material';

const Organization = () => {
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setIsUploading(true);
    // Simulate upload process
    setTimeout(() => {
      setIsUploading(false);
      console.log({
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
        gender: data.get('gender'),
        email: data.get('email'),
        password: data.get('password'),
        contactNumber: data.get('contactNumber'),
        orgName: data.get('orgName'),
        orgType: data.get('orgType'),
        orgAddress: data.get('orgAddress'),
        orgArea: data.get('orgArea'),
        orgGovernorate: data.get('orgGovernorate'),
        document: data.get('document')
      });
      // You can handle form submission and document upload here
    }, 2000);
  };

  return (
    <Box>
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
          required
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
          id="contactNumber"
          label="Contact Number"
          name="contactNumber"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="orgName"
          label="Organization Name"
          name="orgName"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="orgType"
          label="Organization Type"
          name="orgType"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="orgAddress"
          label="Organization Address"
          name="orgAddress"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="orgArea"
          label="Organization Area"
          name="orgArea"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="orgGovernorate"
          label="Organization Governorate"
          name="orgGovernorate"
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
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3 }}
          disabled={isUploading}
        >
          {isUploading ? <CircularProgress size={24} /> : 'Sign Up'}
        </Button>
      </Box>
    </Box>
  );
};

export default Organization;
