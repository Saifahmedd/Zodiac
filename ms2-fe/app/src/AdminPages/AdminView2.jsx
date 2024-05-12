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
import teacher from "./AdminPhotos/teacher.jpg";
import teacher2 from "./AdminPhotos/teacher2.jpg";
import doctor from "./AdminPhotos/doctor.jpg";
import doctor2 from "./AdminPhotos/doctor2.jpg";
import doctor3 from "./AdminPhotos/doctor3.jpg";
import { Box } from "@mui/material";
import Home from "./AdminHome";

const donors = [
    // [name, type, email,number, image]
    ["John Doe", "Doctor", "john@example.com","01004298392", doctor],
    ["Jane Smith", "Teacher", "jane@example.com","01004298392", teacher],
    ["Michael Johnson", "Doctor", "michael@example.com","01004298392", doctor2],
    ["Emily Williams", "Teacher", "emily@example.com", "01004298392",teacher2],
    ["David Brown", "Doctor", "david@example.com","01004298392", doctor3]
];

const AdminView2 = () => {
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
                {donors.map((organization, index) => (
                    <Card key={index} sx={{ margin: '10px', minWidth: '200px', maxWidth: '300px' }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={organization[4]}
                            title="Array Test"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {organization[0]}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Email: {organization[2]}
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
                    <DialogTitle>Donor Details</DialogTitle>
                    <DialogContent>
                        {selectedOrganization && (
                            <DialogContentText>
                                <Typography variant="h6">{selectedOrganization[0]}</Typography>
                                <Typography variant="body1">Email: {selectedOrganization[2]}</Typography>
                                <Typography variant="body1">Type: {selectedOrganization[1]}</Typography>
                                <Typography variant="body1">Number: {selectedOrganization[3]}</Typography>
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

export default AdminView2;