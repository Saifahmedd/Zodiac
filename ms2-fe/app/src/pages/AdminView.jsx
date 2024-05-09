import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import DownloadIcon from '@mui/icons-material/Download';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const organizations = [
    ["Care Hospital", "contact@care.com", "123 Main St, City, Country", { latitude: 40.7128, longitude: -74.006 }, "Hospital"],
    ["Reem Electricity", "contact@reem.com", "456 Elm St, City, Country", { latitude: 34.0522, longitude: -118.2437 }, "Electrical"],
    ["Growth Orphanage", "contact@growth.com", "789 Oak St, City, Country", { latitude: 51.5074, longitude: -0.1278 }, "Orphanage"],
    ["Zodiac Hospital", "contact@zodiac.com", "101 Pine St, City, Country", { latitude: 35.6895, longitude: 139.6917 }, "Hospital"],
    ["Ali Electricity", "contact@ali.com", "111 Maple St, City, Country", { latitude: 48.8566, longitude: 2.3522 }, "Electrical"]
  ];
  


const AdminView = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Ali Hani
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Volunteering to be a teacher.
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="text" size="medium" color="primary">Details</Button>
                
            </CardActions>
        </Card>
    );
}

export default AdminView;
