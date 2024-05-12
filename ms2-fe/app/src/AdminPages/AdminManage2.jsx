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
import teacher from "AdminPhotos/teacher.png";
import teacher2 from "AdminPhotos/teacher2.png";
import doctor from "AdminPhotos/doctor.png";
import doctor2 from "AdminPhotos/doctor2.png";
import doctor3 from "AdminPhotos/doctor3.png";
import { Box, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import Home from "./AdminHome"

const donors = [
    // [name, type, email, image]
    ["John Doe", "Doctor", "john@example.com", doctor],
    ["Jane Smith", "Teacher", "jane@example.com", teacher],
    ["Michael Johnson", "Doctor", "michael@example.com", doctor2],
    ["Emily Williams", "Teacher", "emily@example.com", teacher2],
    ["David Brown", "Doctor", "david@example.com", doctor3]
];

const AdminManage2 = () => {
    const [organizations, setOrganizations] = useState(donors);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(null);

    const handleAccept = (index) => {
        setDeleteIndex(index);
        setDialogOpen(true);
    };

    const handleDelete = (index) => {
        setDeleteIndex(index);
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDeleteIndex(null);
        setDialogOpen(false);
    };

    const handleConfirmDelete = () => {
        if (deleteIndex !== null) {
            const updatedOrganizations = [...organizations];
            updatedOrganizations.splice(deleteIndex, 1);
            setOrganizations(updatedOrganizations);
            handleCloseDialog();
        }
    };

    return (
        <div>
            <Home/>
        
        <div>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {organizations.map((organization, index) => (
                    <Card key={index} sx={{ margin: '10px', minWidth: '200px', maxWidth: '350px' }}>
                        <CardMedia
                            sx={{ height: 200 }}
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
                            <Button
                                component="a"
                                href="/path/to/your/file"
                                download="filename.txt"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                                startIcon={<DownloadIcon />}
                            >
                                Download
                            </Button>

                            <Button variant="contained" size="medium" endIcon={<CheckIcon />} color="success" onClick={() => handleAccept(index)}>Accept</Button>
                            <Button variant="contained" size="medium" endIcon={<DeleteIcon />} color="error" onClick={() => handleDelete(index)}>Delete</Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>
            <Dialog open={dialogOpen} onClose={handleCloseDialog}>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogContent>
                    This action cannot be undone.
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
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

export default AdminManage2;
