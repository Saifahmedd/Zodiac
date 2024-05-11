import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Tooltip } from '@mui/material';
import hospital1 from './images/Hospital1.jpg';
import hospital2 from './images/hospital2.jpg';
import Reem from './images/Reem.jpg';
import Ali from './images/Electricity.jpg';
import orphanage from './images/orphanage.jpg';
import GoogleMapMarkerDialog from './GoogleMap';
import Root from './DonorRoot';

const OrganizationCard = ({ organization, onViewLocation }) => {

  return (
    <div style={{ margin: '10px' }}>
      <Card sx={{ maxWidth: 250 }}>
        <CardMedia
          component="img"
          alt="Organization"
          image={organization[6]} // Replace this with your organization image
          style={{ width: '100%', objectFit: 'cover', height: '150px' }} // Adjust the height as needed
        />
        <CardContent style={{ height: '150px' }}> {/* Fixed height for the card content */}
          <Typography gutterBottom variant="h5" component="div">
            {organization[0]} {/* Name of the organization */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Type: {organization[1]} {/* Type of the organization */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Address: {organization[2]} {/* Address of the organization */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Contact Number: {organization[3]} {/* Contact number of the organization */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Area: {organization[4]} {/* Area of the organization */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Governorate: {organization[5]} {/* Governorate of the organization */}
          </Typography>
        </CardContent>
        <CardActions>
            <Button onClick={onViewLocation}>View Location</Button>
        </CardActions>
      </Card>
    </div>
  );
};


const OrganizationList = ({ organizations, onViewLocation }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', width: '100%', marginTop: '30px' }}>
      {organizations.map((organization, index) => (
        <OrganizationCard key={index} organization={organization} onViewLocation={onViewLocation} />
      ))}
    </div>
  );
};

const DonorViewOrg = () => {
  const [searchInput, setSearchInput] = useState('');
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  const [filterCriteria, setFilterCriteria] = useState({ area: '', governorate: '', type: '' });
  const [mapDialogOpen, setMapDialogOpen] = useState(false);

  const handleViewLocation = () => {
    setMapDialogOpen(true);
  };

  const handleCloseMapDialog = () => {
    setMapDialogOpen(false);
  };
  
  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilterCriteria({ ...filterCriteria, [name]: value });
  };

  const handleReset = () => {
    setSearchInput('');
    setFilterCriteria({ area: '', governorate: '', type: '' });
  };

  // Sample organizations array
  const organizations = [
     // [name, type, address, contactNumber, email, area, governorate]
    ["Care Hospital", "Non-profit", "123 Main St, Cityville", "+1234567890", "Central District", "City A", hospital1],
    ["Canada Electricity", "Corporate", "456 Oak Ave, Townsville", "+2345678901", "Downtown", "City B", Reem],
    ["Growth Orphanage", "Non-profit", "789 Elm St, Villagetown", "+3456789012", "Suburbia", "City C", orphanage],
    ["Zodiac Hospital", "Non-profit", "321 Pine St, Countryside", "+4567890123", "Rural", "City D", hospital2],
    ["Sewedy Electricity", "Non-profit", "654 Maple Ave, Beachside", "+5678901234", "Coastal", "City E", Ali]
  ];

  // Filtering organizations based on search input and filter criteria
  const filteredOrganizations = organizations.filter(org =>
    org[0].toLowerCase().includes(searchInput.toLowerCase()) &&
    (filterCriteria.area === '' || org[4].toLowerCase() === filterCriteria.area.toLowerCase()) &&
    (filterCriteria.governorate === '' || org[5].toLowerCase() === filterCriteria.governorate.toLowerCase()) &&
    (filterCriteria.type === '' || org[1].toLowerCase() === filterCriteria.type.toLowerCase())
  );

  return (
    <div>
      <Root />
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '90vh' }}>
      <div style={{ alignSelf: 'flex-start', marginLeft: '20px', marginTop: '20px' }}>
        <TextField id="search" label="Search" variant="outlined" value={searchInput} onChange={handleSearchChange} />
      </div>
      <div style={{ alignSelf: 'flex-end', marginRight: '20px', marginTop: '-60px' }}>
        <Tooltip title="Filter">
          <IconButton onClick={() => setFilterDialogOpen(true)}>
            <FilterAltIcon />
          </IconButton>
        </Tooltip>
      </div>
      <OrganizationList organizations={filteredOrganizations} onViewLocation={handleViewLocation} />
      <Dialog open={filterDialogOpen} onClose={() => setFilterDialogOpen(false)}>
        <DialogTitle>Filter Organizations</DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ marginBottom: '10px' }}>
            <InputLabel id="area-label">Area</InputLabel>
            <Select
              labelId="area-label"
              id="area"
              name="area"
              value={filterCriteria.area}
              onChange={handleFilterChange}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="central district">Central District</MenuItem>
              <MenuItem value="downtown">Downtown</MenuItem>
              <MenuItem value="suburbia">Suburbia</MenuItem>
              <MenuItem value="rural">Rural</MenuItem>
              <MenuItem value="coastal">Coastal</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ marginBottom: '10px' }}>
            <InputLabel id="governorate-label">Governorate</InputLabel>
            <Select
              labelId="governorate-label"
              id="governorate"
              name="governorate"
              value={filterCriteria.governorate}
              onChange={handleFilterChange}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="city a">City A</MenuItem>
              <MenuItem value="city b">City B</MenuItem>
              <MenuItem value="city c">City C</MenuItem>
              <MenuItem value="city d">City D</MenuItem>
              <MenuItem value="city e">City E</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ marginBottom: '10px' }}>
            <InputLabel id="type-label">Type</InputLabel>
            <Select
              labelId="type-label"
              id="type"
              name="type"
              value={filterCriteria.type}
              onChange={handleFilterChange}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="non-profit">Non-profit</MenuItem>
              <MenuItem value="corporate">Corporate</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleReset}>Reset</Button>
          <Button onClick={() => setFilterDialogOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog
          open={mapDialogOpen}
          onClose={handleCloseMapDialog}
          maxWidth="md" // Set the maximum width of the dialog
          fullWidth // Make the dialog take up the full width of its container
      >
          <DialogTitle>Location</DialogTitle>
          <DialogContent style={{ height: '400px' }}> {/* Adjust the height of the dialog content */}
              <GoogleMapMarkerDialog style={{ width: '100%', height: '100%' }} /> {/* Set the width and height of the map */}
          </DialogContent>
      </Dialog>
    </div>
    </div>
  );
};

export default DonorViewOrg;