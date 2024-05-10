import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FoodImage from './images/Food.jpg'; // Update with appropriate image path
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

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DonorFood = () => {
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
    const [searchInput, setSearchInput] = useState('');
    const [selectedDetails, setSelectedDetails] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState('All');

    const [selectedQuantities, setSelectedQuantities] = useState([]);

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
            setOpen(true);
            return;
        }

        const pickupDateTime = document.getElementById('datetime-local').value;
        if (!pickupDateTime) {
            setOpen(true);
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
            <div style={{ alignSelf: 'flex-start', marginLeft: '20px', marginTop: '20px' }}>
                <TextField id="search" label="Search" variant="outlined" value={searchInput} onChange={handleSearchChange} />
            </div>
            <div style={{ alignSelf: 'flex-end', marginRight: '20px', marginTop: '-60px' }}>
                <IconButton onClick={() => setOpen(true)}>
                    <FilterAltIcon />
                </IconButton>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', width: '100%', marginTop: '30px' }}>
                {filteredFood.map((item, index) => (
                    <div key={index} style={{ margin: '10px' }}>
                        <Card sx={{ maxWidth: 250, height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Food"
                                image={FoodImage}
                                style={{ width: '100%', objectFit: 'cover' }}
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
                                <Button size="small" onClick={() => handleClickOpen(item)}>Details</Button>
                                <Button size="small" onClick={() => handleDonationOpen(item)}>Donate</Button>
                            </CardActions>
                        </Card>
                    </div>
                ))}
            </div>

            <Dialog
    open={open}
    onClose={() => setOpen(false)}
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

        </div>
    );
}

export default DonorFood;
