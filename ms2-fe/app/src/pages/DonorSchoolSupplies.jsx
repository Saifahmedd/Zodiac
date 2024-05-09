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
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DonorSchoolSupplies = () => {
    const [open, setOpen] = useState(false);
    const [donationOpen, setDonationOpen] = useState(false);
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [dateTimeOpen, setDateTimeOpen] = useState(false);
    const [successAlertOpen, setSuccessAlertOpen] = useState(false);
    const [selectedSupply, setSelectedSupply] = useState(null);
    const [supplies, setSupplies] = useState([
        ["To Kill a Mockingbird", "Harper Lee", "English", "First", "A classic novel about racial injustice and moral growth.", "https://example.com/book1.jpg"],
        ["1984", "George Orwell", "English", "Nineteen Eighty-Four", "A dystopian novel about totalitarianism and surveillance.", "https://example.com/book2.jpg"],
        ["The Great Gatsby", "F. Scott Fitzgerald", "English", "Reprint", "A story of the American Dream and its corruption in the Jazz Age.", "https://example.com/book3.jpg"],
        ["Pride and Prejudice", "Jane Austen", "English", "Revised", "A romantic novel of manners set in early 19th-century England.", "https://example.com/book4.jpg"],
        ["Harry Potter and the Philosopher's Stone", "J.K. Rowling", "English", "First", "The first book in the Harry Potter series.", "https://example.com/book5.jpg"],
        ["Pens", 500],
        ["Notebooks", 300],
        ["Pencils", 400],
        ["Erasers", 200],
        ["Markers", 150]
    ]);
    const [searchInput, setSearchInput] = useState('');
    const [selectedQuantities, setSelectedQuantities] = useState([]);
    const [detailOpen, setDetailOpen] = useState(false);
    const [selectedSupplyDetails, setSelectedSupplyDetails] = useState(null);

    useState(() => {
        setSelectedQuantities(new Array(supplies.length).fill(1));
    }, [supplies]);

    const handleDetailOpen = (supply) => {
        setSelectedSupplyDetails(supply);
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
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleDonationOpen = (supply) => {
        setSelectedSupply(supply);
        setDonationOpen(true);
    };

    const handleDonationClose = () => {
        setDonationOpen(false);
        setSelectedVehicle(null);
        setSelectedSupply(null);
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
        if (!selectedSupply || !selectedVehicle || !dateTimeOpen) {
            setOpen(true);
            return;
        }
    
        const pickupDateTime = document.getElementById('datetime-local').value;
        if (!pickupDateTime) {
            setOpen(true);
            return;
        }
    
        const updatedSupplies = supplies.map((supply, index) => {
            if (supply === selectedSupply) {
                const updatedQuantity = supply.length === 6 ? supply[1] - selectedQuantities[index] : null;
                return updatedQuantity !== null ? [supply[0], updatedQuantity] : null;
            }
            return supply;
        }).filter(Boolean);
    
        setSupplies(updatedSupplies);
    
        setDonationOpen(false);
        setSelectedVehicle(null);
        setSelectedSupply(null);
        setSuccessAlertOpen(true);
    };

    const filteredSupplies = supplies.filter(supply => {
        if (supply.length === 6) {
            const [name] = supply;
            return name.toLowerCase().includes(searchInput.toLowerCase());
        } else {
            const [name] = supply;
            return name;
        }
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
                {filteredSupplies.map((supply, index) => (
                    <div key={index} style={{ margin: '10px' }}>
                        <Card sx={{ maxWidth: 250, height: '100%' }}>
                            <CardMedia
                                component="img"
                                alt="Supply"
                                image={supply[5]}
                                style={{ width: '100%', objectFit: 'cover' }}
                            />
                            <CardContent sx={{ height: '180px', overflow: 'auto' }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {supply.length !== 6 ? supply[0] : supply[0] }
                                </Typography>
                                {supply.length !== 6 ? (
                                    <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right' }}>
                                        Quantity available: {supply[1]}
                                    </Typography>
                                ) : (
                                    <>
                                        <Typography>The Author: {supply[1]}</Typography>
                                    </>
                                )}
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={() => handleDetailOpen(supply)}>Details</Button>
                                <Button size="small" onClick={() => handleDonationOpen(supply)}>Donate</Button>
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
                <DialogTitle id="alert-dialog-title">{"Select Donation Type and Schedule"}</DialogTitle>
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
                <DialogTitle id="alert-dialog-title">Supply Details</DialogTitle>
                <DialogContent>
                    {selectedSupplyDetails && (
                        <div>
                            <Typography variant="h6">{selectedSupplyDetails[0]}</Typography>
                            {selectedSupplyDetails.length === 6 ? (
                                <>
                                    <Typography>Author: {selectedSupplyDetails[1]}</Typography>
                                    <Typography>Language: {selectedSupplyDetails[2]}</Typography>
                                    <Typography>Edition: {selectedSupplyDetails[3]}</Typography>
                                    <Typography>Summary: {selectedSupplyDetails[4]}</Typography>
                                </>
                            ) : null}
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

export default DonorSchoolSupplies;