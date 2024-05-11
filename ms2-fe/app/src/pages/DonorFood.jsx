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
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import TextField from '@mui/material/TextField';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { InputLabel, MenuItem, Select } from '@mui/material';
import FormControl from '@mui/material/FormControl';

import Apples from './food/Apples.jpg';
import Beans from './food/Beans.jpg';
import Bread from './food/Bread.jpg';
import Chicken from './food/Chicken.jpg';
import Rice from './food/Rice.jpg'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DonorFood = ({hideSearchFilter}) => {
    const [open, setOpen] = useState(false);
    const [donationOpen, setDonationOpen] = useState(false);
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [dateTimeOpen, setDateTimeOpen] = useState(false);
    const [successAlertOpen, setSuccessAlertOpen] = useState(false);
    const [selectedFood, setSelectedFood] = useState(null);
    const [food, setFood] = useState([
        ["Apples", "20 kg", "Fruits and Vegetables"],
        ["Rice", "50 kg", "Fresh Meals"],
        ["Canned Beans", "100 cans", "Canned Foods"],
        ["Bread", "200 loaves", "Baked Goods"],
        ["Chicken", "30 kg", "Fresh Meals"]
    ]);

    const images =[
        Apples,
        Rice,
        Beans,
        Bread,
        Chicken
    ];

    const [searchInput, setSearchInput] = useState('');
    const [selectedDetails, setSelectedDetails] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState('All');
    const [filterDialogOpen, setFilterDialogOpen] = useState(false);
    const [missingInfoDialogOpen, setMissingInfoDialogOpen] = useState(false);    
    const [selectedQuantities, setSelectedQuantities] = useState([]);
    const [detailsDialogOpen, setDetailsDialogOpen] = useState(false);
    const [selectedItemDetails, setSelectedItemDetails] = useState(null);

    const handleDetailsOpen = (item) => {
        setSelectedItemDetails(item);
        setDetailsDialogOpen(true);
    };
    
    // Function to handle closing details dialog
    const handleDetailsClose = () => {
        setSelectedItemDetails(null);
        setDetailsDialogOpen(false);
    };

    useState(() => {
        setSelectedQuantities(new Array(food.length).fill(1));
    }, [food]);

    const handleQuantityChange = (index, page) => {
        setSelectedQuantities(prevQuantities => {
            const newQuantities = [...prevQuantities];
            newQuantities[index] = page;
            return newQuantities;
        });
    };

    const handleClickOpen = (item) => {
        setSelectedDetails(item);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setMissingInfoDialogOpen(false);
    };

    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleDonationOpen = (item) => {
        setSelectedFood(item);
        setDonationOpen(true);
    };

    const handleDonationClose = () => {
        setDonationOpen(false);
        setSelectedVehicle(null);
        setSelectedFood(null);
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
        if (!selectedFood || !selectedVehicle || !dateTimeOpen) {
            setMissingInfoDialogOpen(true);
            return;
        }

        const pickupDateTime = document.getElementById('datetime-local').value;
        if (!pickupDateTime) {
            setMissingInfoDialogOpen(true);
            return;
        }

        const updatedFood = food.map((item, index) => {
            if (item === selectedFood) {
                const [quantity, unit] = item[1].split(" ");
                const updatedQuantity = parseInt(quantity) - selectedQuantities[index];
                return [item[0], `${updatedQuantity} ${unit}`, item[2]];
            }
            return item;
        });

        setFood(updatedFood);

        setDonationOpen(false);
        setSelectedVehicle(null);
        setSelectedFood(null);
        setSuccessAlertOpen(true);
    };

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };

    const filteredFood = food.filter(item => {
        const [name, , category] = item;
        return (
            (selectedFilter === 'All' || category === selectedFilter) &&
            name.toLowerCase().includes(searchInput.toLowerCase())
        );
    });

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '90vh' }}>
            {!hideSearchFilter && (
                <div style={{ alignSelf: 'flex-start', marginLeft: '20px', marginTop: '20px' }}>
                    <TextField id="search" label="Search" variant="outlined" value={searchInput} onChange={handleSearchChange} />
                </div>
            )}
            {!hideSearchFilter && (
                <div style={{ alignSelf: 'flex-end', marginRight: '20px', marginTop: '-60px' }}>
                    <Tooltip title="Filter">
                        <IconButton onClick={() => setFilterDialogOpen(true)}>
                            <FilterAltIcon />
                        </IconButton>
                    </Tooltip>
                </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', width: '100%', marginTop: '30px' }}>
                {filteredFood.map((item, index) => (
                    <div key={index} style={{ margin: '10px' }}>
                        <Card sx={{ maxWidth: 250, height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Food"
                                image={images[index]}
                                style={{ width: '100%', height: '250px', objectFit: 'cover' }} // Set a fixed height and object-fit: cover
                            />
                            <CardContent sx={{ height: '180px', overflow: 'auto' }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item[0]}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right' }}>
                                    Quantity available: {item[1]}
                                </Typography>
                                <p>Select Quantity: </p>
                                <Pagination
                                    count={parseInt(item[1].split(" ")[0])} 
                                    color="primary"
                                    onChange={(event, page) => handleQuantityChange(index, page)}
                                />
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => handleDetailsOpen(item)}>Details</Button>
                                <Button size="small" onClick={() => handleDonationOpen(item)}>Donate</Button>
                            </CardActions>
                        </Card>
                    </div>
                ))}
            </div>


            <Dialog
    open={filterDialogOpen}
    onClose={() => setFilterDialogOpen(false)}
    aria-labelledby="filter-dialog-title"
>
    <DialogTitle id="filter-dialog-title">Filter Food</DialogTitle>
    <DialogContent>
        <FormControl fullWidth>
            <InputLabel id="filter-select-label">Filter</InputLabel>
            <Select
                labelId="filter-select-label"
                id="filter-select"
                value={selectedFilter}
                onChange={(event) => handleFilterChange(event.target.value)}
                label="Filter"
            >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Fruits and Vegetables">Fruits and Vegetables</MenuItem>
                <MenuItem value="Canned Foods">Canned Foods</MenuItem>
                <MenuItem value="Fresh Meals">Fresh Meals</MenuItem>
                <MenuItem value="Baked Goods">Baked Goods</MenuItem>
            </Select>
        </FormControl>
    </DialogContent>
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
                open={missingInfoDialogOpen}
                onClose={() => setMissingInfoDialogOpen(false)}
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
    open={detailsDialogOpen}
    onClose={handleDetailsClose}
    aria-labelledby="details-dialog-title"
    aria-describedby="details-dialog-description"
>
    <DialogTitle id="details-dialog-title">Item Details</DialogTitle>
    <DialogContent>
        <DialogContentText id="details-dialog-description">
            {/* Render the details of the selected item */}
            {selectedItemDetails && (
                <div>
                    <Typography variant="h6">{selectedItemDetails[0]}</Typography>
                    <Typography variant="body1">Quantity: {selectedItemDetails[1]}</Typography>
                    <Typography variant="body1">Category: {selectedItemDetails[2]}</Typography>
                    {/* Additional details */}
                    {selectedItemDetails.length > 3 && (
                        <div>
                            <Typography variant="body1">Additional Details:</Typography>
                            {selectedItemDetails.slice(3).map((detail, index) => (
                                <Typography key={index} variant="body2">{detail}</Typography>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </DialogContentText>
    </DialogContent>
    <DialogActions>
        <Button onClick={handleDetailsClose} autoFocus>
            Close
        </Button>
    </DialogActions>
</Dialog>

<Dialog
    open={filterDialogOpen}
    onClose={() => setFilterDialogOpen(false)}
    aria-labelledby="filter-dialog-title"
>
    <DialogTitle id="filter-dialog-title">Filter Food</DialogTitle>
    <DialogContent>
        <FormControl fullWidth>
            <InputLabel id="filter-select-label">Filter</InputLabel>
            <Select
                labelId="filter-select-label"
                id="filter-select"
                value={selectedFilter}
                onChange={(event) => handleFilterChange(event.target.value)}
                label="Filter"
            >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Fruits and Vegetables">Fruits and Vegetables</MenuItem>
                <MenuItem value="Canned Foods">Canned Foods</MenuItem>
                <MenuItem value="Fresh Meals">Fresh Meals</MenuItem>
                <MenuItem value="Baked Goods">Baked Goods</MenuItem>
            </Select>
        </FormControl>
    </DialogContent>
    <DialogActions>
        <Button onClick={() => setSelectedFilter('All')} autoFocus>
            Reset
        </Button>
        <Button onClick={() => setFilterDialogOpen(false)} autoFocus>
            Close
        </Button>
    </DialogActions>
</Dialog>
        </div>
    );
}

export default DonorFood;
