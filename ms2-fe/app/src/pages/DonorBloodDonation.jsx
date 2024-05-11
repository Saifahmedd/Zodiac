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
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Tooltip from '@mui/material/Tooltip';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import GoogleMapMarkerDialog from './GoogleMap'; // Assuming you have a component for displaying Google Map markers
import Root from './DonorRoot';

import Apositive from './images/bloodDonation/A+.jpg';
import ABpositive from './images/bloodDonation/AB+.jpg';
import Bpositive from './images/bloodDonation/B+.jpg';
import Onegative from './images/bloodDonation/O-.jpg';
import Opositive from './images/bloodDonation/O+.jpg';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DonorBloodDonation = ({ hideSearchFilter , hideRoot}) => {
    const [open, setOpen] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [dateTimeOpen, setDateTimeOpen] = useState(false);
    const [successAlertOpen, setSuccessAlertOpen] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [patients, setPatients] = useState([
        ["John Doe", "O+", "City Hospital", "Downtown", "Cairo", "123 Main Street"],
        ["Jane Smith", "AB+", "Community Hospital", "Suburb", "Alexandria", "456 Elm Street"],
        ["Michael Johnson", "A+", "Regional Hospital", "Rural Area", "Helwan", "789 Oak Street"],
        ["Emily Brown", "B+", "University Hospital", "Urban Area", "Ain Sokhna", "101 Pine Street"],
        ["David Wilson", "O-", "Children's Hospital", "Industrial Area", "Sharkeya", "202 Maple Street"]
    ]);

    const bloodArray =[
        Opositive,
        ABpositive,
        Apositive,
        Bpositive,
        Onegative
    ];

    const [selectedQuantities, setSelectedQuantities] = useState([]);
    const [detailOpen, setDetailOpen] = useState(false);
    const [selectedPatientDetails, setSelectedPatientDetails] = useState(null);
    const [mapDialogOpen, setMapDialogOpen] = useState(false);

    const handleViewLocation = () => {
        setMapDialogOpen(true);
    };

    const handleCloseMapDialog = () => {
        setMapDialogOpen(false);
    };
    useState(() => {
        setSelectedQuantities(new Array(patients.length).fill(1));
    }, [patients]);

    const handleDetailOpen = (patient) => {
        setSelectedPatientDetails(patient);
        setDetailOpen(true);
    };

    const handleDetailClose = () => {
        setDetailOpen(false);
    };

    const handleQuantityChange = (index, page) => {
        setSelectedQuantities(prevQuantities => {
            const newQuantities = [...prevQuantities];
            newQuantities[index] = page;
            return newQuantities;
        });
    };

    const handleResetFilters = () => {
        setFilterOptions({
            hospital: '',
            governorate: '',
            area: ''
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

    const handleDonationOpen = (patient) => {
        setSelectedPatient(patient);
        setDateTimeOpen(true);
    };

    const handleDonationClose = () => {
        setSelectedPatient(null);
        setSelectedVehicle(null);
        setDateTimeOpen(false);
    };

    const handleSelectVehicle = (vehicle) => {
        setSelectedVehicle(vehicle);
    };

    const handleDateTimeClose = () => {
        setDateTimeOpen(false);
    };

    const handleSuccessAlertClose = () => {
        setSuccessAlertOpen(false);
    };

    const handleSubmit = () => {
        let missingInfo = false;

        if (!selectedPatient || !selectedVehicle || !dateTimeOpen) {
            missingInfo = true;
        }

        const pickupDateTime = document.getElementById('datetime-local').value;
        if (!pickupDateTime) {
            missingInfo = true;
        }

        if (missingInfo) {
            setOpen(true);
            return;
        }


        setDateTimeOpen(false);
        setOpen(false);
        setSelectedPatient(null);
        setSelectedVehicle(null);
        setSuccessAlertOpen(true);
    };

    const [filterOpen, setFilterOpen] = useState(false);
const [filterOptions, setFilterOptions] = useState({
    hospital: '',
    governorate: '',
    area: ''
});

const handleFilterOpen = () => {
    setFilterOpen(true);
};

const handleFilterClose = () => {
    setFilterOpen(false);
};

const handleFilterChange = (type, value) => {
    setFilterOptions(prevOptions => ({
        ...prevOptions,
        [type]: value
    }));
};

const filteredPatients = patients.filter(patient => {
    const [name, bloodType, hospital, area, governorate] = patient;
    return (
        name.toLowerCase().includes(searchInput.toLowerCase()) &&
        (filterOptions.hospital === '' || hospital.toLowerCase() === filterOptions.hospital.toLowerCase()) &&
        (filterOptions.governorate === '' || governorate.toLowerCase() === filterOptions.governorate.toLowerCase()) &&
        (filterOptions.area === '' || area.toLowerCase() === filterOptions.area.toLowerCase())
    );
});

    return (
        <div>
        {!hideRoot && (
            <Root/>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '90vh' }}>
            {!hideSearchFilter && (
                <div style={{ alignSelf: 'flex-start', marginLeft: '20px', marginTop: '20px' }}>
                    <TextField id="search" label="Search" variant="outlined" value={searchInput} onChange={handleSearchChange} />
                </div>
            )}
            {!hideSearchFilter && (
                <div style={{ alignSelf: 'flex-end', marginRight: '20px', marginTop: '-60px' }}>
                    <Tooltip title="Filter">
                        <IconButton onClick={handleFilterOpen}>
                            <FilterAltIcon />
                        </IconButton>
                    </Tooltip>
                </div>
            )}
<Dialog
    open={filterOpen}
    onClose={handleFilterClose}
    aria-labelledby="filter-dialog-title"
    aria-describedby="filter-dialog-description"
>
    <DialogTitle id="filter-dialog-title">Filter Donations</DialogTitle>
    <DialogContent>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    id="hospital-filter"
                    label="Hospital"
                    variant="outlined"
                    value={filterOptions.hospital}
                    onChange={(e) => handleFilterChange('hospital', e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="governorate-filter"
                    label="Governorate"
                    variant="outlined"
                    value={filterOptions.governorate}
                    onChange={(e) => handleFilterChange('governorate', e.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="area-filter"
                    label="Area"
                    variant="outlined"
                    value={filterOptions.area}
                    onChange={(e) => handleFilterChange('area', e.target.value)}
                />
            </Grid>
        </Grid>
    </DialogContent>
    <DialogActions>
        <Button onClick={handleResetFilters}>Reset</Button>
        <Button onClick={handleFilterClose} autoFocus>
            Close
        </Button>
    </DialogActions>
</Dialog>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', width: '100%', marginTop: '30px' }}>
                {filteredPatients.map((patient, index) => (
                    <div key={index} style={{ margin: '10px' }}>
                        <Card sx={{ maxWidth: 250, height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Patient"
                                image={bloodArray[index]}
                                style={{ width: '100%', height: '250px', objectFit: 'cover' }} // Set a fixed height and object-fit: cover
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {patient[0]}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Blood Type: {patient[1]}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Hospital: {patient[2]}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={handleViewLocation}>View Location</Button>
                                <Button size="small" onClick={() => handleDetailOpen(patient)}>Details</Button>
                                <Button size="small" onClick={() => handleDonationOpen(patient)}>Donate</Button>
                            </CardActions>
                        </Card>
                    </div>
                ))}
            </div>
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
                        Your blood donation has been successfully scheduled.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSuccessAlertClose}>Close</Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={dateTimeOpen} // Change to dateTimeOpen
                onClose={handleDateTimeClose} // Change to handleDateTimeClose
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Select Donation Type and Schedule</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{ marginBottom: '10px' }}>
                        Please select the type of transportation and schedule the pickup:
                    </DialogContentText>
                    <Grid container spacing={2}>
                        <Grid item>
                            <Button
                                onClick={() => handleSelectVehicle("Car")}
                                style={{ backgroundColor: selectedVehicle === "Car" ? '#007bff' : 'transparent', color: selectedVehicle === "Car" ? '#ffffff' : '#000000' }}
                            >
                                Car
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                onClick={() => handleSelectVehicle("Truck")}
                                style={{ backgroundColor: selectedVehicle === "Truck" ? '#007bff' : 'transparent', color: selectedVehicle === "Truck" ? '#ffffff' : '#000000' }}
                            >
                                Truck
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                onClick={() => handleSelectVehicle("Motorcycle")}
                                style={{ backgroundColor: selectedVehicle === "Motorcycle" ? '#007bff' : 'transparent', color: selectedVehicle === "Motorcycle" ? '#ffffff' : '#000000' }}
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
                    <Button onClick={handleDateTimeClose} autoFocus>
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} autoFocus>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
            {/* Detail Dialog */}
            <Dialog
                open={detailOpen}
                onClose={handleDetailClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Patient Details</DialogTitle>
                <DialogContent>
                    {selectedPatientDetails && (
                        <div>
                            <Typography variant="body1">Name: {selectedPatientDetails[0]}</Typography>
                            <Typography variant="body1">Blood Type: {selectedPatientDetails[1]}</Typography>
                            <Typography variant="body1">Hospital: {selectedPatientDetails[2]}</Typography>
                            <Typography variant="body1">Location: {selectedPatientDetails[3]}, {selectedPatientDetails[4]}</Typography>
                            <Typography variant="body1">Address: {selectedPatientDetails[5]}</Typography>
                        </div>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDetailClose} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={mapDialogOpen}
                onClose={handleCloseMapDialog}
                maxWidth="md" // Set the maximum width of the dialog
                fullWidth // Make the dialog take up the full width of its container
            >
                <DialogTitle>Location</DialogTitle>
                <DialogContent style={{ height: '400px' }}> {/* Adjust the height of the dialog content */}
                    <GoogleMapMarkerDialog style={{ width: '100%', height: '100%' }} /> {/* Set the width and height of the map */}
                </DialogContent>
            </Dialog>
        </div>
        </div>
    );
}

export default DonorBloodDonation;
