import React, { useState } from 'react';
import { Box, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem,CircularProgress } from '@mui/material';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const SignUpAsDonor = () => {
  const [role, setRole] = useState('');
  const [showTeachingFields, setShowTeachingFields] = useState(false);
  const [showDoctorFields, setShowDoctorFields] = useState(false);
  const [gender, setGender] = useState('');
  const [probonoStudents, setProbonoStudents] = useState(0);
  const [probonoCases, setProbonoCases] = useState(0);
  const [probonoClasses, setProbonoClasses] = useState(0);

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
  };

  const handleRoleChange = (event) => {
    const selectedRole = event.target.value;
    setRole(selectedRole);
    setShowTeachingFields(selectedRole === 'teacher');
    setShowDoctorFields(selectedRole === 'doctor');
  };

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
          <TextField
            margin="normal"
            fullWidth
            id="document"
            label="Upload required Document(s) for Donor Verification (if applicable)."
            name="document"
            type="file"
            InputLabelProps={{ shrink: true }}
            inputProps={{ multiple: true }}
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
  </>
)}
          
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpAsDonor;
