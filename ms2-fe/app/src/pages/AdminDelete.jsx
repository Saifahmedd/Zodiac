import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import DownloadIcon from '@mui/icons-material/Download';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteIcon from '@mui/icons-material/Delete';
import Reem from "ReemElectricity.png";
import Ali from "AliElectricity.png";
import hospital1 from "hospital.png";
import hospital2 from "hospital2.png";
import orphanage from "Orphanagee.png";
import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

const initialOrganizations = [
    ["Care Hospital", "Non-profit", "123 Main St, Cityville", "+1234567890", "Central District", "City A", hospital1],
    ["Canada Electricity", "Corporate", "456 Oak Ave, Townsville", "+2345678901", "Downtown", "City B", Reem],
    ["Growth Orphanage", "Non-profit", "789 Elm St, Villagetown", "+3456789012", "Suburbia", "City C", orphanage],
    ["Zodiac Hospital", "Non-profit", "321 Pine St, Countryside", "+4567890123", "Rural", "City D", hospital2],
    ["Sewedy Electricity", "Non-profit", "654 Maple Ave, Beachside", "+5678901234", "Coastal", "City E", Ali]
];

const AdminDelete = () => {
    const [organizations, setOrganizations] = useState(initialOrganizations);
    const [openDialog, setOpenDialog] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(null);

    const handleDelete = (index) => {
        setDeleteIndex(index);
        setOpenDialog(true);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
        setDeleteIndex(null);
    };

    const handleConfirmDelete = () => {
        const updatedOrganizations = [...organizations];
        updatedOrganizations.splice(deleteIndex, 1);
        setOrganizations(updatedOrganizations);
        setOpenDialog(false);
        setDeleteIndex(null);
    };

    return (
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
                            <Button variant="contained" size="medium" endIcon={<DeleteIcon />} color="error" onClick={() => handleDelete(index)}>Delete</Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>
            <Dialog
                open={openDialog}
                onClose={handleDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this organization?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose} color="primary">
                        No
                    </Button>
                    <Button onClick={handleConfirmDelete} color="error" autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AdminDelete;
