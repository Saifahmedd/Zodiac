import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, Tooltip, Grid, FormControl, InputLabel, Select, MenuItem, FormHelperText, TextField, Radio, RadioGroup, FormControlLabel,FormLabel } from '@mui/material';
import { AccessTime, AccountCircle, Bloodtype, Category, Checkroom, Edit, EventNote, ExpandLess, ExpandMore, Fastfood, Groups, Home, Mail, Masks, MenuBook, School, Toys, Vaccines,FavoriteBorder } from '@mui/icons-material';
import Logo from './Logo_Main.jpg';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

const Post = () =>{

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [showSchoolSuppliesSelect, setShowSchoolSuppliesSelect] = useState(false); // State to manage the visibility of the school supplies select component
    const [selectedSchoolSupply, setSelectedSchoolSupply] = useState(""); // State to store the selected school supply
    const [showClothesTextboxes, setShowClothesTextboxes] = useState(false);
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
    };
    
  
  
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
                  <Select
                    labelId="age-label"
                    id="age-select"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  >
                    {Array.from({ length: 100 }, (_, i) => i + 1).map((num) => (
                      <MenuItem key={num} value={num}>{num}</MenuItem>
                    ))}
                  </Select>
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
                  onChange={(e) => setQuantity(e.target.value)}
                  fullWidth
                />
              </Box>
            )}
          </div>
        </div>
      );
      
}

export default Post;

