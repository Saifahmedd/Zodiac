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
import ClothesImage from './images/Toys.jpg'; // Assuming you have an image for teaching

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DonorTeaching = () => {
    const [open, setOpen] = useState(false);
    const [selectedTeaching, setSelectedTeaching] = useState(null);
    const [dateTimeOpen, setDateTimeOpen] = useState(false);
    const [successAlertOpen, setSuccessAlertOpen] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [selectedDateTime, setSelectedDateTime] = useState('');
    const [selectedTeachingDetails, setSelectedTeachingDetails] = useState(null);

    const [teaching, setTeaching] = useState([
        [30, "123 Main St", "google marker url", "Mathematics"],
        [25, "456 Elm St", "google marker url", "Science"],
        [20, "789 Oak St", "google marker url", "English"],
        [35, "101 Pine St", "google marker url", "History"],
        [40, "202 Maple St", "google marker url", "Art"]
    ]);

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
        // Check if date and time are selected
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

    const handleViewDetails = (teaching) => {
        setSelectedTeachingDetails(teaching);
        setOpen(true);
    };

    const filteredTeaching = teaching.filter(teach => {
        // Assuming the subject is the fourth element in the array
        const [, , , subject] = teach;
        return subject.toLowerCase().includes(searchInput.toLowerCase());
    });

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '90vh' }}>
            <div style={{ alignSelf: 'flex-start', marginLeft: '20px', marginTop: '20px' }}>
                <TextField id="search" label="Search" variant="outlined" value={searchInput} onChange={handleSearchChange} />
            </div>
            <div style={{ alignSelf: 'flex-end', marginRight: '20px', marginTop: '-60px' }}>
                <IconButton>
                    <FilterAltIcon />
                </IconButton>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', width: '100%', marginTop: '30px' }}>
                {filteredTeaching.map((teach, index) => (
                    <div key={index} style={{ margin: '10px' }}>
                        <Card sx={{ maxWidth: 250, height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Teaching"
                                image={ClothesImage} // Assuming you have an image for teaching
                                style={{ width: '100%', objectFit: 'cover' }}
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
                                <Button size="small" onClick={() => handleDonationOpen(teach)}>Teach</Button>
                                <Button size="small" onClick={() => handleViewDetails(teach)}>Details</Button>
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
                <DialogTitle id="alert-dialog-title">Teaching Session Details</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {selectedTeachingDetails && (
                            <div>
                                <Typography variant="body1">Subject: {selectedTeachingDetails[3]}</Typography>
                                <Typography variant="body1">Number of Students: {selectedTeachingDetails[0]}</Typography>
                                <Typography variant="body1">Address: {selectedTeachingDetails[1]}</Typography>
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
            <Dialog
                open={dateTimeOpen} // Change to dateTimeOpen
                onClose={handleDateTimeClose} // Change to handleDateTimeClose
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
        </div>
    );
}

export default DonorTeaching;
