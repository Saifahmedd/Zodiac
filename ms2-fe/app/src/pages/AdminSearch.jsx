import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { useState } from 'react';
import { TextField, Checkbox, FormControlLabel, Card, CardContent, CardActions, Button, CardMedia, Box, Typography, IconButton } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Home from "./AdminHome";
import Reem from "ReemElectricity.png";
import Ali from "AliElectricity.png";
import hospital1 from "hospital.png";
import hospital2 from "hospital2.png";
import orphanage from "Orphanagee.png";

const organizations = [
    // [name, type, address, contactNumber, area, governorate, image]
    ["Care Hospital", "Non-profit", "123 Main St Cityville", "+1234567890", "City A", "Central District", hospital1],
    ["Canada Electricity", "Corporate", "456 Oak Ave Townsville", "+2345678901", "City B", "Downtown", Ali],
    ["Growth Orphanage", "Non-profit", "789 Elm St Villagetown", "+3456789012", "City C", "Downtown", orphanage],
    ["Zodiac Hospital", "Non-profit", "321 Pine St Countryside", "+4567890123", "City D", "Rural", hospital2],
    ["Sewedy Electricity", "Non-profit", "654 Maple Ave Beachside", "+5678901234", "City E", "Coastal", Reem]
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
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
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
                                key={`area-${index}`}
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
                                key={`governorate-${index}`}
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
                                    <Button size="small">Details</Button>
                                </CardActions>
                            </Card>
                        ))}
                </Box>
            </div>
        </div>
    );
}

//final
