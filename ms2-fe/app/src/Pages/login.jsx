import React, { useState } from 'react';
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


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

const SignUpAsDonor = () => {
  return (
    <Box>
      {/* Donor sign-up form */}
      <Typography variant="h6">Sign up as a donor</Typography>
      {/* Add your donor sign-up form fields here */}
    </Box>
  );
};

const SignUpAsOrganization = () => {
  return (
    <Box>
      {/* Organization sign-up form */}
      <Typography variant="h6">Sign up as an organization</Typography>
      {/* Add your organization sign-up form fields here */}
    </Box>
  );
};

const Login = () => {
  const [signUpType, setSignUpType] = useState(null);

  const handleSignUpClick = (type) => {
    setSignUpType(type);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
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
              type="password"
              id="password"
              autoComplete="current-password"
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
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
               
                </Link>
              </Grid>
              <Grid item>
               
               
              </Grid>
            </Grid>
          
           
           
   
            <Grid item>
    <Typography variant="body2">
      Don't have an account? 
    </Typography>
    <Link href="#" variant="body2" onClick={() => handleSignUpClick('donor')}>
      Sign up as a donor
    </Link>

    <Link to='/Signup1'><button>sign up org</button></Link>
    <Typography variant="body2"> </Typography>
    <Link href="#" variant="body2" onClick={() => handleSignUpClick('organization')}>
      Sign up as an organization
    </Link>
  </Grid>


            {signUpType === 'organization' && <SignUpAsOrganization />}
          </Box>
        </Box>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
