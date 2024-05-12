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
import abrar from './images/Abrar.jpg';
import gawy from './images/gawy.jpg';
import summits from './images/summits.jpg';
import resala from './images/Resala.jpg';
import shifa from './images/shifa.jpg';
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
            <Typography variant="body1">
                <a href={organization[6]} target="_blank" rel="noopener noreferrer">View Location</a>
            </Typography>
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
    // [name, type, address, contactNumber, area, governorate, image, location]
    ["Shifa Hospital", "Hospital", "North 90 Tgamo3", "0228138618", "First Settlement", "Cairo", shifa, "https://www.google.com/maps/place/Shifa+Hospital/@30.0207462,31.4328091,17z/data=!3m1!4b1!4m6!3m5!1s0x14583d88cd9c546b:0xff07161aab2bc7db!8m2!3d30.0207462!4d31.435384!16s%2Fg%2F11fkvt_kgl?entry=ttu"],
    ["Resala Organization", "Charity", "2 Zaki Rostom", "19450", "Nasr City", "Cairo", resala, "https://www.google.com/maps/place/%D8%AC%D9%85%D8%B9%D9%8A%D8%A9+%D8%B1%D8%B3%D8%A7%D9%84%D8%A9+%D9%84%D9%84%D8%A7%D8%B9%D9%85%D8%A7%D9%84+%D8%A7%D9%84%D8%AE%D9%8A%D8%B1%D9%8A%D8%A9+%D9%81%D8%B1%D8%B9+%D9%85%D8%AF%D9%8A%D9%86%D8%A9+%D9%86%D8%B5%D8%B1%E2%80%AD/@30.0607548,31.3416552,17z/data=!3m1!4b1!4m6!3m5!1s0x14583e6ee2ebc7ab:0x5523ad87156ef241!8m2!3d30.0607502!4d31.3390803!16s%2Fg%2F1v2sj8j2?entry=ttu"],
    ["Dar elabrar Orphanage", "Orphanage", "Tagamo3", "01033027069", "Fifth Settlement", "Cairo", abrar, "https://www.google.com/maps/place/Dar+Elabrar+Elseghar+Orphanage/@30.010883,31.4251407,17z/data=!3m1!4b1!4m6!3m5!1s0x14583cc39b47e167:0x33cd27f23c2dee3b!8m2!3d30.010883!4d31.4277156!16s%2Fg%2F11c46k99bx?entry=ttu"],
    ["Air force Hospital", "Hospital", "South 90 Tgamo3", "0226176981", "Fifth Settlement", "Cairo", gawy, "https://www.google.com/maps/place/Air+Force+Specialized+Hospital/@30.0175187,31.4315697,17z/data=!3m1!4b1!4m6!3m5!1s0x14583cd75153e123:0xd6d98616e2c385f7!8m2!3d30.0175187!4d31.4341446!16s%2Fg%2F11b5wl4hdk?entry=ttu"],
    ["Summits School", "School", "Ahmed Zewail Road", "01008027892", "Maadi", "Giza", summits, "https://www.google.com/maps/place/Summits+International+Schools/@29.9747537,31.3091968,17z/data=!3m1!4b1!4m6!3m5!1s0x145838ffbf323fab:0x3d1d263fd4c316ec!8m2!3d29.9747491!4d31.3066219!16s%2Fg%2F1q5bl5_c6?entry=ttu"]
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
  {Array.from(new Set(organizations.map(org => org[4]))).map((area, index) => (
    <MenuItem key={index} value={area}>{area}</MenuItem>
  ))}
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
  {Array.from(new Set(organizations.map(org => org[5]))).map((governorate, index) => (
    <MenuItem key={index} value={governorate}>{governorate}</MenuItem>
  ))}
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
  {Array.from(new Set(organizations.map(org => org[1]))).map((type, index) => (
    <MenuItem key={index} value={type}>{type}</MenuItem>
  ))}
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