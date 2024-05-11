import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { useState } from 'react';
import { TextField, MenuItem, Card, CardContent, CardActions, Button, CardMedia, Box, Typography, IconButton } from '@mui/material';
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
    ["Growth Orphanage", "Non-profit", "789 Elm St Villagetown", "+3456789012", "City C", "Suburbia", orphanage],
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

export default function AdminSearch() {
    const [searchInput, setSearchInput] = useState(''); // Define searchInput state variable
    const [filter, setFilter] = useState(''); // Define filter state variable

    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    // Extract unique filter options and categorize them
    const categories = organizations.reduce((acc, organization) => {
        const [name, type, address, contactNumber, area, governorate] = organization;
        if (!acc.types.includes(type)) acc.types.push(type);
        if (!acc.areas.includes(area)) acc.areas.push(area);
        if (!acc.governorates.includes(governorate)) acc.governorates.push(governorate);
        return acc;
    }, { types: [], areas: [], governorates: [] });

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
                    <StyledInputBase
                        id="filter"
                        select
                        label="Filter"
                        value={filter}
                        onChange={handleFilterChange}
                        variant="outlined"
                        style={{ marginLeft: '10px' }}
                    >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem disabled>Types</MenuItem>
                        {categories.types.map((type, index) => (
                            <MenuItem key={`type-${index}`} value={type}>{type}</MenuItem>
                        ))}
                        <MenuItem disabled>Areas</MenuItem>
                        {categories.areas.map((area, index) => (
                            <MenuItem key={`area-${index}`} value={area}>{area}</MenuItem>
                        ))}
                        <MenuItem disabled>Governorates</MenuItem>
                        {categories.governorates.map((governorate, index) => (
                            <MenuItem key={`governorate-${index}`} value={governorate}>{governorate}</MenuItem>
                        ))}
                    </StyledInputBase>
                </div>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {organizations
                        .filter((organization) => {
                            const [name, type, address, contactNumber, area, governorate] = organization;
                            return (
                                name.toLowerCase().includes(searchInput.toLowerCase()) &&
                                (filter === '' ||
                                    area.toLowerCase() === filter.toLowerCase() ||
                                    governorate.toLowerCase() === filter.toLowerCase() ||
                                    type.toLowerCase() === filter.toLowerCase())
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
