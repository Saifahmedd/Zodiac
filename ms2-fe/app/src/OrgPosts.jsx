import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {Checkroom} from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import ToysIcon from '@mui/icons-material/Toys';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import SchoolIcon from '@mui/icons-material/School';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import DrawIcon from '@mui/icons-material/Draw';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Tshirt from './tshirt.jpg';
import Food from './Food.jpg';
import BloodDonation from './Blood donation.jpg'
import Book from './Book.jpg'
import Lego from './Lego.jpg'
import MedicalCases from './Medical Cases.jpg'
import MedicalSupplies from './Medical Supplies.jpg'
import Stationary from './Stationary.jpg'
import Teaching from './Teaching.jpg'
import GoogleMapMarkerDialog from './Location';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Tooltip from '@mui/material/Tooltip';
import { Dialog, DialogTitle, DialogContent, DialogActions,TextField } from '@mui/material';
import Button from '@mui/material/Button';  // Import Button


const OrgPosts = ({ posts }) =>{
    const [expanded, setExpanded] = React.useState(false);
    const [mapDialogOpen, setMapDialogOpen] = useState(false);
    const [selectedCaseIndex, setSelectedCaseIndex] = useState(null);
    const [editedPost, setEditedPost] = useState(null);
    

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);


    const [clothes, setClothes] = useState([
        // [type of clothes, age, gender, season, material, quantity]
        ["T-shirt", "Teen", "Male", "Summer", "Cotton", 4]
    ]);
        
    const [food, setFood] = useState([
        // [name, quantity(kg if fruit or vegetables and amount the rest)]
        ["Apples", "20 kg"]
    ]);
    
    const [toys, setToys] = useState([
        // [type of toy, age, gender, category, link of an image, quantity]
        ["LEGO Set", "5-12", "Male", "Building", "https://example.com/toy1.jpg", 80]
    ]);
    
    const [stationarySupplies, setStationarySupplies] = useState([
        // [type, quantity]
        ["Pens", 500]
    ]);
    
    const [bookSupplies, setBookSupplies] = useState([
        // [book name, author, language, edition, short summary, link of an image]
        ["To Kill a Mockingbird", "Harper Lee", "English", "First", "A classic novel about racial injustice and moral growth.", "https://example.com/book1.jpg"]
    ]);
    
    
    const [medicalSupplies, setMedicalSupplies] = useState([
        // [device type, use, image, quantity]
        ["Thermometer", "Measure body temperature", "https://example.com/medical1.jpg", 50]
    ]);
    
    const [bloodDonation, setBloodDonation] = useState([
        // [name of patient, blood type, hospital name, hospital area, governorate, address]
        ["John Doe", "O+", "City Hospital", "Downtown", "Example Governorate", "123 Main Street"]
    ]);
    
    const [teaching, setTeaching] = useState([
        // [number of students, address, google marker, subject]
        [30, "123 Main St", "google marker url", "Mathematics"]
    ]);
    
    const [medicalCases, setMedicalCases] = React.useState([
        ["Jane Smith", 30, "Female", 60, "google marker url", "456 Elm St", "Community Hospital", "Orthopedics", "Patient sustained a fracture in the left arm after a fall."]
    ]);
            
            

    
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleLocationClick = () => {
        // Handle location button click here
        console.log('Location button clicked');
    };

    const handleViewLocation = () => {
        setMapDialogOpen(true);
    };

    const handleCloseMapDialog = () => {
        setMapDialogOpen(false);
    };

    // Function to handle form submission for updating post
    const handleUpdatePost = () => {
        // Logic to update the post with editedPost details
        // This is where you should update your state or make an API call
        // After updating, close the dialog and reset editedPost state
        setEditDialogOpen(false);
        setEditedPost(null);
    };

    const handleEditClick = (category, index) => {
        setSelectedCategory(category);
        setSelectedItemIndex(index);
        setEditDialogOpen(true);
    };
    
    const handleCloseEditDialog = () => {
        setEditDialogOpen(false);
        setSelectedCategory('');
        setSelectedItemIndex(null);
    };

    const [editDialogOpen, setEditDialogOpen] = useState(false);

    const [editClothes, setEditClothes] = useState(false);

    const OpenhandleClothes =(category, index)=>{
        setSelectedCategory(category);
        setSelectedItemIndex(index);
        setEditClothes(true);
    }
    const ClosehandleClothes =()=>{
        setEditDialogOpen(false);
        setSelectedCategory('');
        setEditClothes(false);
    }

    const [editFood, setEditFood] = useState(false);

    const OpenhandleFood =(category, index)=>{
        setSelectedCategory(category);
        setSelectedItemIndex(index);
        setEditFood(true);
    }
    const ClosehandleFood =()=>{
        setEditDialogOpen(false);
        setSelectedCategory('');
        setEditFood(false);
    }

    const [editStationary, setEditStationary] = useState(false);

    const OpenhandleStationary =(category, index)=>{
        setSelectedCategory(category);
        setSelectedItemIndex(index);
        setEditStationary(true);
    }
    const ClosehandleStationary =()=>{
        setEditDialogOpen(false);
        setSelectedCategory('');
        setEditStationary(false);
    }

    const [editBook, setEditBook] = useState(false);

    const OpenhandleBook =(category, index)=>{
        setSelectedCategory(category);
        setSelectedItemIndex(index);
        setEditBook(true);
    }
    const ClosehandleBook =()=>{
        setEditDialogOpen(false);
        setSelectedCategory('');
        setEditBook(false);
    }
    
    const [editMedicalSupp, setEditMedicalSupp] = useState(false);

    const OpenhandleMedicalSupp =(category, index)=>{
        setSelectedCategory(category);
        setSelectedItemIndex(index);
        setEditMedicalSupp(true);
    }
    const ClosehandleMedicalSupp =()=>{
        setEditDialogOpen(false);
        setSelectedCategory('');
        setEditMedicalSupp(false);
    }

    const [editBloodDonation, setEditBloodDonation] = useState(false);

    const OpenhandleBloodDonation =(category, index)=>{
        setSelectedCategory(category);
        setSelectedItemIndex(index);
        setEditBloodDonation(true);
    }
    const ClosehandleBloodDonation =()=>{
        setEditDialogOpen(false);
        setSelectedCategory('');
        setEditBloodDonation(false);
    }

    const [editTeaching, setEditTeaching] = useState(false);

    const OpenhandleTeaching =(category, index)=>{
        setSelectedCategory(category);
        setSelectedItemIndex(index);
        setEditTeaching(true);
    }
    const ClosehandleTeaching =()=>{
        setEditDialogOpen(false);
        setSelectedCategory('');
        setEditTeaching(false);
    }

    const [editMedicalCases, setEditMedicalCases] = useState(false);

    const OpenhandleMedicalCases =(category, index)=>{
        setSelectedCategory(category);
        setSelectedItemIndex(index);
        setEditMedicalCases(true);
    }
    const ClosehandleMedicalCases =()=>{
        setEditDialogOpen(false);
        setSelectedCategory('');
        setEditMedicalCases(false);
    }

    const handleEditClothes = () => {
        // Update the food item with the new values
        // Close the dialog
        setEditDialogOpen(false);
        setSelectedCategory('');
        setSelectedItemIndex(null);
    }

    
    const handleDeleteCard = (index, category) => {
        let updatedCategory;
        switch (category) {
            case 'food':
                updatedCategory = [...food];
                setFood(updatedCategory.filter((_, i) => i !== index));
                break;
            case 'toys':
                updatedCategory = [...toys];
                setToys(updatedCategory.filter((_, i) => i !== index));
                break;
            case 'stationarySupplies':
                updatedCategory = [...stationarySupplies];
                setStationarySupplies(updatedCategory.filter((_, i) => i !== index));
                break;
            case 'bookSupplies':
                updatedCategory = [...bookSupplies];
                setBookSupplies(updatedCategory.filter((_, i) => i !== index));
                break;
            case 'clothes':
                updatedCategory = [...clothes];
                setClothes(updatedCategory.filter((_, i) => i !== index));
                break;
            case 'medicalSupplies':
                updatedCategory = [...medicalSupplies];
                setMedicalSupplies(updatedCategory.filter((_, i) => i !== index));
                break;
            case 'bloodDonation':
                updatedCategory = [...bloodDonation];
                setBloodDonation(updatedCategory.filter((_, i) => i !== index));
                break;
            case 'teaching':
                updatedCategory = [...teaching];
                setTeaching(updatedCategory.filter((_, i) => i !== index));
                break;
            case 'medicalCases':
                updatedCategory = [...medicalCases];
                setMedicalCases(updatedCategory.filter((_, i) => i !== index));
                break;
            default:
                break;
        }
    };
    
    


    return(
        <div> 
            <Typography variant="h4" align="left" gutterBottom marginTop={3} marginLeft={3}> 
                My Posts
            </Typography>

            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '16px' }}>

            <div>
            {clothes.map((item, index) => (
                <Card key={index} sx={{ maxWidth: 345, marginBottom: 2, marginLeft: 8 }}>
                    <CardHeader
                        action={
                            <IconButton aria-label="settings">
                                <Checkroom />
                            </IconButton>
                        }
                        title={'Clothes Post'}
                    />
                    <Divider sx={{ mb: 2 }} />
                    <img
                    src={Tshirt}
                    alt="logo"
                    style={{ width: '250px', height: '250px', marginRight: '10px', marginLeft: '40px' }}
                    />
                    <CardContent>
                        <Typography variant="body2" color="black">
                            Post Details: <br />
                            Quantity: {item[5]}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Tooltip title="View Details">
                            <IconButton aria-label="view" onClick={() => OpenhandleClothes('clothes', index)}>
                                <VisibilityIcon />
                            </IconButton>
                        </Tooltip>
                        <IconButton aria-label="delete" onClick={() => handleDeleteCard(index, 'clothes')}>
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            ))}

                <Dialog open={editClothes} onClose={ClosehandleClothes} maxWidth="sm" fullWidth>
                    <DialogTitle>Clothes Details</DialogTitle>
                    <br/>
                    <DialogContent>
                        {selectedCategory === 'clothes' && (
                            <div>
                                <TextField
                                    label="Food Type"
                                    defaultValue={food[selectedItemIndex][0]}
                                    fullWidth
                                    // Add onChange handler to update the food type
                                />
                                <br/>

                                <br/>
                                <TextField
                                    label="Quantity"
                                    defaultValue={food[selectedItemIndex][1]}
                                    fullWidth
                                    // Add onChange handler to update the quantity
                                />
                            </div>
                        )}
                    </DialogContent>
                    <DialogActions>
                    </DialogActions>
                    <DialogActions>
                    <IconButton aria-label="edit" onClick={() => handleEditClick(selectedCategory, selectedItemIndex)}>
                        <EditIcon />
                    </IconButton>
                        <Button onClick={ClosehandleClothes}>Close</Button>
                    </DialogActions>
                </Dialog>
            </div>

            <div>
            {food.map((item, index) => (
                <Card key={index} sx={{ maxWidth: 345, marginBottom: 2, marginLeft:4 }}>
                    <CardHeader
                        action={
                            <IconButton aria-label="settings">
                                <LunchDiningIcon />
                            </IconButton>
                        }
                        title={'Food Post'}
                    />
                    <Divider sx={{ mb: 2 }} />
                    <img
                    src={Food}
                    alt="logo"
                    style={{ width: '250px', height: '250px', marginRight: '10px', marginLeft: '20px' }}
                    />
                    <CardContent>
                        <Typography variant="body2" color="black">
                            Post Details: <br/>
                            Food Type: {item[0]}, Quantity: {item[1]}
                     
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                    <Tooltip title="View Details">
                        <IconButton aria-label="view" onClick={() => OpenhandleFood('food', index)}>
                            <VisibilityIcon />
                        </IconButton>
                    </Tooltip>
                        <IconButton aria-label="delete" onClick={() => handleDeleteCard(index, 'food')}>
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </Card>
                
            ))} 
                    <Dialog open={editFood} onClose={ClosehandleFood} maxWidth="sm" fullWidth>
                        <DialogTitle>{selectedCategory === 'food' ? 'Food Details' : 'Food Details'}</DialogTitle>
                        <DialogContent>
                            {selectedCategory === 'food' && (
                                <Typography>
                                    Food Type: {food[selectedItemIndex][0]} <br/>
                                    Quantity: {food[selectedItemIndex][1]}
                                </Typography>
                            )}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={ClosehandleFood}>Close</Button>
                        </DialogActions>
                    </Dialog>                      
            </div>

            <div>
            {toys.map((item, index) => (
                <Card key={index} sx={{ maxWidth: 345, marginBottom: 2, marginLeft:4 }}>
                    <CardHeader
                        action={
                            <IconButton aria-label="settings">
                                <ToysIcon />
                            </IconButton>
                        }
                        title={'Toys Post'}
                    />
                    <Divider sx={{ mb: 2 }} />
                    <img
                    src={Lego}
                    alt="logo"
                    style={{ width: '250px', height: '250px', marginRight: '10px', marginLeft: '40px' }}
                    />
                    <CardContent>
                        <Typography variant="body2" color="black">
                            Post Details: <br/>
                            Quantity: {item[5]}


                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Tooltip title="View Details">
                            <IconButton aria-label="view" onClick={() => handleEditClick('toys', index)}>
                                <VisibilityIcon />
                            </IconButton>
                        </Tooltip>
                        <IconButton aria-label="edit">
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete" onClick={() => handleDeleteCard(index, 'toys')}>
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>

                    <Dialog open={editDialogOpen} onClose={handleCloseEditDialog} maxWidth="sm" fullWidth>
                        <DialogTitle>{selectedCategory === 'toys' ? 'Toys Details' : 'Toys Details'}</DialogTitle>
                        <DialogContent>
                            {selectedCategory === 'toys' && (
                                <Typography>
                                    Type of Toy: {toys[selectedItemIndex][0]} <br/>
                                    Age: {toys[selectedItemIndex][1]} <br/>
                                    Gender: {toys[selectedItemIndex][2]} <br/>
                                    Category: {toys[selectedItemIndex][3]} <br/>
                                    Quantity: {toys[selectedItemIndex][5]}
                                </Typography>
                            )}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseEditDialog}>Close</Button>
                        </DialogActions>
                    </Dialog>
                </Card>
            ))}
            </div>

            <div>
            {stationarySupplies.map((item, index) => (
                <Card key={index} sx={{ maxWidth: 345, marginBottom: 2, marginLeft:8 }}>
                    <CardHeader
                        action={
                            <IconButton aria-label="settings">
                                <DrawIcon />
                            </IconButton>
                        }
                        title={'Stationary Post'}
                    />
                    <Divider sx={{ mb: 2 }} />
                    <img
                    src={Stationary}
                    alt="logo"
                    style={{ width: '250px', height: '250px', marginRight: '10px', marginLeft: '40px' }}
                    />
                    <CardContent>
                        <Typography variant="body2" color="black">
                            Post Details: <br/>
                            Quantity: {item[1]}


                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="edit">
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete" onClick={() => handleDeleteCard(index, 'stationarySupplies')}>
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            ))}
            </div>

            <div>
            {bookSupplies.map((item, index) => (
                <Card key={index} sx={{ maxWidth: 345, marginBottom: 2, marginLeft:8 }}>
                    <CardHeader
                        action={
                            <IconButton aria-label="settings">
                                <AutoStoriesIcon />
                            </IconButton>
                        }
                        title={'Book Post'}
                    />
                    <Divider sx={{ mb: 2 }} />
                    <img
                    src={Book}
                    alt="logo"
                    style={{ width: '250px', height: '250px', marginRight: '10px', marginLeft: '40px' }}
                    />
                    <CardContent>
                        <Typography variant="body2" color="black">
                            Post Details: <br/>
                            Book Name: {item[0]}
                           


                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="edit">
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete" onClick={() => handleDeleteCard(index, 'bookSupplies')}>
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            ))}
            </div>

            <div>
            {medicalSupplies.map((item, index) => (
                <Card key={index} sx={{ maxWidth: 345, marginBottom: 2, marginLeft:8 }}>
                    <CardHeader
                        action={
                            <IconButton aria-label="settings">
                                <DeviceThermostatIcon />
                            </IconButton>
                        }
                        title={'Medical Supplies Post'}
                    />
                    <Divider sx={{ mb: 2 }} />
                    <img
                    src={MedicalSupplies}
                    alt="logo"
                    style={{ width: '250px', height: '250px', marginRight: '10px', marginLeft: '40px' }}
                    />
                    <CardContent>
                        <Typography variant="body2" color="black">
                            Post Details: <br/>
                            Quantity: {item[3]}


                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="edit">
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete" onClick={() => handleDeleteCard(index, 'medicalSupplies')}>
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            ))}
            </div>

            <div>
            {bloodDonation.map((item, index) => (
                <Card key={index} sx={{ maxWidth: 345, marginBottom: 2, marginLeft:8 }}>
                    <CardHeader
                        action={
                            <IconButton aria-label="settings">
                                <BloodtypeIcon />
                            </IconButton>
                        }
                        title={'Blood Donation Post'}
                    />
                    <Divider sx={{ mb: 2 }} />
                    <img
                    src={BloodDonation}
                    alt="logo"
                    style={{ width: '250px', height: '250px', marginRight: '10px', marginLeft: '40px' }}
                    />
                    <CardContent>
                        <Typography variant="body2" color="black">
                            Post Details: <br/>
                            Blood Type: {item[1]}


                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="edit">
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete" onClick={() => handleDeleteCard(index, 'bloodDonation')}>
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            ))}
            </div>

            <div>
            {teaching.map((item, index) => (
                <Card key={index} sx={{ maxWidth: 345, marginBottom: 2, marginLeft:8 }}>
                    <CardHeader
                        action={
                            <IconButton aria-label="settings">
                                <SchoolIcon />
                            </IconButton>
                        }
                        title={'Teaching Post'}
                    />
                    <Divider sx={{ mb: 2 }} />
                    <img
                    src={Teaching}
                    alt="logo"
                    style={{ width: '250px', height: '250px', marginRight: '10px', marginLeft: '40px' }}
                    />
                    <CardContent>
                        <Typography variant="body2" color="black">
                            Post Details: <br/>
                            Number of Students: {item[0]}


                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="edit">
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete" onClick={() => handleDeleteCard(index, 'teaching')}>
                            <DeleteIcon />
                        </IconButton>

                        <IconButton aria-label="location" onClick={handleViewLocation}>
                            <LocationOnIcon />
                        </IconButton>
                    </CardActions>

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

                </Card>
            ))}
            </div>

            <div>
            {medicalCases.map((item, index) => (
                <Card key={index} sx={{ maxWidth: 345, marginBottom: 2, marginLeft:8 }}>
                    <CardHeader
                        action={
                            <IconButton aria-label="settings">
                                <Diversity1Icon />
                            </IconButton>
                        }
                        title={'Medical Cases Post'}
                    />
                    <Divider sx={{ mb: 2 }} />
                    <img
                    src={MedicalCases}
                    alt="logo"
                    style={{ width: '250px', height: '250px', marginRight: '10px', marginLeft: '40px' }}
                    />
                    <CardContent>
                        <Typography variant="body2" color="black">
                            Post Details: <br/>
                            Patient Name: {item[0]} 
                            <br/>
                            Age: {item[1]}


                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <Tooltip title="View Details">
                            <IconButton aria-label="view" onClick={() => handleEditClick(item)}>
                                <VisibilityIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete"> 
                            <IconButton aria-label="delete" onClick={() => handleDeleteCard(index, 'medicalCases')}>
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="View Location">
                            <IconButton aria-label="location" onClick={() => handleViewLocation(index)}>
                                <LocationOnIcon />
                            </IconButton>
                        </Tooltip>

                    </CardActions>
                    <Dialog
                        open={mapDialogOpen}
                        onClose={handleCloseMapDialog}
                        maxWidth="md"
                        fullWidth
                    >
                        <DialogTitle>Location</DialogTitle>
                        <DialogContent style={{ height: '400px' }}> {/* Adjust the height of the dialog content */}
                            <GoogleMapMarkerDialog style={{ width: '100%', height: '100%' }} /> {/* Set the width and height of the map */}
                        </DialogContent>
                    </Dialog>
                </Card>
            ))}
        </div>

            </div>
        </div>
    );
}

export default OrgPosts;



    


