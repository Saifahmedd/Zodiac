import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, CircularProgress, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const Organization = () => {
  const [registered, setRegistered] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [gender, setGender] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
        setRegistered(false);
        // Redirect to login page after clearing the message
        window.location.href = '/';
      }, 2000); // Delay in milliseconds before resetting message
      return () => clearTimeout(timer);
    }
  }, [message]);
  
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
  
  setMessage('Registered successfully! Redirecting to login page...');
  setRegistered(true); // Set registered to true after form submission
}, 1500); // Delay in milliseconds before simulating form submission completion
};
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 26.8206,
    lng: 30.8025,
  };

  const zoom = 6;

  if (registered) {
    return (
      <Box>
        <Typography variant="h6" align="center">{message}</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9'
      }}
    >
      <Box sx={{ width: '100%' }}>
        <Typography variant="h6" align="center" gutterBottom>Organization Registration</Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
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
          <FormControl fullWidth margin="normal" required>
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              labelId="gender-label"
              id="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
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
          /><Typography variant="subtitle1" gutterBottom>Google Marker:</Typography>
          <LoadScript googleMapsApiKey="AIzaSyBV7JOXLYy7wwGKsvd3MvnfeTU7jJwAKtw">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={zoom}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
          <TextField
            margin="normal"
            required
            fullWidth
            id="document"
            label="Upload required Document(s) for Organization Verification."
            name="document"
            type="file"
            InputLabelProps={{ shrink: true }}
            inputProps={{ multiple: true }}
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
    </Box>
  );
};

export default Organization;
