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
import Grid from '@mui/material/Grid';
import GoogleMapMarkerDialog from './GoogleMap'; // Assuming you have a component for displaying Google Map markers
import Root from './DonorRoot';

import Female1 from './images/medicalcases/Female1.jpg';
import Female2 from './images/medicalcases/Female2.jpg';
import Male1 from './images/medicalcases/Male1.jpg';
import Male2 from './images/medicalcases/Male2.jpg';
import Male3 from './images/medicalcases/Male3.jpg';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DonorMedicalCases = ({ hideSearchFilter , hideRoot}) => {
    const [open, setOpen] = useState(false);
    const [selectedCase, setSelectedCase] = useState(null);
    const [selectedCaseDetails, setSelectedCaseDetails] = useState(null);
    const [dateTimeOpen, setDateTimeOpen] = useState(false);
    const [successAlertOpen, setSuccessAlertOpen] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [selectedDateTime, setSelectedDateTime] = useState('');
    const [filterDialogOpen, setFilterDialogOpen] = useState(false);
    const [filterCriteria, setFilterCriteria] = useState({
        medicalSpecialty: '',
        organization: '',
        area: '',
        governorate: ''
    });

    const [medicalCases, setMedicalCases] = useState([
        ["John Doe", 45, "Male", 70, "google marker url", "123 Main St", "City Hospital", "Cardiology", "Patient complains of chest pain and shortness of breath."],
        ["Jane Smith", 30, "Female", 60, "google marker url", "456 Elm St", "Community Hospital", "Orthopedics", "Patient sustained a fracture in the left arm after a fall."],
        ["Michael Johnson", 60, "Male", 80, "google marker url", "789 Oak St", "Regional Hospital", "Oncology", "Patient diagnosed with stage 3 lung cancer."],
        ["Emily Brown", 20, "Female", 55, "google marker url", "101 Pine St", "University Hospital", "Neurology", "Patient presents with symptoms of migraine headaches."],
        ["David Wilson", 55, "Male", 90, "google marker url", "202 Maple St", "Children's Hospital", "Pediatrics", "Patient brought in for routine checkup and immunization."],
    ]);

    const medicalcasesArray =[
        Male1,
        Female1,
        Male2,
        Female2,
        Male3
    ];

    const [mapDialogOpen, setMapDialogOpen] = useState(false);

    const handleViewLocation = () => {
        setMapDialogOpen(true);
    };

    const handleCloseMapDialog = () => {
        setMapDialogOpen(false);
    };

    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleViewCase = (medicalCase) => {
        setSelectedCase(medicalCase);
        setDateTimeOpen(true);
    };

    const handleViewDetails = (medicalCase) => {
        setSelectedCaseDetails(medicalCase);
        setOpen(true);
    };

    const handleDateTimeClose = () => {
        setDateTimeOpen(false);
    };

    const handleSuccessAlertClose = () => {
        setSuccessAlertOpen(false);
    };

    const handleSubmit = () => {
        // Check if date and time are selected
        if (!selectedDateTime) {
            setDateTimeOpen(true);
            return;
        }

        // If all information is available, close dialogs and show success alert
        setDateTimeOpen(false);
        setSuccessAlertOpen(true);
    };

    const handleDateTimeChange = (event) => {
        setSelectedDateTime(event.target.value);
    };

    const handleFilterClick = () => {
        setFilterDialogOpen(true);
    };

    const handleFilterClose = () => {
        setFilterDialogOpen(false);
    };

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilterCriteria({ ...filterCriteria, [name]: value });
    };

    const filteredCases = medicalCases.filter(medicalCase => {
        const [patientName, , , , , , , medicalSpecialty, , area, governorate] = medicalCase;
        return patientName.toLowerCase().includes(searchInput.toLowerCase()) &&
            medicalSpecialty.includes(filterCriteria.medicalSpecialty) &&
            (filterCriteria.organization === '' || medicalCase[6].toLowerCase().includes(filterCriteria.organization.toLowerCase())) &&
            (filterCriteria.area === '' || area.toLowerCase().includes(filterCriteria.area.toLowerCase())) &&
            (filterCriteria.governorate === '' || governorate.toLowerCase().includes(filterCriteria.governorate.toLowerCase()));
    });

    return (
        <div>
            {!hideRoot && (
            <Root/>
            )}        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '90vh' }}>
            {!hideSearchFilter && (
                <div style={{ alignSelf: 'flex-start', marginLeft: '20px', marginTop: '20px' }}>
                    <TextField id="search" label="Search" variant="outlined" value={searchInput} onChange={handleSearchChange} />
                </div>
            )}
            {!hideSearchFilter && (
                <div style={{ alignSelf: 'flex-end', marginRight: '20px', marginTop: '-60px' }}>
                    <Tooltip title="Filter">
                        <IconButton onClick={handleFilterClick}>
                            <FilterAltIcon />
                        </IconButton>
                    </Tooltip>
                </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', width: '100%', marginTop: '30px' }}>
                {filteredCases.map((medicalCase, index) => (
                    <div key={index} style={{ margin: '10px' }}>
                        <Card sx={{ maxWidth: 250, height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Medical Case"
                                image={medicalcasesArray[index]} // Assuming you have an image for medical cases
                                style={{ width: '100%', height: '250px', objectFit: 'cover' }} // Set a fixed height and object-fit: cover
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {medicalCase[0]} {/* Assuming patient name is the first element */}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Age: {medicalCase[1]}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Gender: {medicalCase[2]}
                                </Typography>
                            </CardContent>
                            <CardActions>
                            <Button onClick={handleViewLocation}>View Location</Button>
                                <Button size="small" onClick={() => handleViewDetails(medicalCase)}>View Details</Button>
                                <Button size="small" onClick={() => handleViewCase(medicalCase)}>Fulfill</Button>
                            </CardActions>
                        </Card>
                    </div>
                ))}
            </div>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Case Details</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {selectedCaseDetails && (
                            <div>
                                <Typography variant="body1">Patient Name: {selectedCaseDetails[0]}</Typography>
                                <Typography variant="body1">Age: {selectedCaseDetails[1]}</Typography>
                                <Typography variant="body1">Gender: {selectedCaseDetails[2]}</Typography>
                                <Typography variant="body1">Weight: {selectedCaseDetails[3]}</Typography>
                                <Typography variant="body1">Address: {selectedCaseDetails[5]}</Typography>
                                <Typography variant="body1">Organization: {selectedCaseDetails[6]}</Typography>
                                <Typography variant="body1">Medical Specialty: {selectedCaseDetails[7]}</Typography>
                                <Typography variant="body1">Case Description: {selectedCaseDetails[8]}</Typography>
                            </div>
                        )}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={dateTimeOpen}
                onClose={handleDateTimeClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Select Date and Time</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{ marginBottom: '10px' }}>
                        Please select a date and time to view the case:
                    </DialogContentText>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                id="datetime-local"
                                label="Viewing Date and Time"
                                type="datetime-local"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={selectedDateTime}
                                onChange={handleDateTimeChange}
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
                        Your viewing appointment has been successfully scheduled.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSuccessAlertClose}>Close</Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={filterDialogOpen}
                onClose={handleFilterClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Filter Medical Cases</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="medicalSpecialty"
                        name="medicalSpecialty"
                        label="Medical Specialty"
                        type="text"
                        fullWidth
                        value={filterCriteria.medicalSpecialty}
                        onChange={handleFilterChange}
                    />
                    <TextField
                        margin="dense"
                        id="organization"
                        name="organization"
                        label="Organization Name"
                        type="text"
                        fullWidth
                        value={filterCriteria.organization}
                        onChange={handleFilterChange}
                    />
                    <TextField
                        margin="dense"
                        id="area"
                        name="area"
                        label="Area"
                        type="text"
                        fullWidth
                        value={filterCriteria.area}
                        onChange={handleFilterChange}
                    />
                    <TextField
                        margin="dense"
                        id="governorate"
                        name="governorate"
                        label="Governorate"
                        type="text"
                        fullWidth
                        value={filterCriteria.governorate}
                        onChange={handleFilterChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleFilterClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleFilterClose} color="primary">
                        Apply Filters
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

export default DonorMedicalCases;
