import React, { useState } from 'react';
import { Outlet , Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, Tooltip, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, Badge } from '@mui/material';
import { AccessTime, AccountCircle, Bloodtype, Category, Checkroom, Edit, EventNote, ExpandLess, ExpandMore, Fastfood, Groups, Home, Mail, Masks, MenuBook, School, Toys, Vaccines,FavoriteBorder } from '@mui/icons-material';
import Logo from './images/logo_Main.png';
import MailIcon from '@mui/icons-material/Mail';

const Root = () => {
  const [drawerOpen, setDrawerOpen] = useState(false); // State to manage drawer open/close
  const [categoryOpen, setCategoryOpen] = useState(false); // State to manage category sublist open/close

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen); // Function to toggle the drawer state
  };

  const toggleCategory = () => {
    setCategoryOpen(!categoryOpen); // Function to toggle the category sublist state
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openDialog, setOpenDialog] = useState(false);

  const handleClick2 = () => {
    setOpenDialog(true);
  };

  const handleClose2 = () => {
    setOpenDialog(false);
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
    sx={{ mr: 2 }}
    onClick={handleClick2}
  >
    <Badge color="secondary" variant="dot">
      <MailIcon />
    </Badge>
  </IconButton>
</Tooltip>


          <Dialog
  open={openDialog}
  onClose={handleClose2}
  fullWidth={true}
  maxWidth="md"
  sx={{
    '& .MuiDialog-paper': {
      maxWidth: '700px', // Adjust the maximum width as needed
      minHeight: '500px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between', // Aligns content to the bottom
    },
  }}
>
  <DialogTitle>Mail</DialogTitle>
  <DialogContent>
    <Typography variant="body1">
      The donation is successfully made.
    </Typography>
  </DialogContent>
  <DialogActions sx={{ m: 2 }}>
    <Button onClick={handleClose2} color="primary">
      Close
    </Button>
  </DialogActions>
</Dialog>



          <Tooltip title="Profile">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, ml: 2}}
              onClick={handleClick}
            >
              <AccountCircle  />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/profile" onClick={handleClose}>Profile</MenuItem>
            <MenuItem component={Link} to="/logout" onClick={handleClose}>Logout</MenuItem>
          </Menu>
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
          <ListItem button onClick={toggleDrawer} component={Link} to="/profile">
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <Divider />
          <ListItem button onClick={toggleDrawer} component={Link} to="/home">
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
              <ListItem button onClick={toggleDrawer} component={Link} to="/clothes">
                <ListItemIcon>
                  <Checkroom />
                </ListItemIcon>
                <ListItemText primary="Clothes" />
              </ListItem>
              <ListItem button onClick={toggleDrawer} component={Link} to="/toys">
                <ListItemIcon>
                  <Toys />
                </ListItemIcon>
                <ListItemText primary="Toys" />
              </ListItem>
              <ListItem button onClick={toggleDrawer} component={Link} to="/schoolsupplies">
                <ListItemIcon>
                  <MenuBook />
                </ListItemIcon>
                <ListItemText primary="School Supplies" />
              </ListItem>
              <ListItem button onClick={toggleDrawer} component={Link} to="/food">
                <ListItemIcon>
                  <Fastfood />
                </ListItemIcon>
                <ListItemText primary="Food" />
              </ListItem>
              <ListItem button onClick={toggleDrawer} component={Link} to="/medicalsupplies">
                <ListItemIcon>
                  <Vaccines />
                </ListItemIcon>
                <ListItemText primary="Medical Supplies" />
              </ListItem>
              <ListItem button onClick={toggleDrawer} component={Link} to="/blooddonation">
                <ListItemIcon>
                  <Bloodtype />
                </ListItemIcon>
                <ListItemText primary="Blood Donations" />
              </ListItem>
              <ListItem button onClick={toggleDrawer} component={Link} to="/teaching">
                <ListItemIcon>
                  <School />
                </ListItemIcon>
                <ListItemText primary="Teaching" />
              </ListItem>
              <ListItem button onClick={toggleDrawer} component={Link} to="/medicalcases">
                <ListItemIcon>
                  <Masks />
                </ListItemIcon>
                <ListItemText primary="Medical Cases" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem button onClick={toggleDrawer} component={Link} to="/trackingorder">
            <ListItemIcon>
              <AccessTime />
            </ListItemIcon>
            <ListItemText primary="Track Order" />
          </ListItem>
          <ListItem button onClick={toggleDrawer} component={Link} to="/viewOrg">
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
