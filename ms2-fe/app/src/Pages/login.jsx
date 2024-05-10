import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';



function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const enteredUsername = data.get('email').trim();
    const enteredPassword = data.get('password').trim();

    // Check if username and password match
    if (enteredUsername === 'donor' && enteredPassword === 'donor') {
      setLoggedIn(true);
      setUsername(enteredUsername);
      setPassword(enteredPassword);
    } else if (enteredUsername === 'org' && enteredPassword === 'org') {
      setLoggedIn(true);
      setUsername(enteredUsername);
      setPassword(enteredPassword);
    } else if (enteredUsername === 'admin' && enteredPassword === 'admin') {
      setLoggedIn(true);
      setUsername(enteredUsername);
      setPassword(enteredPassword);
    } else {
      alert('Invalid username or password');
    }
  };


  if (loggedIn) {
    if (username === 'donor' && password=== 'donor') {
      return <Navigate to="/DonorLogin" />;
    } else if (username === 'org' && password=== 'org') {
      return <Navigate to="/OrgLogin" />;
    } else if (username === 'admin' && password=== 'admin') {
      return <Navigate to="/AdminLogin" />;
    }
  }
  return (
    <ThemeProvider theme={createTheme()}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"

            InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          edge="end"
        >
          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </IconButton>
      </InputAdornment>
    ),
  }}
/>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container spacing={1}>
  <Grid item xs>
    <Link href="#" variant="body2">
      Forgot password?
    </Link>
  </Grid>
  <Grid item xs>
    <Typography variant="body2" align="center">
      Don't have an account? 
    </Typography>
  
<Typography variant="body2" align="center">
  <RouterLink to="/SignUp">
    Sign up as a Donor
  </RouterLink>
</Typography>
<Typography variant="body2" align="center">
  <RouterLink to="/SignUp1">
    Sign up as an Organization
  </RouterLink>
</Typography>
<Grid container spacing={1}>
  {/* Existing Grid items for Forgot password */}
</Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;
