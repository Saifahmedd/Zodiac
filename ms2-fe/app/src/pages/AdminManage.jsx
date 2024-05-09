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
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import styled from "styled-components";


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
const AdminManage = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                title="Array Test"
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

                <Button variant="contained" size="medium" endIcon={<CheckIcon />} color="success">Accept</Button>
                <Button variant="contained" size="medium" endIcon={<ClearIcon />} color="error">Reject</Button>
            </CardActions>
        </Card>
    );
}

export default AdminManage;




