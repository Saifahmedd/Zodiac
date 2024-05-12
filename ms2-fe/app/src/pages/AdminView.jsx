import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import DownloadIcon from '@mui/icons-material/Download';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import Reem from "ReemElectricity.png";
import Ali from "AliElectricity.png";
import hospital1 from "hospital.png";
import hospital2 from "hospital2.png";
import orphanage from "Orphanagee.png";
import { Box } from "@mui/material";
import Home from "./AdminHome"

const organizations = [
    // [name, type, address, contactNumber, area, governorate, image, location]
    ["Care Hospital", "Non-profit", "123 Main St Cityville", "+1234567890", "City A", "Central District", hospital1, "https://www.google.com/maps/place/Shifa+Hospital/@30.0207462,31.4328091,17z/data=!3m1!4b1!4m6!3m5!1s0x14583d88cd9c546b:0xff07161aab2bc7db!8m2!3d30.0207462!4d31.435384!16s%2Fg%2F11fkvt_kgl?entry=ttu"],
    ["Canada Electricity", "Corporate", "456 Oak Ave Townsville", "+2345678901", "City B", "Downtown", Ali, "https://www.google.com/maps/place/Electricity+Canada/@45.4189391,-75.7035997,17z/data=!3m1!4b1!4m6!3m5!1s0x4cce05aa90d3b297:0x897f1358374277a2!8m2!3d45.4189391!4d-75.7010248!16s%2Fg%2F1tm8dm2w?entry=ttu"],
    ["Growth Orphanage", "Non-profit", "789 Elm St Villagetown", "+3456789012", "City C", "Downtown", orphanage, "https://www.google.com/maps/place/Dar+Elabrar+Elseghar+Orphanage/@30.010883,31.4251407,17z/data=!3m1!4b1!4m6!3m5!1s0x14583cc39b47e167:0x33cd27f23c2dee3b!8m2!3d30.010883!4d31.4277156!16s%2Fg%2F11c46k99bx?entry=ttu"],
    ["Zodiac Hospital", "Non-profit", "321 Pine St Countryside", "+4567890123", "City D", "Rural", hospital2, "https://www.google.com/maps/place/Air+Force+Specialized+Hospital/@30.0175187,31.4315697,17z/data=!3m1!4b1!4m6!3m5!1s0x14583cd75153e123:0xd6d98616e2c385f7!8m2!3d30.0175187!4d31.4341446!16s%2Fg%2F11b5wl4hdk?entry=ttu"],
    ["Sewedy Electricity", "Non-profit", "654 Maple Ave Beachside", "+5678901234", "City E", "Coastal", Reem, "https://www.google.com/maps/place/ELSEWEDY+ELECTRIC/@30.0207245,31.4116236,17z/data=!3m1!4b1!4m6!3m5!1s0x14583ce45a1da8b5:0xed69f1fb1ac2ee6e!8m2!3d30.0207245!4d31.4141985!16s%2Fg%2F11cst1_6hn?entry=ttu"]
];

const AdminView = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedOrganization, setSelectedOrganization] = useState(null);

    const handleDetailsClick = (organization) => {
        setSelectedOrganization(organization);
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    return (
        <div>
            <Home/>
        
        <div>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {organizations.map((organization, index) => (
                    <Card key={index} sx={{ margin: '10px', minWidth: '200px', maxWidth: '300px' }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={organization[6]}
                            title="Array Test"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {organization[0]}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Email: {organization[4]}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Address: {organization[2]}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Type: {organization[1]}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined" size="medium" color="primary" onClick={() => handleDetailsClick(organization)}>Details</Button>
                        </CardActions>
                    </Card>
                ))}

                <Dialog open={dialogOpen} onClose={handleCloseDialog}>
                    <DialogTitle>Organization Details</DialogTitle>
                    <DialogContent>
                        {selectedOrganization && (
                            <DialogContentText>
                                <Typography variant="h6">{selectedOrganization[0]}</Typography>
                                <Typography variant="body1">Number: {selectedOrganization[3]}</Typography>
                                <Typography variant="body1">Address: {selectedOrganization[2]}</Typography>
                                <Typography variant="body1">Type: {selectedOrganization[1]}</Typography>
                                <Typography variant="body1">Area: {selectedOrganization[4]}</Typography>
                                <Typography variant="body1">Governorate: {selectedOrganization[5]}</Typography>
                                <Typography variant="body1">
                                        Location: <a href={selectedOrganization[7]} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                                    </Typography>
                            </DialogContentText>
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog} autoFocus>
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>

            </Box>
        </div>
        </div>
    );
}

export default AdminView;
