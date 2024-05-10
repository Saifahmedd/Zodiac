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
import teacher from "teacher.png";
import teacher2 from "teacher2.png";
import doctor from "doctor.png";
import doctor2 from "doctor2.png";
import doctor3 from "doctor3.png";
import { Box } from "@mui/material";

const donors = [
    // [name, type, email]
    ["John Doe", "Doctor", "john@example.com",doctor],
    ["Jane Smith", "Teacher", "jane@example.com",teacher],
    ["Michael Johnson", "Doctor", "michael@example.com",doctor2],
    ["Emily Williams", "Teacher", "emily@example.com",teacher2],
    ["David Brown", "Doctor", "david@example.com",doctor3]
];


const AdminDelete2 = () => {
    const [organizations, setOrganizations] = useState(donors);

    const handleDelete = (index) => {
        const updatedOrganizations = [...organizations];
        updatedOrganizations.splice(index, 1);
        setOrganizations(updatedOrganizations);
    };

    return (
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
        </div>
    );
}

export default AdminDelete2;
