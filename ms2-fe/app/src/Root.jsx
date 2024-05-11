import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, Tooltip, Dialog, DialogTitle} from '@mui/material';
import { AccessTime, AccountCircle, Bloodtype, Category, Checkroom, Edit, EventNote, ExpandLess, ExpandMore, Fastfood, Groups, Home, Mail, Masks, MenuBook, School, Toys, Vaccines,FavoriteBorder } from '@mui/icons-material';
import Logo from './Logo_Main.jpg';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'; //el garaz el beyr2os
import { Link } from 'react-router-dom';





const Root = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [showSchoolSuppliesSelect, setShowSchoolSuppliesSelect] = useState(false); // State to manage the visibility of the school supplies select component
  const [selectedSchoolSupply, setSelectedSchoolSupply] = useState(""); // State to store the selected school supply
  const [showClothesTextboxes, setShowClothesTextboxes] = useState(false);
  const [showSelect, setShowSelect] = useState(false);
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [season, setSeason] = useState('');
  const [material, setMaterial] = useState('');
  const [type, setType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [quantity, setQuantity] = useState(''); // Add quantity state


  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleCategory = () => {
    setCategoryOpen(!categoryOpen);
  };


    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const [open, setOpen] = useState(false);
    const [posts, setPosts] = useState([
      { id: 1, author: 'Saif Ahmed', content: 'sent a request to donate 2 T-shirts' },
      { id: 2, author: 'Ali Hani', content: 'sent a request to donate 5 pairs of shoes' },
      { id: 3, author: 'Jane Smith', content: 'sent a request to donate 10 blankets' },
      { id: 4, author: 'Alice Johnson', content: 'sent a request to donate 3 bags of rice' },
    ]);

    const handleApprove = (postId) => {
      // Implement approve logic here
    };
  
    const handleReject = (postId) => {
      // Implement reject logic here
    };
  
    const handleViewDetails = (postId) => {
      // Implement view details logic here
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
              onClick={toggleDrawer} // Call toggleDrawer function on menu icon click
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
          <img src={Logo} alt="logo" style={{ width: 'auto', height: '60px', marginRight: '10px' }} />

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
              onClick={handleClickOpen}
            >
              <Mail />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Notifications</DialogTitle>
              <Divider />
              <Box p={2}>
                {posts.map((post, index) => (
                  <div key={post.id}>
                    <Box>
                      <p>{post.author} {post.content}</p>
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mt={2} sx={{ width: '100%' }}>
                      <Box>
                        <Button variant="outlined" color="primary" onClick={() => handleApprove(post.id)}>
                          Approve
                        </Button>
                        <Button variant="outlined" color="secondary" onClick={() => handleReject(post.id)}>
                          Reject
                        </Button>
                      </Box>
                      <Button variant="outlined" onClick={() => handleViewDetails(post.id)}>
                        View Details
                      </Button>
                    </Box>
                    <br/>
                    {index !== posts.length - 1 && <Divider />} {/* Add divider if not the last post */}
                  </div>
                ))}
              </Box>

            </Dialog>
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
            component={Link} to="/account"
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
          <ListItem button  component={Link} to="/account" onClick={toggleDrawer}>
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
          <ListItem button  component={Link} to="/DonatedPosts" onClick={toggleDrawer}>
            <ListItemIcon>
              <VolunteerActivismIcon />
            </ListItemIcon>
            <ListItemText primary="Donated Posts" />
          </ListItem>
          <ListItem button  component={Link} to="/OrgPosts" onClick={toggleDrawer}>

            <ListItemIcon>
              <DynamicFeedIcon />
            </ListItemIcon>
            <ListItemText primary="My Posts" />
          </ListItem>
        </List>
      </Drawer>

      <Box
  sx={{
    position: 'fixed',
    bottom: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    m: 1,
    zIndex: 1000, // Ensure the button is above other content
  }}
>
  <Tooltip title="New Post" arrow>
    <Fab color="primary" aria-label="add" component={Link} to="/post">
      <AddIcon />
    </Fab>
  </Tooltip>
</Box> 


      <Outlet />
    </div>
  );
};


export default Root;