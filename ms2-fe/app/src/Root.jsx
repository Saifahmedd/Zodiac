import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import {
  AccessTime,
  AccountCircle,
  Bloodtype,
  Category,
  Checkroom,
  Edit,
  EventNote,
  ExpandLess,
  ExpandMore,
  Fastfood,
  Groups,
  Home,
  Mail,
  Masks,
  MenuBook,
  School,
  Toys,
  Vaccines,
  FavoriteBorder,
} from "@mui/icons-material";
import Logo from "./Logo_Main.jpg";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive"; //el garaz el beyr2os
import { Link } from "react-router-dom";

const Root = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [selectedPostDetails, setSelectedPostDetails] = useState(null); // State to store the selected post details

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleCategory = () => {
    setCategoryOpen(!categoryOpen);
  };

  const [open1, setOpen1] = useState(false); //ba3d ma ados 3al Mail
  const [open2, setOpen2] = useState(false); //ba3d ma ados 3ala View Details
  const [open3, setOpen3] = useState(false);


  const [notifications, setNotifications] = useState([
    { id: 1, message: "Saif Ahmed wants to donate 2 T-shirts " , details: "Type: T-Shirt <br/> Age: 8-10 <br/> Gender: Male <br/> Season: Summer <br/> Material: Cotton  <br/> Quantity: 4 "},
    { id: 2, message: "Ali Hani wants to donate 10kg of Rice", details:"Type: Rice <br/> Quantity: 20kg" },
    { id: 3, message: "Jack Sparrow wants to donate 200 Pens ", details:"Type: Pens <br/> Quantity: 500" },
  ]);

  const [selectedNotification, setSelectedNotification] = useState(notifications[0]);
  const [dropOffDateTime, setDropOffDateTime] = useState("");

  const handleClickOpen = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    //close button el mail
    setOpen1(false);
  };

  const handleDetails = (notification) => {
    setSelectedNotification(notification)
    setOpen2(true);
  };

  const handleClose2 = () => {
    //close le view details
    setOpen2(false);
  };

  const handleClose3 = () => {
    //close le view details
    setOpen3(false);
    setOpen1(true);
    setOpen2(false)
  };



  const handleViewDetails = (notification) => {
    setSelectedNotification(notification);
  };

  const handleBack = () => {
    setOpen2(false);
    setOpen1(true);
  };

  const handleAccept = (notificationId) => {
    setOpen3(true); //after accept
    setNotifications(
      notifications.filter((notification) => notification.id !== notificationId)
    );
  };

  const handleReject = (notificationId) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== notificationId)
    );
    setOpen2(false);
    setOpen1(true);
  };

  const handleScheduleDropOff = () => {
    // Implement your logic to schedule drop-off
    console.log(
      "Scheduled drop-off for:",
      selectedNotification,
      "Date and Time:",
      dropOffDateTime
    );
    setOpen3(false);
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
          <img
            src={Logo}
            alt="logo"
            style={{ width: "auto", height: "60px", marginRight: "10px" }}
          />

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

            <Dialog open={open1} onClose={handleClose1}>
              <DialogTitle>Notifications</DialogTitle>
              <DialogContent>
                <div>
                  {notifications.map((notification, index) => (
                    <div key={notification.id}>
                      <p>{notification.message}</p>
                      {index !== notifications.length - 1}
                      <Button onClick={() => handleDetails (notification)}>View Details</Button>
                      <Divider />
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={open2} onClose={handleClose2}>
              <DialogTitle>Details</DialogTitle>
              <DialogContent>
              {selectedNotification && ( 
                  <div>
                   <div dangerouslySetInnerHTML={{ __html: selectedNotification.details }}></div>
                    <Button onClick={handleBack}>Back</Button>
                    <Button onClick={() => handleAccept(selectedNotification)}>
                      Accept
                    </Button>
                    <Button onClick={() => handleReject(selectedNotification.id)}>
                      Reject
                    </Button>
                 </div>
                  )}
              </DialogContent>
            </Dialog>

            <Dialog open={open3} onClose={handleClose3}>
              <DialogTitle>Schedule Drop-off</DialogTitle>
              <DialogContent>
                <Button onClick={handleScheduleDropOff}>
                  Schedule Drop-off
                </Button>
                <Button onClick={handleClose3}>Cancel</Button>
              </DialogContent>
            </Dialog>
          </Tooltip>

          <Tooltip title="Likes">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
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
              component={Link}
              to="/account"
              sx={{ mr: 2, ml: 2 }}
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
          "& .MuiDrawer-paper": {
            width: 250,
          },
        }}
      >
        <List>
          <ListItem
            button
            component={Link}
            to="/account"
            onClick={toggleDrawer}
          >
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
            {categoryOpen ? <ExpandLess /> : <ExpandMore />}{" "}
            {/* Render the expand icon based on sublist state */}
          </ListItem>
          <Collapse
            in={categoryOpen}
            timeout="auto"
            unmountOnExit
            sx={{ marginLeft: "20px" }}
          >
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
          <ListItem
            button
            component={Link}
            to="/DonatedPosts"
            onClick={toggleDrawer}
          >
            <ListItemIcon>
              <VolunteerActivismIcon />
            </ListItemIcon>
            <ListItemText primary="Donated Posts" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/OrgPosts"
            onClick={toggleDrawer}
          >
            <ListItemIcon>
              <DynamicFeedIcon />
            </ListItemIcon>
            <ListItemText primary="My Posts" />
          </ListItem>
        </List>
      </Drawer>

      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          right: 0,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
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
