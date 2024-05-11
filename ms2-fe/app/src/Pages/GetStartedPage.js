import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import BackgroundImage from '../wall.png'; // Assuming the Background.jpeg file is located in the src directory

import LogImage from '../log.jpg'; 

function GetStartedPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login'); // Navigate to the login page
  };

  const toggleDrawer = () => {
    // Your toggleDrawer implementation
  };

  return (
    <div>
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
      <div
        style={{
            backgroundImage: `url(${BackgroundImage})`,

          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          color: '#fff',
        }}
      >
        <div className="homepage-text" style={{ textAlign: 'center' }}>
         
          <div className="buttons-container">
            <button
              id="getStartedButton"
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '300px', // Adjust this value to move the button to the right
                padding: '20px 20px',
                fontSize: '1.75rem',
                backgroundColor: '#f6d7ff',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
              onClick={handleGetStarted}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStartedPage;
