import React from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import {Checkroom} from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Tshirt from './tshirt.jpg';
import Divider from '@mui/material/Divider';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import ToysIcon from '@mui/icons-material/Toys';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import SchoolIcon from '@mui/icons-material/School';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import DrawIcon from '@mui/icons-material/Draw';
import Food from './Food.jpg';
import LocationOnIcon from '@mui/icons-material/LocationOn';






const OrgPosts = ({ posts }) =>{
    const [expanded, setExpanded] = React.useState(false);

        
        const food = [
        // [name, quantity(kg if fruit or vegetables and amount the rest)]
        ["Apples", "20 kg"]]
        
        const toys = [
            // [type of toy, age, gender, category, link of an image, quantity]
            ["LEGO Set", "5-12", "Male", "Building", "https://example.com/toy1.jpg", 80]]

        const stationarySupplies = [
            // [type, quantity]
             ["Pens", 500]]

        const bookSupplies = [
            // [book name, author, language, edition, short summary, link of an image]
             ["To Kill a Mockingbird", "Harper Lee", "English", "First", "A classic novel about racial injustice and moral growth.", "https://example.com/book1.jpg"]]
    
        const clothes = [
            // [type of clothes, age, gender, season, material, quantity]
            ["T-shirt", "Teen", "Male", "Summer", "Cotton", 4]]

        const medicalSupplies = [
            // [device type, use, image, quantity]
            ["Thermometer", "Measure body temperature", "https://example.com/medical1.jpg", 50]]

        const bloodDonation = [
            // [name of patient, blood type, hospital name, hospital area, governorate, address]
            ["John Doe", "O+", "City Hospital", "Downtown", "Example Governorate", "123 Main Street"]]

        const teaching = [
            // [number of students, address, google marker, subject]
            [30, "123 Main St", "google marker url", "Mathematics"]]

        const medicalCases = [
            // [patient name, age, gender, weight, google marker, address, organization name, medical specialty, case description]
            ["Jane Smith", 30, "Female", 60, "google marker url", "456 Elm St", "Community Hospital", "Orthopedics", "Patient sustained a fracture in the left arm after a fall."]]

            

    
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };



    return(
        <div> 
            <Typography variant="h4" align="left" gutterBottom marginTop={3} marginLeft={3}> 
                My Posts
            </Typography>

            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '16px' }}>

            <div>
            {clothes.map((item, index) => (
                <Card key={index} sx={{ maxWidth: 345, marginBottom: 2, marginLeft:8 }}>
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
                            Post Details: <br/>
                            Type: {item[0]}, Age: {item[1]}, Gender: {item[2]}, <br/>
                             Season: {item[3]}, Material: {item[4]}, Quantity: {item[5]}



                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="edit">
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            ))}
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
                            Food: {item[0]}, Quantity: {item[1]}
                            <br/>


                            <br/>

                            


                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="edit">
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            ))}
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
                    src={Tshirt}
                    alt="logo"
                    style={{ width: '250px', height: '250px', marginRight: '10px', marginLeft: '40px' }}
                    />
                    <CardContent>
                        <Typography variant="body2" color="black">
                            Post Details: <br/>
                            Type of Toy: {item[0]}, Age: {item[1]}, Gender: {item[2]}, Category: {item[3]}, Quantity: {item[5]}


                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="edit">
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
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
                    src={Tshirt}
                    alt="logo"
                    style={{ width: '250px', height: '250px', marginRight: '10px', marginLeft: '40px' }}
                    />
                    <CardContent>
                        <Typography variant="body2" color="black">
                            Post Details: <br/>
                            Type: {item[0]}, Quantity: {item[1]}


                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="edit">
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
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
                    src={Tshirt}
                    alt="logo"
                    style={{ width: '250px', height: '250px', marginRight: '10px', marginLeft: '40px' }}
                    />
                    <CardContent>
                        <Typography variant="body2" color="black">
                            Post Details: <br/>
                            Book Name: {item[0]} , Author: {item[1]}, Language: {item[2]}, Edition: {item[3]}, Short Summary: {item[4]}
                           


                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="edit">
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
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
                    src={Tshirt}
                    alt="logo"
                    style={{ width: '250px', height: '250px', marginRight: '10px', marginLeft: '40px' }}
                    />
                    <CardContent>
                        <Typography variant="body2" color="black">
                            Post Details: <br/>
                            Device Type: {item[0]}, Use: {item[1]}, Quantity: {item[3]}


                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="edit">
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
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
                    src={Tshirt}
                    alt="logo"
                    style={{ width: '250px', height: '250px', marginRight: '10px', marginLeft: '40px' }}
                    />
                    <CardContent>
                        <Typography variant="body2" color="black">
                            Post Details: <br/>
                            Name of Patient: {item[0]}, Blood Type: {item[1]}, Hospital Name: {item[2]}, Hospital Area: {item[3]}, Governorate: {item[4]}, Address: {item[5]}


                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="edit">
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
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
                    src={Tshirt}
                    alt="logo"
                    style={{ width: '250px', height: '250px', marginRight: '10px', marginLeft: '40px' }}
                    />
                    <CardContent>
                        <Typography variant="body2" color="black">
                            Post Details: <br/>
                            Number of Students: {item[0]}, Address: {item[1]}, Subject: {item[3]}


                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="edit">
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                            <LocationOnIcon />
                        </IconButton>
                    </CardActions>
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
                    src={Tshirt}
                    alt="logo"
                    style={{ width: '250px', height: '250px', marginRight: '10px', marginLeft: '40px' }}
                    />
                    <CardContent>
                        <Typography variant="body2" color="black">
                            Post Details: <br/>
                            Patient Name: {item[0]}, Age: {item[1]}, Gender: {item[2]}, Weight: {item[3]}, Address: {item[5]}, Organization Name: {item[6]}, Medical Specialty: {item[7]}, Case Description: {item[8]}


                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="edit">
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            ))}
            </div>

            </div>
        </div>
    );
}

export default OrgPosts;



    


