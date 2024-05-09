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
import DeleteIcon from '@mui/icons-material/Delete';

const AdminDelete = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Zodiac
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Organization for electrical supplies.
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" size="medium" endIcon={<DeleteIcon />} color="error">Delete</Button>
            </CardActions>
        </Card>
    );
}

export default AdminDelete;