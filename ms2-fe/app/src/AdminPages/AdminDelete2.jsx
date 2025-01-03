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
import teacher from "./AdminPhotos/teacher.jpg";
import teacher2 from "./AdminPhotos/teacher2.jpg";
import doctor from "./AdminPhotos/doctor.jpg";
import doctor2 from "./AdminPhotos/doctor2.jpg";
import doctor3 from "./AdminPhotos/doctor3.jpg";
import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import Home from "./AdminHome"

const donors = [
    // [name, type, email, image]
    ["John Doe", "Doctor", "john@example.com", doctor],
    ["Jane Smith", "Teacher", "jane@example.com", teacher],
    ["Michael Johnson", "Doctor", "michael@example.com", doctor2],
    ["Emily Williams", "Teacher", "emily@example.com", teacher2],
    ["David Brown", "Doctor", "david@example.com", doctor3]
];


const AdminDelete2 = () => {
    const [organizations, setOrganizations] = useState(donors);
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
            <Home/>
        
        <div>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {organizations.map((organization, index) => (
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
                        Are you sure you want to delete this donor?
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

export default AdminDelete2;