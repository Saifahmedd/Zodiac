import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, Tooltip } from '@mui/material';
import { AccessTime, AccountCircle, Bloodtype, Category, Checkroom, Edit, EventNote, ExpandLess, ExpandMore, Fastfood, Groups, Home, Mail, Masks, MenuBook, School, Toys, Vaccines,FavoriteBorder } from '@mui/icons-material';
import Logo from './images/logo_Main.png';

const Root = () => {
  const [drawerOpen, setDrawerOpen] = useState(false); // State to manage drawer open/close
  const [categoryOpen, setCategoryOpen] = useState(false); // State to manage category sublist open/close

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen); // Function to toggle the drawer state
  };

  const toggleCategory = () => {
    setCategoryOpen(!categoryOpen); // Function to toggle the category sublist state
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
            sx={{ mr: 2}}
            onClick={toggleDrawer} // Call toggleDrawer function on menu icon click
          >
            <MenuIcon />
          </IconButton>
          </Tooltip>
          <img src={Logo} alt="logo" style={{ width: 'auto', height: '60px', marginRight: '10px'}} />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Care Charity
          </Typography>
          <Tooltip title="Mail">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2}}
          >
            <Mail />
          </IconButton>
          </Tooltip>

          <Tooltip title="Likes">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2}}
          >
            <FavoriteBorder />
          </IconButton>
          </Tooltip>

          <Tooltip title="Profile">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, ml: 2}}
          >
            <AccountCircle />
          </IconButton>
          </Tooltip>

        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          width: 250,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 250,
          },
        }}
      >
        <List>
          <ListItem button onClick={toggleDrawer}>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <Divider />
          <ListItem button onClick={toggleDrawer}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={toggleCategory}>
            <ListItemIcon>
              <Category />
            </ListItemIcon>
            <ListItemText primary="Choose a Category" />
            {categoryOpen ? <ExpandLess /> : <ExpandMore />} {/* Render the expand icon based on sublist state */}
          </ListItem>
          <Collapse in={categoryOpen} 
          timeout="auto" unmountOnExit   sx={{  marginLeft: '20px',}}>
            <List component="div" disablePadding>
              <ListItem button onClick={toggleDrawer}>
                <ListItemIcon>
                  <Checkroom />
                </ListItemIcon>
                <ListItemText primary="Clothes" />
              </ListItem>
              <ListItem button onClick={toggleDrawer}>
                <ListItemIcon>
                  <Toys />
                </ListItemIcon>
              <ListItemText primary="Toys" />
              </ListItem>
              <ListItem button onClick={toggleDrawer}>
                <ListItemIcon>
                  <MenuBook />
                </ListItemIcon>
              <ListItemText primary="School Book" />
              </ListItem>
              <ListItem button onClick={toggleDrawer}>
                <ListItemIcon>
                  <Edit />
                </ListItemIcon>
              <ListItemText primary="School Stationary" />
              </ListItem>
              <ListItem button onClick={toggleDrawer}>
                <ListItemIcon>
                  <Fastfood />
                </ListItemIcon>
              <ListItemText primary="Food" />
              </ListItem>
              <ListItem button onClick={toggleDrawer}>
                <ListItemIcon>
                  <Vaccines />
                </ListItemIcon>
              <ListItemText primary="Medical Supplies" />
              </ListItem>
              <ListItem button onClick={toggleDrawer}>
                <ListItemIcon>
                  <Bloodtype />
                </ListItemIcon>
              <ListItemText primary="Blood Donations" />
              </ListItem>
              <ListItem button onClick={toggleDrawer}>
                <ListItemIcon>
                  <School />
                </ListItemIcon>
              <ListItemText primary="Teaching" />
              </ListItem>
              <ListItem button onClick={toggleDrawer}>
                <ListItemIcon>
                  <Masks />
                </ListItemIcon>
              <ListItemText primary="Medical Cases" />
              </ListItem>
              
            </List>
          </Collapse>
          <ListItem button onClick={toggleDrawer}>
            <ListItemIcon>
              <AccessTime />
            </ListItemIcon>
            <ListItemText primary="Track Order" />
          </ListItem>
          <ListItem button onClick={toggleDrawer}>
            <ListItemIcon>
              <Groups />
            </ListItemIcon>
            <ListItemText primary="View Organizations" />
          </ListItem>
        </List>
      </Drawer>

      <Outlet />
    </div>
  );
};

export default Root;
