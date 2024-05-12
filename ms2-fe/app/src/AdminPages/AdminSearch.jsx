import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { useState } from 'react';
import { TextField, Checkbox, FormControlLabel, Card, CardContent, CardActions, Button, CardMedia, Box, Typography, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Home from "./AdminHome";
import abrar from "./AdminPhotos/Abrar.jpg";
import gawy from "./AdminPhotos/gawy.jpg";
import shifa from "./AdminPhotos/shifa.jpg";
import resala from "./AdminPhotos/Resala.jpg";
import summits from "./AdminPhotos/summits.jpg";

const organizations = [
    // [name, type, address, contactNumber, area, governorate, image, location]
    ["Shifa Hospital", "Hospital", "North 90 Tgamo3", "0228138618", "First Settlement", "Cairo", shifa, "https://www.google.com/maps/place/Shifa+Hospital/@30.0207462,31.4328091,17z/data=!3m1!4b1!4m6!3m5!1s0x14583d88cd9c546b:0xff07161aab2bc7db!8m2!3d30.0207462!4d31.435384!16s%2Fg%2F11fkvt_kgl?entry=ttu"],
    ["Resala Organization", "Charity", "2 Zaki Rostom", "19450", "Nasr City", "Cairo", resala, "https://www.google.com/maps/place/%D8%AC%D9%85%D8%B9%D9%8A%D8%A9+%D8%B1%D8%B3%D8%A7%D9%84%D8%A9+%D9%84%D9%84%D8%A7%D8%B9%D9%85%D8%A7%D9%84+%D8%A7%D9%84%D8%AE%D9%8A%D8%B1%D9%8A%D8%A9+%D9%81%D8%B1%D8%B9+%D9%85%D8%AF%D9%8A%D9%86%D8%A9+%D9%86%D8%B5%D8%B1%E2%80%AD/@30.0607548,31.3416552,17z/data=!3m1!4b1!4m6!3m5!1s0x14583e6ee2ebc7ab:0x5523ad87156ef241!8m2!3d30.0607502!4d31.3390803!16s%2Fg%2F1v2sj8j2?entry=ttu"],
    ["Dar elabrar Orphanage", "Orphanage", "Omar ebn abdelaziz rd tgamo3", "01033027069", "Fifth Settlement", "Cairo", abrar, "https://www.google.com/maps/place/Dar+Elabrar+Elseghar+Orphanage/@30.010883,31.4251407,17z/data=!3m1!4b1!4m6!3m5!1s0x14583cc39b47e167:0x33cd27f23c2dee3b!8m2!3d30.010883!4d31.4277156!16s%2Fg%2F11c46k99bx?entry=ttu"],
    ["Air force Hospital", "Hospital", "South 90 Tgamo3", "0226176981", "Fifth Settlement", "Cairo", gawy, "https://www.google.com/maps/place/Air+Force+Specialized+Hospital/@30.0175187,31.4315697,17z/data=!3m1!4b1!4m6!3m5!1s0x14583cd75153e123:0xd6d98616e2c385f7!8m2!3d30.0175187!4d31.4341446!16s%2Fg%2F11b5wl4hdk?entry=ttu"],
    ["Summits School", "School", "Maadi el basatin", "01008027892", "Maadi", "Giza", summits, "https://www.google.com/maps/place/Summits+International+Schools/@29.9747537,31.3091968,17z/data=!3m1!4b1!4m6!3m5!1s0x145838ffbf323fab:0x3d1d263fd4c316ec!8m2!3d29.9747491!4d31.3066219!16s%2Fg%2F1q5bl5_c6?entry=ttu"]
];


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: '1px solid', // Add border style here
    borderColor: theme.palette.grey[500], // Add border color here
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const StyledInputBase = styled(TextField)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
    marginBottom: theme.spacing(1),
}));

export default function AdminSearch() {
    const [searchInput, setSearchInput] = useState(''); // Define searchInput state variable
    const [selectedAreas, setSelectedAreas] = useState([]); // Define selectedAreas state variable
    const [selectedGovernorates, setSelectedGovernorates] = useState([]); // Define selectedGovernorates state variable
    const [selectedTypes, setSelectedTypes] = useState([]); // Define selectedTypes state variable

    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedOrganization, setSelectedOrganization] = useState(null);

    const handleDetailsClick = (organization) => {
        setSelectedOrganization(organization);
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleAreaChange = (event) => {
        const { name, checked } = event.target;
        if (checked) {
            setSelectedAreas(prevSelectedAreas => [...prevSelectedAreas, name]);
        } else {
            setSelectedAreas(prevSelectedAreas => prevSelectedAreas.filter(area => area !== name));
        }
    };

    const handleGovernorateChange = (event) => {
        const { name, checked } = event.target;
        if (checked) {
            setSelectedGovernorates(prevSelectedGovernorates => [...prevSelectedGovernorates, name]);
        } else {
            setSelectedGovernorates(prevSelectedGovernorates => prevSelectedGovernorates.filter(governorate => governorate !== name));
        }
    };

    const handleTypeChange = (event) => {
        const { name, checked } = event.target;
        if (checked) {
            setSelectedTypes(prevSelectedTypes => [...prevSelectedTypes, name]);
        } else {
            setSelectedTypes(prevSelectedTypes => prevSelectedTypes.filter(type => type !== name));
        }
    };

    return (
        <div>
            <Home />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '90vh' }}>
                <div style={{ alignSelf: 'flex-start', marginLeft: '20px', marginTop: '20px' }}>
                    <StyledInputBase id="search" label="Search" variant="outlined" onChange={handleSearchChange} />
                </div>
                <div style={{ alignSelf: 'flex-end', marginRight: '20px', marginTop: '-60px' }}>
                    <IconButton>
                        <FilterAltIcon />
                    </IconButton>
                    <div style={{ marginLeft: '10px' }}>
                        <Typography variant="subtitle2">Areas:</Typography>
                        {organizations.reduce((acc, [, , , , area]) => {
                            if (!acc.includes(area)) acc.push(area);
                            return acc;
                        }, []).map((area, index) => (
                            <StyledFormControlLabel
                                key={'area-${index}'}
                                control={<Checkbox checked={selectedAreas.includes(area)} onChange={handleAreaChange} name={area} />}
                                label={area}
                            />
                        ))}
                    </div>
                    <div style={{ marginLeft: '10px' }}>
                        <Typography variant="subtitle2">Governorates:</Typography>
                        {organizations.reduce((acc, [, , , , , governorate]) => {
                            if (!acc.includes(governorate)) acc.push(governorate);
                            return acc;
                        }, []).map((governorate, index) => (
                            <StyledFormControlLabel
                                key={'governorate-${index}'}
                                control={<Checkbox checked={selectedGovernorates.includes(governorate)} onChange={handleGovernorateChange} name={governorate} />}
                                label={governorate}
                            />
                        ))}
                    </div>
                    <div style={{ marginLeft: '10px' }}>
                        <Typography variant="subtitle2">Types:</Typography>
                        {organizations.reduce((acc, [, type]) => {
                            if (!acc.includes(type)) acc.push(type);
                            return acc;
                        }, []).map((type, index) => (
                            <StyledFormControlLabel
                            key={`type-${index}`}
                            control={<Checkbox checked={selectedTypes.includes(type)} onChange={handleTypeChange} name={type} />}
                                label={type}
                            />
                        ))}
                    </div>
                </div>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {organizations
                        .filter((organization) => {
                            const [, type, , , area, governorate] = organization;
                            return (
                                organization[0].toLowerCase().includes(searchInput.toLowerCase()) &&
                                (selectedAreas.length === 0 || selectedAreas.includes(area)) &&
                                (selectedGovernorates.length === 0 || selectedGovernorates.includes(governorate)) &&
                                (selectedTypes.length === 0 || selectedTypes.includes(type))
                            );
                        })
                        .map((organization, index) => (
                            <Card key={index} sx={{ margin: '10px', fixedwidth: '300px' }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={organization[6]} // Assuming image index is 6 (governorate)
                                    alt={organization[0]}
                                />
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {organization[0]}
                                    </Typography>
                                    <Typography color="text.secondary" gutterBottom>
                                        {organization[2]}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" onClick={() => handleDetailsClick(organization)}>Details</Button>
                                </CardActions>
                            </Card>
                        ))}
                    <Dialog open={dialogOpen} onClose={handleCloseDialog}>
                        <DialogTitle>Organization Details</DialogTitle>
                        <DialogContent>
                            {selectedOrganization && (
                                <DialogContentText>
                                    <Typography variant="h6">{selectedOrganization[0]}</Typography>
                                    <Typography variant="body1">Number: {selectedOrganization[3]}</Typography>
                                    <Typography variant="body1">Address: {selectedOrganization[2]}</Typography>
                                    <Typography variant="body1">Type: {selectedOrganization[1]}</Typography>
                                    <Typography variant="body1">Area: {selectedOrganization[4]}</Typography>
                                    <Typography variant="body1">Governorate: {selectedOrganization[5]}</Typography>
                                    <Typography variant="body1">
                                        Location: <a href={selectedOrganization[7]} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                                    </Typography>
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

//final