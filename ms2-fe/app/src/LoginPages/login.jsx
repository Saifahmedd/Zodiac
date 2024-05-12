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

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';



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
    } else if (enteredUsername === 'teach' && enteredPassword === 'teach') {
      setLoggedIn(true);
      setUsername(enteredUsername);
      setPassword(enteredPassword);
    } else if (enteredUsername === 'medical' && enteredPassword === 'medical') {
      setLoggedIn(true);
      setUsername(enteredUsername);
      setPassword(enteredPassword);
    }
      
  };
  const handleBackClick = () => {
    // Add your back button logic here
  };
  const toggleDrawer = () => {
    // Your toggleDrawer implementation
  };

  if (loggedIn) {
    if (username === 'donor' && password=== 'donor') {
      return <Navigate to="/home" />;
    } else if (username === 'org' && password=== 'org') {
      return <Navigate to="/OrgHome" />;
    } else if (username === 'admin' && password=== 'admin') {
      return <Navigate to="/adminHome" />;
    } else if (username === 'teach' || password === 'teach'){
      return <Navigate to="/home2" />;
    } else if (username === 'medical' && password === 'medical'){
      return <Navigate to="/home3" />;
    }
  }
  return (
    <ThemeProvider theme={createTheme()}>
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
