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
import {Select, MenuItem, FormControl, InputLabel } from '@mui/material';


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
        ["John Doe", 45, "Male", 70, "https://www.google.com.kw/maps/place/El-Salam+Hospital,+El-Salam+Sharkeya,+Al+Salam+First,+Cairo+Governorate/@30.1665509,31.4150359,17z/data=!3m1!4b1!4m6!3m5!1s0x145810c6afa74605:0xfdaf8765f0166659!8m2!3d30.1665509!4d31.4176108!16s%2Fg%2F1th84drb?entry=ttu", "Tagamo3", "City Hospital", "Cardiology", "Patient complains of chest pain and shortness of breath.", "Cairo"],
        ["Jane Smith", 30, "Female", 60, "https://www.google.com.kw/maps/place/Children%E2%80%99s+Cancer+Hospital+Egypt+57357/@30.0229982,31.2352996,17z/data=!3m1!4b1!4m6!3m5!1s0x1458474801f2136f:0x5b7e6b7cbf39dd15!8m2!3d30.0229982!4d31.2378745!16s%2Fg%2F1tr6pks1?entry=ttu", "Maadi", "Community Hospital", "Orthopedics", "Patient sustained a fracture in the left arm after a fall.", "Luxor"],
        ["Michael Johnson", 60, "Male", 80, "https://www.google.com.kw/maps/place/Abu+El+Reesh+pediatric+hospital/@30.0295991,31.2320941,17z/data=!3m1!4b1!4m6!3m5!1s0x145847340c2eaedf:0xec8a9d758ecabbf1!8m2!3d30.0295991!4d31.234669!16s%2Fg%2F11h3d6kwlw?entry=ttu", "Nasr", "Regional Hospital", "Oncology", "Patient diagnosed with stage 3 lung cancer.", "Cairo"],
        ["Emily Brown", 20, "Female", 55, "https://www.google.com.kw/maps/place/Kasr+Al-Aini+Hospital/@30.0313402,31.2260537,17z/data=!3m1!4b1!4m6!3m5!1s0x14584732119e2793:0x453fe76754c0176c!8m2!3d30.0313402!4d31.2286286!16s%2Fg%2F11cn6gwfwv?entry=ttu", "Helwan", "University Hospital", "Neurology", "Patient presents with symptoms of migraine headaches.", "Alexandria"],
        ["David Wilson", 55, "Male", 90, "https://www.google.com.kw/maps/place/Al+Bank+Al+Ahly+Hospital+for+Integrated+Care/@29.9821587,31.3435137,17z/data=!3m1!4b1!4m6!3m5!1s0x145839670cb783d5:0x7392f222f506dc3a!8m2!3d29.9821587!4d31.3460886!16s%2Fg%2F1jkvvyd0_?entry=ttu", "Saqr", "Children's Hospital", "Pediatrics", "Patient brought in for routine checkup and immunization.", "Sharkeya", ],
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
    const [selectedPatientIndex, setSelectedPatientIndex] = useState(null);
    const handleViewDetails = (medicalCase, index) => {
        setSelectedPatientIndex(index);
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

    const initialFilterCriteria = {
        medicalSpecialty: '',
        organization: '',
        area: '',
        governorate: ''
    };
    
    const resetFilters = () => {
        setFilterCriteria(initialFilterCriteria);
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
                                <Button size="small" onClick={() => handleViewDetails(medicalCase, index)}>View Details</Button>
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
                                <Typography>
                                Location: 
                                    <a href={medicalCases[selectedPatientIndex][4]} target="_blank" rel="noopener noreferrer">View Location</a>
                                </Typography>
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
                <FormControl fullWidth>
                    <InputLabel id="medicalSpecialty-label">Medical Specialty</InputLabel>
                    <Select
                        labelId="medicalSpecialty-label"
                        id="medicalSpecialty"
                        name="medicalSpecialty"
                        value={filterCriteria.medicalSpecialty}
                        onChange={handleFilterChange}
                    >
                        <MenuItem value="Cardiology">Cardiology</MenuItem>
                        <MenuItem value="Orthopedics">Orthopedics</MenuItem>
                        <MenuItem value="Oncology">Oncology</MenuItem>
                        <MenuItem value="Neurology">Neurology</MenuItem>
                        <MenuItem value="Pediatrics">Pediatrics</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="organization-label">Organization Name</InputLabel>
                    <Select
                        labelId="organization-label"
                        id="organization"
                        name="organization"
                        value={filterCriteria.organization}
                        onChange={handleFilterChange}
                    >
                        <MenuItem value="El-Salam Hospital">El-Salam Hospital</MenuItem>
                        <MenuItem value="Community Hospital">Community Hospital</MenuItem>
                        <MenuItem value="Regional Hospital">Regional Hospital</MenuItem>
                        <MenuItem value="University Hospital">University Hospital</MenuItem>
                        <MenuItem value="Children's Hospital">Children's Hospital</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="area-label">Area</InputLabel>
                    <Select
                        labelId="area-label"
                        id="area"
                        name="area"
                        value={filterCriteria.area}
                        onChange={handleFilterChange}
                    >
                        {medicalCases.map((caseItem, index) => (
                            <MenuItem key={index} value={caseItem[5]}>{caseItem[5]}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="governorate-label">Governorate</InputLabel>
                    <Select
                        labelId="governorate-label"
                        id="governorate"
                        name="governorate"
                        value={filterCriteria.governorate}
                        onChange={handleFilterChange}
                    >
                        {medicalCases.map((caseItem, index) => (
                            <MenuItem key={index} value={caseItem[6]}>{caseItem[6]}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={resetFilters} color="secondary">
                    Reset
                </Button>
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
