import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, Tooltip, Menu, Avatar, MenuItem, ListItemButton } from '@mui/material';
import { AccessTime, AccountCircle, Bloodtype, Category, Checkroom, Edit, EventNote, ExpandLess, ExpandMore, Fastfood, Groups, Home, Mail, Masks, MenuBook, School, Toys, Vaccines, FavoriteBorder } from '@mui/icons-material';
import Logo from 'logo.jpeg';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const settings = ['Change Password', 'Logout'];

const AdminHome = () => {
    const [drawerOpen, setDrawerOpen] = useState(false); // State to manage drawer open/close
    const [categoryOpen, setCategoryOpen] = useState(false); // State to manage category sublist open/close

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen); // Function to toggle the drawer state
    };

    const toggleCategory = () => {
        setCategoryOpen(!categoryOpen); // Function to toggle the category sublist state
    };

    const clothes = [
        // [type of clothes, age, gender, season, material, quantity]
        ["T-shirt", "Kids", "Unisex", "Summer", "Cotton", 100],
        ["Coat", "Adult", "Male", "Winter", "Wool", 50],
        ["Dress", "Teen", "Female", "Spring", "Polyester", 80],
        ["Jeans", "Adult", "Female", "Fall", "Denim", 120],
        ["Sweater", "Kids", "Unisex", "Winter", "Acrylic", 70]
    ];

    const bookSupplies = [
        // [book name, author, language, edition, short summary, link of an image]
        ["To Kill a Mockingbird", "Harper Lee", "English", "First", "A classic novel about racial injustice and moral growth.", "https://example.com/book1.jpg"],
        ["1984", "George Orwell", "English", "Nineteen Eighty-Four", "A dystopian novel about totalitarianism and surveillance.", "https://example.com/book2.jpg"],
        ["The Great Gatsby", "F. Scott Fitzgerald", "English", "Reprint", "A story of the American Dream and its corruption in the Jazz Age.", "https://example.com/book3.jpg"],
        ["Pride and Prejudice", "Jane Austen", "English", "Revised", "A romantic novel of manners set in early 19th-century England.", "https://example.com/book4.jpg"],
        ["Harry Potter and the Philosopher's Stone", "J.K. Rowling", "English", "First", "The first book in the Harry Potter series.", "https://example.com/book5.jpg"]
    ];

    const stationarySupplies = [
        // [type, quantity]
        ["Pens", 500],
        ["Notebooks", 300],
        ["Pencils", 400],
        ["Erasers", 200],
        ["Markers", 150]
    ];

    const toys = [
        // [type of toy, age, gender, category, link of an image, quantity]
        ["LEGO Set", "5-12", "Unisex", "Building", "https://example.com/toy1.jpg", 80],
        ["Barbie Doll", "3-10", "Female", "Dolls", "https://example.com/toy2.jpg", 60],
        ["Remote Control Car", "8-14", "Male", "Vehicles", "https://example.com/toy3.jpg", 40],
        ["Puzzle", "6-10", "Unisex", "Educational", "https://example.com/toy4.jpg", 100],
        ["Action Figure", "5-12", "Male", "Action", "https://example.com/toy5.jpg", 70]
    ];

    const food = [
        // [name, quantity(kg if fruit or vegetables and amount the rest)]
        ["Apples", "20 kg"],
        ["Rice", "50 kg"],
        ["Canned Beans", "100 cans"],
        ["Bread", "200 loaves"],
        ["Chicken", "30 kg"]
    ];

    const medicalSupplies = [
        // [device type, use, image, quantity]
        ["Thermometer", "Measure body temperature", "https://example.com/medical1.jpg", 50],
        ["First Aid Kit", "Provide initial medical treatment", "https://example.com/medical2.jpg", 30],
        ["Blood Pressure Monitor", "Measure blood pressure", "https://example.com/medical3.jpg", 20],
        ["Nebulizer", "Deliver medication as a mist to be inhaled into the lungs", "https://example.com/medical4.jpg", 10],
        ["Stethoscope", "Listen to sounds within the body", "https://example.com/medical5.jpg", 40]
    ];

    const bloodDonation = [
        // [name of patient, blood type, hospital name, hospital area, governorate, address]
        ["John Doe", "O+", "City Hospital", "Downtown", "Example Governorate", "123 Main Street"],
        ["Jane Smith", "AB-", "Community Hospital", "Suburb", "Another Governorate", "456 Elm Street"],
        ["Michael Johnson", "A+", "Regional Hospital", "Rural Area", "Yet Another Governorate", "789 Oak Street"],
        ["Emily Brown", "B+", "University Hospital", "Urban Area", "Different Governorate", "101 Pine Street"],
        ["David Wilson", "O-", "Children's Hospital", "Industrial Area", "New Governorate", "202 Maple Street"]
    ];

    const teaching = [
        // [number of students, address, google marker, subject]
        [30, "123 Main St", "google marker url", "Mathematics"],
        [25, "456 Elm St", "google marker url", "Science"],
        [20, "789 Oak St", "google marker url", "English"],
        [35, "101 Pine St", "google marker url", "History"],
        [40, "202 Maple St", "google marker url", "Art"]
    ];

    const medicalCases = [
        // [patient name, age, gender, weight, google marker, address, organization name, medical specialty, case description]
        ["John Doe", 45, "Male", 70, "google marker url", "123 Main St", "City Hospital", "Cardiology", "Patient complains of chest pain and shortness of breath."],
        ["Jane Smith", 30, "Female", 60, "google marker url", "456 Elm St", "Community Hospital", "Orthopedics", "Patient sustained a fracture in the left arm after a fall."],
        ["Michael Johnson", 60, "Male", 80, "google marker url", "789 Oak St", "Regional Hospital", "Oncology", "Patient diagnosed with stage 3 lung cancer."],
        ["Emily Brown", 20, "Female", 55, "google marker url", "101 Pine St", "University Hospital", "Neurology", "Patient presents with symptoms of migraine headaches."],
        ["David Wilson", 55, "Male", 90, "google marker url", "202 Maple St", "Children's Hospital", "Pediatrics", "Patient brought in for routine checkup and immunization."],
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
                            onClick={toggleDrawer} // Call toggleDrawer function on menu icon click
                        >
                            <MenuIcon />
                        </IconButton>
                    </Tooltip>
                    <img src={Logo} alt="logo" style={{ width: 'auto', height: '60px', marginRight: '10px' }} />

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Care Charity
                    </Typography>
                    <IconButton size="large" component={Link} to="/profile" sx={{ p: 0 }}>
                        <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
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
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
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
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/view">
                            <ListItemText primary="View List of Registrations" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/manage">
                            <ListItemText primary="Manage Requests" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/search">
                            <ListItemText primary="Search Oragnizations" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/delete">
                            <ListItemText primary="Delete Accounts" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>

            <Outlet />
        </div>
    );
};

export default AdminHome;