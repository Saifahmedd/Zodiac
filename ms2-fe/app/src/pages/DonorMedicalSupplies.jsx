import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DonorMedicalSupplies = () => {
    const [open, setOpen] = useState(false);
    const [donationOpen, setDonationOpen] = useState(false);
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [dateTimeOpen, setDateTimeOpen] = useState(false);
    const [successAlertOpen, setSuccessAlertOpen] = useState(false); // State for success alert
    const [selectedSupply, setSelectedSupply] = useState(null); // State to store selected supply for donation
    const [medicalSupplies, setMedicalSupplies] = useState([
        ["Thermometer", "Measure body temperature", "https://example.com/medical1.jpg", 50],
        ["First Aid Kit", "Provide initial medical treatment", "https://example.com/medical2.jpg", 30],
        ["Blood Pressure Monitor", "Measure blood pressure", "https://example.com/medical3.jpg", 20],
        ["Nebulizer", "Deliver medication as a mist to be inhaled into the lungs", "https://example.com/medical4.jpg", 10],
        ["Stethoscope", "Listen to sounds within the body", "https://example.com/medical5.jpg", 40]
    ]);
    const [searchInput, setSearchInput] = useState(''); // Define searchInput state variable

    // Initialization of the selectedQuantities array based on the number of medical supplies items
    const [selectedQuantities, setSelectedQuantities] = useState([]);

    useState(() => {
        setSelectedQuantities(new Array(medicalSupplies.length).fill(1));
    }, [medicalSupplies]);

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

    const handleDonationOpen = (supply) => {
        setSelectedSupply(supply);
        setDonationOpen(true);
    };

    const handleDonationClose = () => {
        setDonationOpen(false);
        setSelectedVehicle(null);
        setSelectedSupply(null); // Reset selected supply
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
        if (!selectedSupply || !selectedVehicle || !dateTimeOpen) {
            setOpen(true); // Open dialog if any essential data is missing
            return;
        }
    
        // Check if pickup date and time are selected
        const pickupDateTime = document.getElementById('datetime-local').value;
        if (!pickupDateTime) {
            setOpen(true); // Open dialog if pickup date/time is missing
            return;
        }
    
        // Calculate new quantities after donation for the selected supply only
        const updatedSupplies = medicalSupplies.map((supply, index) => {
            if (supply === selectedSupply) {
                const updatedQuantity = supply[3] - selectedQuantities[index];
                return updatedQuantity > 0 ? [...supply.slice(0, 3), updatedQuantity] : null; // Return null if quantity is zero or negative
            }
            return supply;
        }).filter(Boolean); // Filter out null values
    
        // Update medical supplies array with new quantities
        setMedicalSupplies(updatedSupplies);
    
        // Reset states
        setDonationOpen(false);
        setSelectedVehicle(null);
        setSelectedSupply(null);
        setSuccessAlertOpen(true);
    };

    const filteredSupplies = medicalSupplies.filter(supply => {
        const [name] = supply;
        return name.toLowerCase().includes(searchInput.toLowerCase());
    });

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '90vh' }}>
            {/* Search and filter */}
            <div style={{ alignSelf: 'flex-start', marginLeft: '20px', marginTop: '20px' }}>
                <TextField id="search" label="Search" variant="outlined" value={searchInput} onChange={handleSearchChange} />
            </div>
            {/* Medical supplies */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', width: '100%', marginTop: '30px' }}>
                {filteredSupplies.map((supply, index) => (
                    <div key={index} style={{ margin: '10px' }}>
                        <Card sx={{ maxWidth: 250, height: '100%' }}> {/* Set max width and fixed height */}
                            <CardMedia
                                component="img"
                                alt="Medical Supply"
                                image={supply[2]}
                                style={{ width: '100%', objectFit: 'cover' }}
                            />
                            <CardContent sx={{ height: '180px', overflow: 'auto' }}> {/* Set fixed height and allow overflow */}
                                <Typography gutterBottom variant="h5" component="div">
                                    {supply[0]}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right' }}>
                                    Quantity available: {supply[3]}
                                </Typography>
                                <p>Select Quantity: </p>
                                <Pagination
                                    count={supply[3]}
                                    color="primary"
                                    onChange={(event, page) => handleQuantityChange(index, page)}
                                />
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={handleClickOpen}>Details</Button>
                                <Button size="small" onClick={() => handleDonationOpen(supply)}>Donate</Button> {/* Pass supply data to handleDonationOpen */}
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

export default DonorMedicalSupplies;
