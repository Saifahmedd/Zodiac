import React, { useState } from 'react';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, Tooltip, Grid, FormControl, InputLabel, Select, MenuItem, FormHelperText, TextField, Radio, RadioGroup, FormControlLabel,FormLabel } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';



const Post = () =>{

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [showSchoolSuppliesSelect, setShowSchoolSuppliesSelect] = useState(false); // State to manage the visibility of the school supplies select component
    const [selectedSchoolSupply, setSelectedSchoolSupply] = useState(""); // State to store the selected school supply
    const [showClothesTextboxes, setShowClothesTextboxes] = useState(false);
    const [showToysTextboxes, setShowToysTextboxes] = useState(false);
    const [showSelect, setShowSelect] = useState(false);
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [season, setSeason] = useState('');
    const [material, setMaterial] = useState('');
    const [type, setType] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [quantity, setQuantity] = useState(''); // Add quantity state
    
  
  
  
  
    const toggleDrawer = () => {
      setDrawerOpen(!drawerOpen);
    };
  
    const toggleCategory = () => {
      setCategoryOpen(!categoryOpen);
    };
  
    const handleClick = () => {
      setShowSelect(true); // Show the select component when "New Post" is clicked
    };
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
    
  
    const handleSchoolSupplyChange = (event) => {
      setSelectedSchoolSupply(event.target.value);
    };
  
    const handleCategoryChange = (event) => {
      const category = event.target.value;
      setSelectedCategory(category);
      setShowSchoolSuppliesSelect(category === "School Supplies"); // Show the school supplies select if the category is "School Supplies"
      setShowClothesTextboxes(category === "Clothes"); // Show the clothes textboxes if the category is "Clothes"
      setShowToysTextboxes(category === "Toys");
    };

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

    
  
  
    return (
        <div> 
          <div>
            <Box sx={{ marginTop: 2 }}>
              <FormControl sx={{ minWidth: 220 }}>
                <InputLabel id="demo-simple-select-helper-label">Choose a Category</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="Choose a Category"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <MenuItem value=""> 
                    <em>Choose a Category</em>
                  </MenuItem>
                  <MenuItem value="Clothes">Clothes</MenuItem>
                  <MenuItem value="Toys">Toys</MenuItem>
                  <MenuItem value="Food">Food</MenuItem>
                  <MenuItem value="Medical Supplies">Medical Supplies</MenuItem>
                  <MenuItem value="School Supplies">School Supplies</MenuItem>
                  <MenuItem value="Blood Donations">Blood Donations</MenuItem>
                  <MenuItem value="Teaching">Teaching</MenuItem>
                  <MenuItem value="Medical Cases">Medical Cases</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {showSchoolSuppliesSelect && (
              <Box sx={{ marginTop: 2 }}>
                <FormControl sx={{ minWidth: 220 }}>
                  <InputLabel id="school-supply-label">Choose a School Supply</InputLabel>
                  <Select
                    labelId="school-supply-label"
                    id="school-supply-select"
                    label="Choose a School Supply"
                    value={selectedSchoolSupply}
                    onChange={handleSchoolSupplyChange}
                  >
                    <MenuItem value="">
                      <em>Choose a School Supply</em>
                    </MenuItem>
                    <MenuItem value="Book">Book</MenuItem>
                    <MenuItem value="Stationary">Stationary</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            )}
          </div>
          <div>
            {showClothesTextboxes && selectedCategory === 'Clothes' && (
              <Box sx={{ marginTop: 2 }}>
                <FormControl sx={{ minWidth: 200, marginBottom: 1 }}>
                  <InputLabel id="age-label">Age</InputLabel>
                  <TextField
                    label="Age"
                    value={age}
                    onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                        setAge(value);
                    }}
                    fullWidth
                    type="number"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} // Specify numeric input mode and pattern
                    />
                </FormControl>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <FormControl component="fieldset" style={{ marginBottom: 10 }}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        </div>
                    </FormControl>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Season</FormLabel>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <FormControlLabel value="Summer" control={<Radio />} label="Summer" />
                        <FormControlLabel value="Winter" control={<Radio />} label="Winter" />
                        <FormControlLabel value="Autumn" control={<Radio />} label="Autumn" />
                        <FormControlLabel value="Spring" control={<Radio />} label="Spring" />
                        </div>
                    </FormControl>
                    </div>
                <TextField
                  label="Material"
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  fullWidth
                  sx={{ marginBottom: 1 }}
                />
                <TextField
                    label="Quantity"
                    value={quantity}
                    onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                        setQuantity(value);
                    }}
                    fullWidth
                    type="number"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} // Specify numeric input mode and pattern
                    />
              </Box>
            )}
          </div>
          <div>
            {showToysTextboxes && selectedCategory === 'Toys' && (
              <Box sx={{ marginTop: 2 }}>
                <FormControl sx={{ minWidth: 200, marginBottom: 1 }}>
                  <InputLabel id="age-label">Age</InputLabel>
                  <TextField
                    label="Age"
                    value={age}
                    onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                        setAge(value);
                    }}
                    fullWidth
                    type="number"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} // Specify numeric input mode and pattern
                    />
                </FormControl>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <FormControl component="fieldset" style={{ marginBottom: 10 }}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        </div>
                    </FormControl>
                    </div>
                <TextField
                  label="Category"
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  fullWidth
                  sx={{ marginBottom: 1 }}
                />
                <TextField
                    label="Quantity"
                    value={quantity}
                    onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                        setQuantity(value);
                    }}
                    fullWidth
                    type="number"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} // Specify numeric input mode and pattern
                    />

               <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <FormLabel>Picture</FormLabel>
                    </Grid>
                    <Grid item>
                        <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        startIcon={<CloudUploadIcon />}
                        >
                        Upload Photo
                        <VisuallyHiddenInput type="file" />
                        </Button>
                    </Grid>
                </Grid>



              </Box>
            )}
          </div>

        </div>
      );
      
}

export default Post;

