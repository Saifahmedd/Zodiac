import React, { useState , useEffect } from 'react';
import { Box, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button, CircularProgress,IconButton } from '@mui/material';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Link } from 'react-router-dom';



const SignUpAsDonor = () => {
  const [role, setRole] = useState('');
  const [showTeachingFields, setShowTeachingFields] = useState(false);
  const [showDoctorFields, setShowDoctorFields] = useState(false);
  const [gender, setGender] = useState('');
  const [probonoStudents, setProbonoStudents] = useState(0);
  const [probonoCases, setProbonoCases] = useState(0);
  const [probonoClasses, setProbonoClasses] = useState(0);

  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState('');
 
    useEffect(() => {
      if (message) {
        const timer = setTimeout(() => {
          setMessage('');
          // Redirect to login page after clearing the message
          window.location.href = '/login';
        }, 2000); // Delay in milliseconds before resetting message
        return () => clearTimeout(timer);
      }
    }, [message]);
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
    });
    setIsUploading(true);
    setTimeout(() => {
      setMessage('Registered successfully! Redirecting to login page...');
      setIsUploading(false);
    }, 1500); // Delay in milliseconds before setting message
  };
  const toggleDrawer = () => {
    // Your toggleDrawer implementation
  };


  const handleRoleChange = (event) => {
    const selectedRole = event.target.value;
    setRole(selectedRole);
    setShowTeachingFields(selectedRole === 'teacher');
    setShowDoctorFields(selectedRole === 'doctor');
  };


  if (message) {
    return (
      <Box>
        <Typography variant="h6" align="center">{message}</Typography>
      </Box>
    );
  }

  return (
    <>
    <AppBar position="static">
        <Toolbar>
          <Tooltip title="Menu">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
          <img alt="logo" style={{ width: 'auto', height: '60px', marginRight: '10px' }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Care Charity
          </Typography>
          <Tooltip title="Mail">
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MailIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Likes">
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <FavoriteBorderIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Profile">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              component={Link}
              to="/account"
              sx={{ mr: 2, ml: 2 }}
            >
              <AccountCircleIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
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
        <Typography variant="h6" align="center" gutterBottom>Registration for Donors</Typography>
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
              <Typography variant="subtitle1" gutterBottom>Teaching Details</Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="subjects"
                label="Subjects I can teach"
                name="subjects"
              />
               <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="probonoClasses"
                  label="Number of Pro-bono classes I can teach"
                  name="probonoClasses"
                  type="number"
                  value={probonoClasses}
                  InputProps={{ inputProps: { min: 0 }, readOnly: true }}
                />
                <Button
                  variant="contained"
                  onClick={() => setProbonoClasses(probonoClasses + 1)}
                  sx={{ ml: 1, backgroundColor: 'transparent', color: 'black', padding: 0 }}
                >
                  <KeyboardArrowUpIcon />
                </Button>
                <Button
                  variant="contained"
                  onClick={() => setProbonoClasses(probonoClasses > 0 ? probonoClasses - 1 : 0)}
                  sx={{ ml: 1, backgroundColor: 'transparent', color: 'black', padding: 0 }}
                >
                  <KeyboardArrowDownIcon />
                </Button>
              </Box>
 <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="probonoStudents"
        label="Number of Pro-bono students I can tutor"
        name="probonoStudents"
        type="number"
        value={probonoStudents}
        InputProps={{ inputProps: { min: 0 }, readOnly: true }}
      />
      <Button
        variant="contained"
        onClick={() => setProbonoStudents(probonoStudents + 1)}
        sx={{ ml: 1, backgroundColor: 'transparent', color: 'black', padding: 0 }}
      >
        <KeyboardArrowUpIcon />
      </Button>
      <Button
        variant="contained"
        onClick={() => setProbonoStudents(probonoStudents > 0 ? probonoStudents - 1 : 0)}
        sx={{ ml: 1, backgroundColor: 'transparent', color: 'black', padding: 0 }}
      >
        <KeyboardArrowDownIcon />
      </Button>
    </Box>
    <TextField
             margin="normal"
             required
             fullWidth
             id="document"
            label="Upload required Document(s) for Teacher Verification."
            name="document"
            type="file"
            InputLabelProps={{ shrink: true }}
            inputProps={{ multiple: true }}
          />
            </>
          )}

          {showDoctorFields && (
            <>
              <Typography variant="subtitle1" gutterBottom>Doctor Details</Typography>
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
                <Typography variant="subtitle1" gutterBottom>Google Marker:</Typography>
              <LoadScript
                googleMapsApiKey="AIzaSyBV7JOXLYy7wwGKsvd3MvnfeTU7jJwAKtw"
              >
                <GoogleMap
                  center={{ lat: 26.8206, lng: 30.8025 }}
                  zoom={6}
                  mapContainerStyle={{ height: '300px', width: '100%' }}
                >
                  <Marker position={{ lat: 26.8206, lng: 30.8025 }} />
                </GoogleMap>
              </LoadScript>
              <TextField
                margin="normal"
                required
                fullWidth
                id="specialty"
                label="Specialty"
                name="specialty"
              />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            
          <TextField
  margin="normal"
  required
  fullWidth
  id="probonoCases"
  label="Number of Pro-bono cases I can take on"
  name="probonoCases"
  type="number"
  value={probonoCases}
  
  InputProps={{ inputProps: { min: 0 }, readOnly: true }}
/>
      <Button
        variant="contained"
        onClick={() => setProbonoCases(probonoCases + 1)}
        sx={{ ml: 1, backgroundColor: 'transparent', color: 'black', padding: 0 }}
      >
        <KeyboardArrowUpIcon />
      </Button>
      <Button
        variant="contained"
        onClick={() => setProbonoCases(probonoCases > 0 ? probonoCases - 1 : 0)}
        sx={{ ml: 1, backgroundColor: 'transparent', color: 'black', padding: 0 }}
      >
        <KeyboardArrowDownIcon />
      </Button>
    </Box>
    <TextField
          margin="normal"
          required
          fullWidth
          id="document"
            label="Upload required Document(s) for Doctor Verification."
            name="document"
            type="file"
            InputLabelProps={{ shrink: true }}
            inputProps={{ multiple: true }}
          />
  </>
)}
          
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
    </>
  );
};

export default SignUpAsDonor;
