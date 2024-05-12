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
import abrar from "./AdminPhotos/Abrar.jpg";
import gawy from "./AdminPhotos/gawy.jpg";
import shifa from "./AdminPhotos/shifa.jpg";
import resala from "./AdminPhotos/Resala.jpg";
import summits from "./AdminPhotos/summits.jpg";
import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import Home from "./AdminHome"

const organizations = [
    // [name, type, address, contactNumber, area, governorate, image]
    ["Shifa Hospital", "Hospital", "North 90 Tgamo3", "0228138618", "First Settlement", "Cairo", shifa],
    ["Resala Organization", "Charity", "2 Zaki Rostom", "19450", "Nasr City", "Cairo", resala],
    ["Dar elabrar Orphanage", "Orphanage", "Omar ebn abdelaziz rd tgamo3", "01033027069", "Fifth Settlement", "Cairo", abrar],
    ["Air force Hospital", "Hospital", "South 90 Tgamo3", "0226176981", "Fifth Settlement", "Cairo", gawy],
    ["Summits School", "School", "Maadi el basatin", "01008027892", "Maadi", "Giza", summits]
];

const AdminDelete = () => {
    const [organization, setOrganizations] = useState(organizations);
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
        const updatedOrganizations = [...organization];
        updatedOrganizations.splice(deleteIndex, 1);
        setOrganizations(updatedOrganizations);
        setOpenDialog(false);
        setDeleteIndex(null);
    };

    return (
        <div>
            <Home/>
        
        <div>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {organization.map((organization, index) => (
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
        </div>
    );
}

export default AdminDelete;