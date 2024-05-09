import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Clothes from './images/Clothes.jpg';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Tooltip from '@mui/material/Tooltip';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DonorClothes = () => {
    const [open, setOpen] = useState(false);
    const [donationOpen, setDonationOpen] = useState(false);
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [dateTimeOpen, setDateTimeOpen] = useState(false);
    const [successAlertOpen, setSuccessAlertOpen] = useState(false); // State for success alert
    const [selectedCloth, setSelectedCloth] = useState(null); // State to store selected cloth for donation
    const [clothes, setClothes] = useState([
        ["T-shirt", "Kids", "Unisex", "Summer", "Cotton", 10],
        ["Coat", "Adult", "Male", "Winter", "Wool", 5],
        ["Dress", "Teen", "Female", "Spring", "Polyester", 8],
        ["Jeans", "Adult", "Female", "Fall", "Denim", 6],
        ["Sweater", "Kids", "Unisex", "Winter", "Acrylic", 7]
    ]);
    const [searchInput, setSearchInput] = useState(''); // Define searchInput state variable

    // Array of state variables for selected quantities, one for each card
    const [selectedQuantities, setSelectedQuantities] = useState([]);

    // Initialization of the selectedQuantities array based on the number of clothes items
    useState(() => {
        setSelectedQuantities(new Array(clothes.length).fill(1));
    }, [clothes]);

    const handleQuantityChange = (index, page) => {
        setSelectedQuantities(prevQuantities => {
            const newQuantities = [...prevQuantities];
            newQuantities[index] = page; // Update the selected quantity for the specific card
            return newQuantities;
        });
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleDonationOpen = (cloth) => {
        setSelectedCloth(cloth);
        setDonationOpen(true);
    };

    const handleDonationClose = () => {
        setDonationOpen(false);
        setSelectedVehicle(null);
        setSelectedCloth(null); // Reset selected cloth
    };

    const handleSelectVehicle = (vehicle) => {
        setSelectedVehicle(vehicle);
        setDateTimeOpen(true);
    };

    const handleDateTimeClose = () => {
        setDateTimeOpen(false);
    };

    const handleSuccessAlertClose = () => {
        setSuccessAlertOpen(false);
    };

    const handleSubmit = () => {
        if (!selectedCloth || !selectedVehicle || !dateTimeOpen) {
            setOpen(true); // Open dialog if any essential data is missing
            return;
        }
    
        // Check if pickup date and time are selected
        const pickupDateTime = document.getElementById('datetime-local').value;
        if (!pickupDateTime) {
            setOpen(true); // Open dialog if pickup date/time is missing
            return;
        }
    
        // Calculate new quantities after donation for the selected cloth only
        const updatedClothes = clothes.map((cloth, index) => {
            if (cloth === selectedCloth) {
                const updatedQuantity = cloth[5] - selectedQuantities[index];
                return updatedQuantity > 0 ? [...cloth.slice(0, 5), updatedQuantity] : null; // Return null if quantity is zero or negative
            }
            return cloth;
        }).filter(Boolean); // Filter out null values
    
        // Update clothes array with new quantities
        setClothes(updatedClothes);
    
        // Reset states
        setDonationOpen(false);
        setSelectedVehicle(null);
        setSelectedCloth(null);
        setSuccessAlertOpen(true);
    };
    

    const filteredClothes = clothes.filter(cloth => {
        const [name] = cloth;
        return name.toLowerCase().includes(searchInput.toLowerCase());
    });

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '90vh' }}>
            {/* Search and filter */}
            <div style={{ alignSelf: 'flex-start', marginLeft: '20px', marginTop: '20px' }}>
                <TextField id="search" label="Search" variant="outlined" value={searchInput} onChange={handleSearchChange} />
            </div>
            <div style={{ alignSelf: 'flex-end', marginRight: '20px', marginTop: '-60px' }}>
                <IconButton>
                    <FilterAltIcon />
                </IconButton>
            </div>
            {/* Clothing items */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', width: '100%', marginTop: '30px' }}>
                {filteredClothes.map((cloth, index) => (
                    <div key={index} style={{ margin: '10px' }}>
                        <Card sx={{ maxWidth: 250, height: '100%' }}> {/* Set max width and fixed height */}
                            <CardMedia
                                component="img"
                                alt="Clothes"
                                image={Clothes}
                                style={{ width: '100%', objectFit: 'cover' }}
                            />
                            <CardContent sx={{ height: '180px', overflow: 'auto' }}> {/* Set fixed height and allow overflow */}
                                <Typography gutterBottom variant="h5" component="div">
                                    {cloth[0]}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right' }}>
                                    Quantity required: {cloth[5]}
                                </Typography>
                                <p>Select Quantity: </p>
                                <Pagination
                                    count={cloth[5]}
                                    color="primary"
                                    onChange={(event, page) => handleQuantityChange(index, page)}
                                    // Set the onChange event handler
                                />
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={handleClickOpen}>Details</Button>
                                <Button size="small" onClick={() => handleDonationOpen(cloth)}>Donate</Button> {/* Pass cloth data to handleDonationOpen */}
                                <Tooltip title="Favorite">
                                    <IconButton
                                        size="large"
                                        edge="start"
                                        color="inherit"
                                        aria-label="menu"
                                        sx={{ mr: 2 }}
                                    >
                                        <FavoriteBorderIcon />
                                    </IconButton>
                                </Tooltip>
                            </CardActions>
                        </Card>
                    </div>
                ))}
            </div>
            {/* Donation Selection Paper */}
            <Dialog
                open={donationOpen}
                onClose={handleDonationClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Select Donation Type and Schedule"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{ marginBottom: '10px' }}>
                        Please select the type of vehicle you want to donate and schedule the pickup:
                    </DialogContentText>
                    <Grid container spacing={2}>
                        <Grid item>
                            <Button
                                onClick={() => handleSelectVehicle("Car")}
                                className="paper"
                                style={{
                                    padding: '10px',
                                    textAlign: 'center',
                                    marginBottom: '10px',
                                    color: selectedVehicle === "Car" ? '#ffffff' : '#000000',
                                    backgroundColor: selectedVehicle === "Car" ? '#007bff' : 'transparent',
                                }}
                            >
                                Car
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                onClick={() => handleSelectVehicle("Truck")}
                                className="paper"
                                style={{
                                    padding: '10px',
                                    textAlign: 'center',
                                    marginBottom: '10px',
                                    color: selectedVehicle === "Truck" ? '#ffffff' : '#000000',
                                    backgroundColor: selectedVehicle === "Truck" ? '#007bff' : 'transparent',
                                }}
                            >
                                Truck
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                onClick={() => handleSelectVehicle("Motorcycle")}
                                className="paper"
                                style={{
                                    padding: '10px',
                                    textAlign: 'center',
                                    marginBottom: '10px',
                                    color: selectedVehicle === "Motorcycle" ? '#ffffff' : '#000000',
                                    backgroundColor: selectedVehicle === "Motorcycle" ? '#007bff' : 'transparent',
                                }}
                            >
                                Motorcycle
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="datetime-local"
                                label="Pickup Date and Time"
                                type="datetime-local"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDonationClose} autoFocus>
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} autoFocus>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Missing Data Alert */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Missing Information</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Please select both the transportation type and the pickup date/time before submitting.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Success Alert */}
            <Dialog
                open={successAlertOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleSuccessAlertClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Success"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Your donation has been successfully submitted.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSuccessAlertClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DonorClothes;
