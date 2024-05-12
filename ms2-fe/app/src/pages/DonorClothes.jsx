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
import Pagination from '@mui/material/Pagination';
import Root from "./DonorRoot";

import Shirt from './images/clothes/T-shirt.jpg';
import Coat from './images/clothes/Coat.jpg';
import Dress from './images/clothes/Dress.jpg';
import Jeans from './images/clothes/Jeans.jpg';
import Sweater from './images/clothes/Sweater.jpg';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DonorClothes = ({ hideSearchFilter , hideRoot}) => {
    const [open, setOpen] = useState(false);
    const [donationOpen, setDonationOpen] = useState(false);
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [dateTimeOpen, setDateTimeOpen] = useState(false);
    const [successAlertOpen, setSuccessAlertOpen] = useState(false);
    const [selectedCloth, setSelectedCloth] = useState(null);
    const [clothes, setClothes] = useState([
        ["T-shirt", "Kids", "Male", "Summer", "Cotton", 10],
        ["Coat", "Adult", "Male", "Winter", "Wool", 5],
        ["Dress", "Teen", "Female", "Spring", "Polyester", 8],
        ["Jeans", "Adult", "Female", "Fall", "Denim", 6],
        ["Sweater", "Kids", "Female", "Winter", "Acrylic", 7]
    ]);

    const images =[
        [Shirt],
        [Coat],
        [Dress],
        [Jeans],
        [Sweater]
    ];

    const [searchInput, setSearchInput] = useState('');
    const [selectedQuantities, setSelectedQuantities] = useState([]);
    const [detailOpen, setDetailOpen] = useState(false);
    const [selectedClothDetails, setSelectedClothDetails] = useState(null);
    const [filterDialogOpen, setFilterDialogOpen] = useState(false);
    const [filterCriteria, setFilterCriteria] = useState({
        age: '',
        gender: '',
        season: ''
    });

    useState(() => {
        setSelectedQuantities(new Array(clothes.length).fill(1));
    }, [clothes]);

    const handleDetailOpen = (cloth) => {
        setSelectedClothDetails(cloth);
        setDetailOpen(true);
    };

    const handleDetailClose = () => {
        setDetailOpen(false);
    };

    const handleReset = () => {
        setFilterCriteria({
            age: '',
            gender: '',
            season: ''
        });
    };


    const handleQuantityChange = (index, page) => {
        setSelectedQuantities(prevQuantities => {
            const newQuantities = [...prevQuantities];
            newQuantities[index] = page;
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
        setSelectedCloth(null);
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
            setOpen(true);
            return;
        }
    
        const pickupDateTime = document.getElementById('datetime-local').value;
        if (!pickupDateTime) {
            setOpen(true);
            return;
        }
    
        const updatedClothes = clothes.map((cloth, index) => {
            if (cloth === selectedCloth) {
                const updatedQuantity = cloth[5] - selectedQuantities[index];
                return updatedQuantity > 0 ? [...cloth.slice(0, 5), updatedQuantity] : null;
            }
            return cloth;
        }).filter(Boolean);
    
        setClothes(updatedClothes);
    
        setDonationOpen(false);
        setSelectedVehicle(null);
        setSelectedCloth(null);
        setSuccessAlertOpen(true);
    };

    const handleFilterDialogOpen = () => {
        setFilterDialogOpen(true);
    };

    const handleFilterDialogClose = () => {
        setFilterDialogOpen(false);
    };

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilterCriteria(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const applyFilters = () => {
        setFilterDialogOpen(false);
    };

    const filteredClothes = clothes.filter(cloth => {
        const [name, age, gender, season] = cloth;
        return name.toLowerCase().includes(searchInput.toLowerCase()) &&
               (filterCriteria.age === '' || age.toLowerCase() === filterCriteria.age.toLowerCase()) &&
               (filterCriteria.gender === '' || gender.toLowerCase() === filterCriteria.gender.toLowerCase()) &&
               (filterCriteria.season === '' || season.toLowerCase() === filterCriteria.season.toLowerCase());
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
                        <IconButton onClick={handleFilterDialogOpen}>
                            <FilterAltIcon />
                        </IconButton>
                    </Tooltip>
                </div>
            )}
        <Dialog
            open={filterDialogOpen}
            onClose={handleFilterDialogClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">Filter Clothes</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="age"
                    name="age"
                    label="Age"
                    type="text"
                    fullWidth
                    value={filterCriteria.age}
                    onChange={handleFilterChange}
                />
                <TextField
                    margin="dense"
                    id="gender"
                    name="gender"
                    label="Gender"
                    type="text"
                    fullWidth
                    value={filterCriteria.gender}
                    onChange={handleFilterChange}
                />
                <TextField
                    margin="dense"
                    id="season"
                    name="season"
                    label="Season"
                    type="text"
                    fullWidth
                    value={filterCriteria.season}
                    onChange={handleFilterChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleReset} color="primary">
                    Reset
                </Button>
                <Button onClick={handleFilterDialogClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={applyFilters} color="primary">
                    Done
                </Button>
            </DialogActions>
        </Dialog>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', width: '100%', marginTop: '30px' }}>
                {filteredClothes.map((cloth, index) => (
                    <div key={index} style={{ margin: '10px' }}>
    <Card sx={{ maxWidth: 250, height: '100%' }}>
        <CardMedia
            component="img"
            alt="Clothes"
            image={images[index]}
            style={{ width: '100%', height: '250px', objectFit: 'cover' }} // Set a fixed height and object-fit: cover
        />
        <CardContent sx={{ height: '180px', overflow: 'auto' }}>
            <Typography gutterBottom variant="h5" component="div">
                {cloth[0]}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right' }}>
                Quantity available: {cloth[5]}
            </Typography>
            <p>Select Quantity: </p>
            <Pagination
                count={cloth[5]}
                color="primary"
                onChange={(event, page) => handleQuantityChange(index, page)}
            />
        </CardContent>
        <CardActions>
            <Button size="small" onClick={() => handleDetailOpen(cloth)}>Details</Button>
            <Button size="small" onClick={() => handleDonationOpen(cloth)}>Donate</Button>
        </CardActions>
    </Card>
</div>

                ))}
            </div>
            <Dialog
    open={donationOpen}
    onClose={handleDonationClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
>
    <DialogTitle id="alert-dialog-title">Select Donation Type and Schedule</DialogTitle>
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
            Your donation has been successfully submitted.
        </DialogContentText>
    </DialogContent>
    <DialogActions>
        <Button onClick={handleSuccessAlertClose}>Close</Button>
    </DialogActions>
</Dialog>
<Dialog
    open={detailOpen}
    onClose={handleDetailClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
>
    <DialogTitle id="alert-dialog-title">Clothing Item Details</DialogTitle>
    <DialogContent>
        {selectedClothDetails && (
            <div>
                <Typography variant="h6">{selectedClothDetails[0]}</Typography>
                <Typography>Category: {selectedClothDetails[1]}</Typography>
                <Typography>Gender: {selectedClothDetails[2]}</Typography>
                <Typography>Season: {selectedClothDetails[3]}</Typography>
                <Typography>Material: {selectedClothDetails[4]}</Typography>
                <Typography>Quantity required: {selectedClothDetails[5]}</Typography>
            </div>
        )}
    </DialogContent>
    <DialogActions>
        <Button onClick={handleDetailClose}>Close</Button>
    </DialogActions>
</Dialog>

        </div>
        </div>

    );
}

export default DonorClothes;
