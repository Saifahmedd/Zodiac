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
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DonorToys = () => {
    const [open, setOpen] = useState(false);
    const [donationOpen, setDonationOpen] = useState(false);
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [dateTimeOpen, setDateTimeOpen] = useState(false);
    const [successAlertOpen, setSuccessAlertOpen] = useState(false);
    const [selectedToy, setSelectedToy] = useState(null);
    const [toys, setToys] = useState([
        ["LEGO Set", "5-12", "Unisex", "Building", "https://example.com/toy1.jpg", 80],
        ["Barbie Doll", "3-10", "Female", "Dolls", "https://example.com/toy2.jpg", 60],
        ["Remote Control Car", "8-14", "Male", "Vehicles", "https://example.com/toy3.jpg", 40],
        ["Puzzle", "6-10", "Unisex", "Educational", "https://example.com/toy4.jpg", 100],
        ["Action Figure", "5-12", "Male", "Action", "https://example.com/toy5.jpg", 70]
    ]);
    const [searchInput, setSearchInput] = useState('');
    const [filterOptions, setFilterOptions] = useState({
        age: '',
        gender: '',
        category: ''
    });
    const [selectedQuantities, setSelectedQuantities] = useState([]);
    const [detailOpen, setDetailOpen] = useState(false);
    const [selectedToyDetails, setSelectedToyDetails] = useState(null);
    const [filterDialogOpen, setFilterDialogOpen] = useState(false);

    useState(() => {
        setSelectedQuantities(new Array(toys.length).fill(1));
    }, [toys]);

    
    const handleDetailOpen = (toy) => {
        setSelectedToyDetails(toy);
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

    const handleClickOpen = () => {
        setFilterDialogOpen(true);
    };

    const handleClose = () => {
        setFilterDialogOpen(false);
    };

    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        setFilterOptions(prevOptions => ({
            ...prevOptions,
            [name]: value
        }));
    };

    const handleDonationOpen = (toy) => {
        setSelectedToy(toy);
        setDonationOpen(true);
    };

    const handleDonationClose = () => {
        setDonationOpen(false);
        setSelectedVehicle(null);
        setSelectedToy(null);
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
        if (!selectedToy || !selectedVehicle || !dateTimeOpen) {
            setOpen(true);
            return;
        }

        const pickupDateTime = document.getElementById('datetime-local').value;
        if (!pickupDateTime) {
            setOpen(true);
            return;
        }

        const updatedToys = toys.map((toy, index) => {
            if (toy === selectedToy) {
                const updatedQuantity = toy[5] - selectedQuantities[index];
                return updatedQuantity > 0 ? [...toy.slice(0, 5), updatedQuantity] : null;
            }
            return toy;
        }).filter(Boolean);

        setToys(updatedToys);

        setDonationOpen(false);
        setSelectedVehicle(null);
        setSelectedToy(null);
        setSuccessAlertOpen(true);
    };

    const filteredToys = toys.filter(toy => {
        const [name, age, gender, category] = toy;
        return (
            name.toLowerCase().includes(searchInput.toLowerCase()) &&
            (filterOptions.age === '' || age.includes(filterOptions.age)) &&
            (filterOptions.gender === '' || gender === filterOptions.gender) &&
            (filterOptions.category === '' || category === filterOptions.category)
        );
    });

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '90vh' }}>
            <div style={{ alignSelf: 'flex-start', marginLeft: '20px', marginTop: '20px' }}>
                <TextField id="search" label="Search" variant="outlined" value={searchInput} onChange={handleSearchChange} />
            </div>
            <div style={{ alignSelf: 'flex-end', marginRight: '20px', marginTop: '-60px' }}>
                <IconButton onClick={handleClickOpen}>
                    <FilterAltIcon />
                </IconButton>
            </div>
            <div>
                <Dialog open={filterDialogOpen} onClose={handleClose}>
                    <DialogTitle>Filter Toys</DialogTitle>
                    <DialogContent>
                        <TextField
                            id="age"
                            select
                            label="Age"
                            variant="outlined"
                            name="age"
                            value={filterOptions.age}
                            onChange={handleFilterChange}
                            style={{ marginRight: '10px', width: '80px' }}
                        >
                            <MenuItem value="">All</MenuItem>
                            <MenuItem value="3-5">3-5</MenuItem>
                            <MenuItem value="6-10">6-10</MenuItem>
                            <MenuItem value="11-14">11-14</MenuItem>
                        </TextField>
                        <TextField
                            id="gender"
                            select
                            label="Gender"
                            variant="outlined"
                            name="gender"
                            value={filterOptions.gender}
                            onChange={handleFilterChange}
                            style={{ marginRight: '10px', width: '100px' }}
                        >
                            <MenuItem value="">All</MenuItem>
                            <MenuItem value="Male">Male</MenuItem>
                            <MenuItem value="Female">Female</MenuItem>
                            <MenuItem value="Unisex">Unisex</MenuItem>
                        </TextField>
                        <TextField
                            id="category"
                            select
                            label="Category"
                            variant="outlined"
                            name="category"
                            value={filterOptions.category}
                            onChange={handleFilterChange}
                            style={{ width: '120px' }}
                        >
                            <MenuItem value="">All</MenuItem>
                            <MenuItem value="Building">Building</MenuItem>
                            <MenuItem value="Dolls">Dolls</MenuItem>
                            <MenuItem value="Vehicles">Vehicles</MenuItem>
                            <MenuItem value="Educational">Educational</MenuItem>
                            <MenuItem value="Action">Action</MenuItem>
                        </TextField>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', width: '100%', marginTop: '30px' }}>
                {filteredToys.map((toy, index) => (
                    <div key={index} style={{ margin: '10px' }}>
                        <Card sx={{ maxWidth: 250, height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Toy"
                                image={toy[4]}
                                style={{ width: '100%', objectFit: 'cover' }}
                            />
                            <CardContent sx={{ height: '180px', overflow: 'auto' }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {toy[0]}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right' }}>
                                    Quantity available: {toy[5]}
                                </Typography>
                                <p>Select Quantity: </p>
                                <Pagination
                                    count={toy[5]}
                                    color="primary"
                                    onChange={(event, page) => handleQuantityChange(index, page)}
                                />
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => handleDetailOpen(toy)}>Details</Button>
                                <Button size="small" onClick={() => handleDonationOpen(toy)}>Donate</Button>
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
                <DialogTitle id="alert-dialog-title">Toy Details</DialogTitle>
                <DialogContent>
                    {selectedToyDetails && (
                        <div>
                            <Typography variant="h6">{selectedToyDetails[0]}</Typography>
                            <Typography>Age: {selectedToyDetails[1]}</Typography>
                            <Typography>Gender: {selectedToyDetails[2]}</Typography>
                            <Typography>Category: {selectedToyDetails[3]}</Typography>
                            <Typography>Quantity required: {selectedToyDetails[5]}</Typography>
                        </div>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDetailClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DonorToys;
