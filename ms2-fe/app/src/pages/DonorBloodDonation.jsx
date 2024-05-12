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
import { Select,FormControl } from '@mui/material';

import Apositive from './images/bloodDonation/A+.jpg';
import ABpositive from './images/bloodDonation/AB+.jpg';
import Bpositive from './images/bloodDonation/B+.jpg';
import Onegative from './images/bloodDonation/O-.jpg';
import Opositive from './images/bloodDonation/O+.jpg';
import { InputLabel, MenuItem } from '@mui/material';

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
        ["John Doe", "O+", "Salam Hospital", "Downtown", "Cairo", "123 Main Street"],
        ["Jane Smith", "AB+", "57357 Hospital", "Suburb", "Cairo", "456 Elm Street"],
        ["Michael Johnson", "A+", "Abo el Resh Hospital", "Cairo", "Helwan", "789 Oak Street"],
        ["Emily Brown", "B+", "Asr el Ainy Hospital", "Cairo", "Ain Sokhna", "101 Pine Street"],
        ["David Wilson", "O-", "Bank Ahly Hospital", "Cairo", "Sharkeya", "202 Maple Street"]
    ]);

    const bloodArray =[
        Opositive,
        ABpositive,
        Apositive,
        Bpositive,
        Onegative
    ];

    const location =[
        "https://www.google.com.kw/maps/place/El-Salam+Hospital,+El-Salam+Sharkeya,+Al+Salam+First,+Cairo+Governorate/@30.1665509,31.4150359,17z/data=!3m1!4b1!4m6!3m5!1s0x145810c6afa74605:0xfdaf8765f0166659!8m2!3d30.1665509!4d31.4176108!16s%2Fg%2F1th84drb?entry=ttu",
        "https://www.google.com.kw/maps/place/Children%E2%80%99s+Cancer+Hospital+Egypt+57357/@30.0229982,31.2352996,17z/data=!3m1!4b1!4m6!3m5!1s0x1458474801f2136f:0x5b7e6b7cbf39dd15!8m2!3d30.0229982!4d31.2378745!16s%2Fg%2F1tr6pks1?entry=ttu",
        "https://www.google.com.kw/maps/place/Abu+El+Reesh+pediatric+hospital/@30.0295991,31.2320941,17z/data=!3m1!4b1!4m6!3m5!1s0x145847340c2eaedf:0xec8a9d758ecabbf1!8m2!3d30.0295991!4d31.234669!16s%2Fg%2F11h3d6kwlw?entry=ttu",
        "https://www.google.com.kw/maps/place/Kasr+Al-Aini+Hospital/@30.0313402,31.2260537,17z/data=!3m1!4b1!4m6!3m5!1s0x14584732119e2793:0x453fe76754c0176c!8m2!3d30.0313402!4d31.2286286!16s%2Fg%2F11cn6gwfwv?entry=ttu",
        "https://www.google.com.kw/maps/place/Al+Bank+Al+Ahly+Hospital+for+Integrated+Care/@29.9821587,31.3435137,17z/data=!3m1!4b1!4m6!3m5!1s0x145839670cb783d5:0x7392f222f506dc3a!8m2!3d29.9821587!4d31.3460886!16s%2Fg%2F1jkvvyd0_?entry=ttu"
    ];

    const [selectedQuantities, setSelectedQuantities] = useState([]);
    const [detailOpen, setDetailOpen] = useState(false);
    const [selectedPatientDetails, setSelectedPatientDetails] = useState(null);
    const [mapDialogOpen, setMapDialogOpen] = useState(false);
    const [selectedPatientIndex, setSelectedPatientIndex] = useState(null);

    const handleViewLocation = () => {
        setMapDialogOpen(true);
    };

    const handleCloseMapDialog = () => {
        setMapDialogOpen(false);
    };
    useState(() => {
        setSelectedQuantities(new Array(patients.length).fill(1));
    }, [patients]);

    const handleDetailOpen = (patient, index) => {
        setSelectedPatientDetails(patient);
        setSelectedPatientIndex(index);
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
                <FormControl fullWidth variant="outlined">
                    <InputLabel id="hospital-filter-label">Hospital</InputLabel>
                    <Select
                        labelId="hospital-filter-label"
                        id="hospital-filter"
                        value={filterOptions.hospital}
                        onChange={(e) => handleFilterChange('hospital', e.target.value)}
                        label="Hospital"
                    >
                        <MenuItem value="">All</MenuItem>
                        {patients.map(patient => patient[2]).filter((value, index, self) => self.indexOf(value) === index).map((hospital, index) => (
                            <MenuItem key={index} value={hospital}>{hospital}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                    <InputLabel id="governorate-filter-label">Governorate</InputLabel>
                    <Select
                        labelId="governorate-filter-label"
                        id="governorate-filter"
                        value={filterOptions.governorate}
                        onChange={(e) => handleFilterChange('governorate', e.target.value)}
                        label="Governorate"
                    >
                        <MenuItem value="">All</MenuItem>
                        {patients.map(patient => patient[4]).filter((value, index, self) => self.indexOf(value) === index).map((governorate, index) => (
                            <MenuItem key={index} value={governorate}>{governorate}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                    <InputLabel id="area-filter-label">Area</InputLabel>
                    <Select
                        labelId="area-filter-label"
                        id="area-filter"
                        value={filterOptions.area}
                        onChange={(e) => handleFilterChange('area', e.target.value)}
                        label="Area"
                    >
                        <MenuItem value="">All</MenuItem>
                        {patients.map(patient => patient[3]).filter((value, index, self) => self.indexOf(value) === index).map((area, index) => (
                            <MenuItem key={index} value={area}>{area}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
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
                                <Button size="small" onClick={() => handleDetailOpen(patient, index)}>Details</Button>
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
                            <Typography variant="body1">Address: {selectedPatientDetails[5]}</Typography>
                            <Typography>
                                Location: 
                                <a href={location[selectedPatientIndex]} target="_blank" rel="noopener noreferrer">View Location</a>
                            </Typography>
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