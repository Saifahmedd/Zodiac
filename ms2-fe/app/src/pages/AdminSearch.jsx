import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Stack, TextField, Tooltip, Card, CardContent, CardActions, Button, CardMedia } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Reem from "ReemElectricity.png";
import Ali from "AliElectricity.png";
import hospital1 from "hospital.png";
import hospital2 from "hospital2.png";
import orphanage from "Orphanagee.png";

const pages = ['Admin'];
const settings = ['Profile', 'Change Password', 'Logout'];
const drawerWidth = 300;

const organizations = [
    ["Care Hospital", "contact@care.com", "123 Main St, City, Country", { latitude: 40.7128, longitude: -74.006 }, "Hospital", hospital1],
    ["Reem Electricity", "contact@reem.com", "456 Elm St, City, Country", { latitude: 34.0522, longitude: -118.2437 }, "Electrical", Reem],
    ["Growth Orphanage", "contact@growth.com", "789 Oak St, City, Country", { latitude: 51.5074, longitude: -0.1278 }, "Orphanage", orphanage],
    ["Zodiac Hospital", "contact@zodiac.com", "101 Pine St, City, Country", { latitude: 35.6895, longitude: 139.6917 }, "Hospital", hospital2],
    ["Ali Electricity", "contact@ali.com", "111 Maple St, City, Country", { latitude: 48.8566, longitude: 2.3522 }, "Electrical", Ali]
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

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: calc(1em + ${theme.spacing(4)}),
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

    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
    };

    const filteredOrganizations = organizations.filter(organization => {
        const [name] = organization;
        return name.toLowerCase().includes(searchInput.toLowerCase());
    });

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '90vh' }}>
            <div style={{ alignSelf: 'flex-start', marginLeft: '20px', marginTop: '20px' }}>
                <TextField id="search" label="Search" variant="outlined" onChange={handleSearchChange} />
            </div>
            <div style={{ alignSelf: 'flex-end', marginRight: '20px', marginTop: '-60px' }}>
                <IconButton>
                    <FilterAltIcon />
                </IconButton>
            </div>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {filteredOrganizations.map((organization, index) => (
                    <Card key={index} style={{ margin: '10px', minWidth: '200px', maxWidth: '300px' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={organization[5]}
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
    );
}