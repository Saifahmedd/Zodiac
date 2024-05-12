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
import abrar from "AdminPhotos/Abrar.png";
import gawy from "AdminPhotos/gawy.png";
import shifa from "AdminPhotos/shifa.png";
import resala from "AdminPhotos/Resala.png";
import summits from "AdminPhotos/summits.png";
import { Box, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import Home from "./AdminHome"

const organizations = [
    // [name, type, address, contactNumber, area, governorate, image, location]
    ["Shifa Hospital", "Hospital", "North 90 Tgamo3", "0228138618", "First Settlement", "Cairo", shifa, "https://www.google.com/maps/place/Shifa+Hospital/@30.0207462,31.4328091,17z/data=!3m1!4b1!4m6!3m5!1s0x14583d88cd9c546b:0xff07161aab2bc7db!8m2!3d30.0207462!4d31.435384!16s%2Fg%2F11fkvt_kgl?entry=ttu"],
    ["Resala Organization", "Charity", "2 Zaki Rostom", "19450", "Nasr City", "Cairo", resala, "https://www.google.com/maps/place/%D8%AC%D9%85%D8%B9%D9%8A%D8%A9+%D8%B1%D8%B3%D8%A7%D9%84%D8%A9+%D9%84%D9%84%D8%A7%D8%B9%D9%85%D8%A7%D9%84+%D8%A7%D9%84%D8%AE%D9%8A%D8%B1%D9%8A%D8%A9+%D9%81%D8%B1%D8%B9+%D9%85%D8%AF%D9%8A%D9%86%D8%A9+%D9%86%D8%B5%D8%B1%E2%80%AD/@30.0607548,31.3416552,17z/data=!3m1!4b1!4m6!3m5!1s0x14583e6ee2ebc7ab:0x5523ad87156ef241!8m2!3d30.0607502!4d31.3390803!16s%2Fg%2F1v2sj8j2?entry=ttu"],
    ["Dar elabrar Orphanage", "Orphanage", "Omar ebn abdelaziz rd tgamo3", "01033027069", "Fifth Settlement", "Cairo", abrar, "https://www.google.com/maps/place/Dar+Elabrar+Elseghar+Orphanage/@30.010883,31.4251407,17z/data=!3m1!4b1!4m6!3m5!1s0x14583cc39b47e167:0x33cd27f23c2dee3b!8m2!3d30.010883!4d31.4277156!16s%2Fg%2F11c46k99bx?entry=ttu"],
    ["Air force Hospital", "Hospital", "South 90 Tgamo3", "0226176981", "Fifth Settlement", "Cairo", gawy, "https://www.google.com/maps/place/Air+Force+Specialized+Hospital/@30.0175187,31.4315697,17z/data=!3m1!4b1!4m6!3m5!1s0x14583cd75153e123:0xd6d98616e2c385f7!8m2!3d30.0175187!4d31.4341446!16s%2Fg%2F11b5wl4hdk?entry=ttu"],
    ["Summits School", "School", "Ahmed Zewail Road", "01008027892", "Maadi", "Giza", summits, "https://www.google.com/maps/place/Summits+International+Schools/@29.9747537,31.3091968,17z/data=!3m1!4b1!4m6!3m5!1s0x145838ffbf323fab:0x3d1d263fd4c316ec!8m2!3d29.9747491!4d31.3066219!16s%2Fg%2F1q5bl5_c6?entry=ttu"]
];



const AdminManage = () => {
    const [organization, setOrganizations] = useState(organizations);
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
            const updatedOrganizations = [...organization];
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
                {organization.map((organization, index) => (
                    <Card key={index} sx={{ margin: '10px', fixedwidth: '200px', maxWidth: '350px' }}>
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
                            <Button
                                component="a"
                                href="/Users/alihani/Desktop/CV.pdf"
                                download="CV.pdf"
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

export default AdminManage;
