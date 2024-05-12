import React, { useState , useEffect} from "react";
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
  TextField, Snackbar
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


  const [notifications, setNotifications] = useState([
    { id: 1, message: "Saif Ahmed wants to donate 2 T-shirts " , details: "Clothes Post <br/> Type: T-Shirt <br/> Age: 8-10 <br/> Gender: Male <br/> Season: Summer <br/> Material: Cotton  <br/> Quantity: 4 "},
    { id: 2, message: "Saif Ahmed wants to donate 10kg of Rice", details:"Food Post <br/> Type: Rice <br/> Quantity: 20kg" },
    { id: 3, message: "Saif Ahmed wants to donate 200 Pens ", details:"Stationary Supplies Post <br/> Type: Pens <br/> Quantity: 500" },
    { id: 4, message: "Mariam Dahy wants to donate Lego set ", details:"Toys Post <br/> Type: Toys <br/> Quantity: 500" },
    { id: 5, message: "Ali Hani wants to donate 20 Thermometers ", details:"Medical Supplies Post <br/> Type: Thermomters <br/> Quantity: 50" },
    { id: 6, message: "Malak Swar wants to donate Pride and Prejudice book ", details:"School Supplies Post <br/> Type: Books <br/> Author: Jane Austen<br/>Language: English <br/> Edition: Revised<br/> Short Summary: A romantic novel of manners set in early 19th-century England." },
    { id: 7, message: "Shahd Fawzi wants to donate O+ Blood Bag ", details:"Blood Donation Post <br/> Name Of Patient: John Doe <br/> Blood Type: O+<br/>Hospital Name: City Hospital <br/> Hospital Area: Downtown <br/> Governorate: Cairo <br/> Address: 123 Main Street" },
    { id: 8, message: "Saif Ahmed wants to volunteer as a Math Teacher", details:"Teaching Post <br/> Number of students: 30 <br/> Address: 123 Main St<br/> Location:  <br/>Subject: Mathematics" },
    { id: 9, message: "Saif Ahmed wants to fulfill a Medical case ", details:"Medical Cases <br/> Name of Patient: Jane Smith <br/> Age: 30<br/> Gender: Female <br/> Weight: 60<br/> Location: <br/> Address: 456 Elm St <br/> Hospital Name: Community Hospital<br/> Speciallization: Orthopedics <br/> Short case summary: Patient sustained a fracture in the left arm after a fall." },
  ]);

  useEffect(() => {
    const updatedNotifications = notifications.map(notification => {
      let locationLink = "";
      if (notification.id === 8) {
        locationLink = "https://www.google.com/maps/search/?api=1&query=37.7749,-122.4194";
      } else if (notification.id === 9) {
        locationLink = "https://www.google.com.kw/maps/place/Children%E2%80%99s+Cancer+Hospital+Egypt+57357/@30.0229982,31.2352996,17z/data=!3m1!4b1!4m6!3m5!1s0x1458474801f2136f:0x5b7e6b7cbf39dd15!8m2!3d30.0229982!4d31.2378745!16s%2Fg%2F1tr6pks1?entry=ttu";
      }
      return {
        ...notification,
        details: notification.details.replace("Location:", `Location: <a href="${locationLink}" target="_blank">View on Google Maps</a>`)
      };
    });
  
    // Update state with the updated notifications
    setNotifications(updatedNotifications);
  }, []); 

  

    
  const [selectedNotification, setSelectedNotification] = useState(notifications[0]);

  const [open1, setOpen1] = useState(false); //ba3d ma ados 3al Mail
  const [open2, setOpen2] = useState(false); //ba3d ma ados 3ala View Details
  const [open3, setOpen3] = useState(false);


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
    setOpen2(true)
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

  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleScheduleDropOff = (notificationId) => {
    if (!dropOffDateTime) {
      setDateTimeError(true); 
      return;
    }
    setNotifications(
      notifications.filter((notification) => notification.id !== notificationId)
    );
    console.log(
      "Scheduled drop-off for:",
      selectedNotification,
      "Date and Time:",
      dropOffDateTime
    );
    setOpen2(false);
    setOpen3(false);
    setShowSnackbar(true);
  };  

  const [dropOffDateTime, setDropOffDateTime] = useState("");
  const [dateTimeError, setDateTimeError] = useState(false);

  const handleDateTimeChange = (event) => {
    setDropOffDateTime(event.target.value);
    setDateTimeError(false); // Reset error when the input changes
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
              <DialogTitle>Post Details</DialogTitle>
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
            <Snackbar
              open={showSnackbar}
              autoHideDuration={6000} // 6 seconds
              onClose={() => setShowSnackbar(false)}
              message="The donation has been scheduled successfully"
            />
            <Dialog open={open3} onClose={handleClose3}>
              <DialogTitle>Schedule Drop-off</DialogTitle>
              <DialogContent>
                <br/>
                <TextField
                  id="datetime-local"
                  label="Pickup Date and Time"
                  type="datetime-local"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={dateTimeError}
                  helperText={dateTimeError ? "Please enter a valid date and time" : ""}
                  value={dropOffDateTime}
                  onChange={(e) => {
                    setDropOffDateTime(e.target.value);
                    setDateTimeError(false); // Reset the error state when the user types
                  }}
                />
              <br/>
              
              <Button onClick={() => handleScheduleDropOff(selectedNotification.id)}>
                  Submit
                </Button>
                <Button onClick={handleClose3}>Cancel</Button>
              </DialogContent>
            </Dialog>
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
