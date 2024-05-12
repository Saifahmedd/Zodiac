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
import GoogleMapMarkerDialog from './GoogleMap';
import Root from './DonorRoot';

import Art from './images/Teaching/Art.jpg';
import English from './images/Teaching/English.jpg';
import History from './images/Teaching/History.jpg';
import Math from './images/Teaching/Math.jpg';
import Science from './images/Teaching/Science.jpg';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

// Import statements...

const DonorTeaching = ({ hideSearchFilter , hideRoot}) => {
    const [open, setOpen] = useState(false);
    const [selectedTeaching, setSelectedTeaching] = useState(null);
    const [dateTimeOpen, setDateTimeOpen] = useState(false);
    const [successAlertOpen, setSuccessAlertOpen] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [selectedDateTime, setSelectedDateTime] = useState('');
    const [selectedTeachingDetails, setSelectedTeachingDetails] = useState(null);
    const [filterDialogOpen, setFilterDialogOpen] = useState(false);
    const [filterCriteria, setFilterCriteria] = useState({
        subject: '',
        area: '',
        governorate: ''
    });
    const [mapDialogOpen, setMapDialogOpen] = useState(false);

    const handleViewLocation = () => {
        setMapDialogOpen(true);
    };

    const handleCloseMapDialog = () => {
        setMapDialogOpen(false);
    };

    const [teaching, setTeaching] = useState([
        [30, "123 Main St", "https://www.google.com.kw/maps/place/El-Salam+Hospital,+El-Salam+Sharkeya,+Al+Salam+First,+Cairo+Governorate/@30.1665509,31.4150359,17z/data=!3m1!4b1!4m6!3m5!1s0x145810c6afa74605:0xfdaf8765f0166659!8m2!3d30.1665509!4d31.4176108!16s%2Fg%2F1th84drb?entry=ttu", "Mathematics"],
        [25, "456 Elm St", "https://www.google.com.kw/maps/place/Children%E2%80%99s+Cancer+Hospital+Egypt+57357/@30.0229982,31.2352996,17z/data=!3m1!4b1!4m6!3m5!1s0x1458474801f2136f:0x5b7e6b7cbf39dd15!8m2!3d30.0229982!4d31.2378745!16s%2Fg%2F1tr6pks1?entry=ttu", "Science"],
        [20, "789 Oak St", "https://www.google.com.kw/maps/place/Abu+El+Reesh+pediatric+hospital/@30.0295991,31.2320941,17z/data=!3m1!4b1!4m6!3m5!1s0x145847340c2eaedf:0xec8a9d758ecabbf1!8m2!3d30.0295991!4d31.234669!16s%2Fg%2F11h3d6kwlw?entry=ttu", "English"],
        [35, "101 Pine St", "https://www.google.com.kw/maps/place/Kasr+Al-Aini+Hospital/@30.0313402,31.2260537,17z/data=!3m1!4b1!4m6!3m5!1s0x14584732119e2793:0x453fe76754c0176c!8m2!3d30.0313402!4d31.2286286!16s%2Fg%2F11cn6gwfwv?entry=ttu", "History"],
        [40, "202 Maple St", "https://www.google.com.kw/maps/place/Al+Bank+Al+Ahly+Hospital+for+Integrated+Care/@29.9821587,31.3435137,17z/data=!3m1!4b1!4m6!3m5!1s0x145839670cb783d5:0x7392f222f506dc3a!8m2!3d29.9821587!4d31.3460886!16s%2Fg%2F1jkvvyd0_?entry=ttu", "Art"]
    ]);

    const TeachingArray =[
        Art,
        English,
        History,
        Math,
        Science
    ]
    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleDonationOpen = (teaching) => {
        setSelectedTeaching(teaching);
        setDateTimeOpen(true);
    };

    const handleDateTimeClose = () => {
        setDateTimeOpen(false);
    };

    const handleSuccessAlertClose = () => {
        setSuccessAlertOpen(false);
    };

    const handleSubmit = () => {
        if (!selectedDateTime) {
            setOpen(true); // Open the dialog informing the user to select date and time
            return;
        }
    
        // If all information is available, close dialogs and show success alert
        setDateTimeOpen(false);
        setOpen(false);
        setSelectedTeaching(null);
        setSuccessAlertOpen(true);
    };

    const handleDateTimeChange = (event) => {
        setSelectedDateTime(event.target.value);
    };

    const [selectedPatientIndex, setSelectedPatientIndex] = useState(null);

    const handleViewDetails = (teaching, index) => {
        setSelectedTeachingDetails(teaching);
        setSelectedPatientIndex(index);
        setOpen(true);
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

    const filteredTeaching = teaching.filter(teach => {
        const [,, , subject] = teach;
        return subject.toLowerCase().includes(searchInput.toLowerCase()) &&
            (filterCriteria.subject === '' || subject.toLowerCase().includes(filterCriteria.subject.toLowerCase())) &&
            (filterCriteria.area === '' || teach[1].toLowerCase().includes(filterCriteria.area.toLowerCase())) &&
            (filterCriteria.governorate === '' || teach[1].toLowerCase().includes(filterCriteria.governorate.toLowerCase()));
    });

    return (
        <div>
            {!hideRoot && (
            <Root/>
            )}        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '90vh' }}>
            {/* Search input and filter icon */}
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

            {/* Render filtered teaching posts */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', width: '100%', marginTop: '30px' }}>
                {filteredTeaching.map((teach, index) => (
                    <div key={index} style={{ margin: '10px' }}>
                        {/* Card component for each teaching post */}
                        <Card sx={{ maxWidth: 250, height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Teaching"
                                image={TeachingArray[index]} // Assuming you have an image for teaching
                                style={{ width: '100%', height: '250px', objectFit: 'cover' }} // Set a fixed height and object-fit: cover
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {teach[3]} {/* Assuming subject is the fourth element */}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Number of Students: {teach[0]}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Address: {teach[1]}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => handleViewDetails(teach, index)}>Details</Button>
                                <Button size="small" onClick={() => handleDonationOpen(teach)}>Teach</Button>
                            </CardActions>
                        </Card>
                    </div>
                ))}
            </div>

            {/* Dialog for teaching session details */}
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {/* Dialog content */}
                <DialogTitle id="alert-dialog-title">Teaching Session Details</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {selectedTeachingDetails && (
                            <div>
                                <Typography variant="body1">Subject: {selectedTeachingDetails[3]}</Typography>
                                <Typography variant="body1">Number of Students: {selectedTeachingDetails[0]}</Typography>
                                <Typography variant="body1">Address: {selectedTeachingDetails[1]}</Typography>
                                <Typography>
                                Location: 
                                    <a href={teaching[selectedPatientIndex][2]} target="_blank" rel="noopener noreferrer">View Location</a>
                                </Typography>
                            </div>
                        )}
                    </DialogContentText>
                </DialogContent>
                {/* Dialog actions */}
                <DialogActions>
                    <Button onClick={() => setOpen(false)} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Success alert dialog */}
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
                        Your teaching session has been successfully scheduled.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSuccessAlertClose}>Close</Button>
                </DialogActions>
            </Dialog>

            {/* Dialog for selecting date and time */}
            <Dialog
                open={dateTimeOpen}
                onClose={handleDateTimeClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Select Schedule</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{ marginBottom: '10px' }}>
                        Please schedule the teaching session:
                    </DialogContentText>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                id="datetime-local"
                                label="Teaching Date and Time"
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

            {/* Filter dialog */}
            <Dialog
                open={filterDialogOpen}
                onClose={handleFilterClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Filter Teaching Posts</DialogTitle>
                <DialogContent>
                    {/* Text fields for filtering */}
                    <TextField
                        autoFocus
                        margin="dense"
                        id="subject"
                        name="subject"
                        label="Subject"
                        type="text"
                        fullWidth
                        value={filterCriteria.subject}
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
                {/* Dialog actions */}
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

export default DonorTeaching;

