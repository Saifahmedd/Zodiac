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
import teacher from "teacher.png";
import teacher2 from "teacher2.png";
import doctor from "doctor.png";
import doctor2 from "doctor2.png";
import doctor3 from "doctor3.png";
import { Box } from "@mui/material";
import Home from "./AdminHome"

const donors = [
    // [name, type, email, image]
    ["John Doe", "Doctor", "john@example.com", doctor],
    ["Jane Smith", "Teacher", "jane@example.com", teacher],
    ["Michael Johnson", "Doctor", "michael@example.com", doctor2],
    ["Emily Williams", "Teacher", "emily@example.com", teacher2],
    ["David Brown", "Doctor", "david@example.com", doctor3]
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
                            image={organization[3]}
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
