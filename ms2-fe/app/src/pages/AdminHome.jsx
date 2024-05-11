import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HomeIcon from '@mui/icons-material/Home';
import ViewListIcon from '@mui/icons-material/ViewList';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import Logo from 'logo.jpeg';

const settings = ['Change Password', 'Logout'];

const AdminHome = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [showMessage, setShowMessage] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleNotificationClick = (notification) => {
        setShowMessage(notification);
    };

    const handleCloseMessage = () => {
        setShowMessage(null);
    };

    // Hard-coded messages for demonstration
    const notifications = [
        { message: "Care hospital", description: "A new patient has applied" },
        { message: "Reminder: Charity event tomorrow.", description: "A reminder about the upcoming charity event at growth orphnage" },
        { message: "Account verification pending.", description: "There are accounts pending verification." },
        { message: "Canada electricty ", description: "new monthly bill is recieved " }
    ];

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
                    <img src={Logo} alt="logo" style={{ width: 'auto', height: '60px', marginRight: '10px' }} />

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Care Charity
                    </Typography>
                    <IconButton size="large" component={Link} to="/profile" sx={{ p: 0 }}>
                        <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
                    </IconButton>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton size="large" onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <ArrowDropDownIcon />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} component={Link} to="/changepassword" onClick={handleCloseUserMenu}>
                                    {setting}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>

            <div style={{ backgroundColor: '#f0f0f0', padding: '5px', textAlign: 'center' }}>
                <Typography variant="h6" style={{ marginBottom: '10px' }}>Notifications</Typography>
                {notifications.map((notification, index) => (
                    <div key={index} style={{ margin: '5px', padding: '5px', border: '1px solid #ccc', borderRadius: '5px', display: 'inline-block', cursor: 'pointer' }} onClick={() => handleNotificationClick(notification)}>
                        {notification.message}
                    </div>
                ))}
                {showMessage && (
                    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', padding: '20px', borderRadius: '5px', boxShadow: '0px 0px 10px 2px rgba(0,0,0,0.1)', zIndex: 9999 }}>
                        <Typography variant="h6">{showMessage.message}</Typography>
                        <Typography variant="body1" style={{ marginTop: '10px' }}>{showMessage.description}</Typography>
                        <IconButton style={{ position: 'absolute', top: '5px', right: '5px' }} onClick={handleCloseMessage}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                )}
            </div>

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
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/" sx={{ color: 'inherit' }}>
                            <HomeIcon />
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/view" sx={{ color: 'inherit' }}>
                            <ViewListIcon />
                            <ListItemText primary="View Organization Registrations" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/manage" sx={{ color: 'inherit' }}>
                            <SettingsIcon />
                            <ListItemText primary="Manage Organization Requests" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/donormanage" sx={{ color: 'inherit' }}>
                            <SettingsIcon />
                            <ListItemText primary="Manage Donor Requests" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/search" sx={{ color: 'inherit' }}>
                            <SearchIcon />
                            <ListItemText primary="Search Organizations" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/delete" sx={{ color: 'inherit' }}>
                            <DeleteIcon />
                            <ListItemText primary="Delete Organization Accounts" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/donordelete" sx={{ color: 'inherit' }}>
                            <DeleteIcon />
                            <ListItemText primary="Delete Donor Accounts" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>

            <Outlet />
        </div>
    );
};

export default AdminHome;
