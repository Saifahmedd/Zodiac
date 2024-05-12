import React, { useState } from 'react';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, Tooltip, Grid, FormControl, InputLabel, Select, MenuItem, FormHelperText, TextField, Radio, RadioGroup, FormControlLabel,FormLabel } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import GoogleMap from './GoogleMap';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link component


const governments = [
    'Cairo',
    'Alexandria',
    'Giza',
    'Shubra El Kheima',
    'Port Said',
    'Suez',
    'Luxor',
    'Mansoura',
    'El-Mahalla El-Kubra',
    'Tanta',
    'Asyut',
    'Ismailia',
    'Faiyum',
    'Zagazig',
    'Aswan',
    'Damietta',
    'Damanhur',
    'Minya',
    'Beni Suef',
    'Hurghada',
    'Qena',
    'Sohag',
    'Shibin El Kom',
    'Banha',
    'Kafr el-Sheikh',
    'Arish',
    'Mallawi',
    '10th of Ramadan City',
    'Bilbays',
    'Marsa Matruh',
    'Idfu',
    'Mit Ghamr',
    'Al-Hamidiyya',
];

const bloodTypes = [
    'A+',
    'A-',
    'B+',
    'B-',
    'AB+',
    'AB-',
    'O+',
    'O-',
];

const Post = ({ addPost }) =>{

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
    const [device, setDevice] = useState('');
    const [material, setMaterial] = useState('');
    const [type, setType] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [quantity, setQuantity] = useState(''); // Add quantity state
    const [showFoodTextboxes, setShowFoodTextboxes] = useState(false);
    const [showMedicalSuppliesTextboxes, setShowMedicalSuppliesTextboxes] = useState(false);
    const [devices, setDevices] = useState('');
    const [Use, setUse] = useState('');
    const [showBooksTextboxes, setShowBooksTextboxes] = useState(false);
    const [bookName, setBookName] = useState('');
    const [author, setAuthor] = useState('');
    const [language, setLanguage] = useState('');
    const [edition, setEdition] = useState('');
    const [summary, setSummary] = useState('');
    const [amount, setAmount] = useState('');
    const [showSchoolSuppliesTextboxes, setShowSchoolSuppliesTextboxes] = useState(false); 
    const [showStationaryTextboxes,setShowStationaryTextboxes] = useState(false); 
    const [showBloodDonationsTextboxes,setShowBloodDonationsTextboxes] = useState(false); 
    const [patientName, setPatientName] = useState('');
    const [hospitalName, setHospitalName] = useState('');
    const [hospitalArea, setHospitalArea] = useState('');
    const [selectedGovernment, setSelectedGovernment] = useState('');
    const [hospitalAddress, setHospitalAddress] = useState('');
    const [selectedBloodType, setSelectedBloodType] = useState('');
    const [showTeachingboxes, setShowTeachingTextboxes] = useState('');
    const [address, setAddress] = useState('');
    const [subjects, setSubjects] = useState('');
    const [numberOfStudents, setNumberOfStudents] = useState('');
    const [showMedicalCasesTextboxes,setShowMedicalCasesTextboxes] = useState(false); 
    const [speciality, setSpeciality] = useState('');
    const [caseDescription, setCaseDescription] = useState('');
    const [formData, setFormData] = useState([]);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const submittedData = [];
    const [showSubmitButton, setShowSubmitButton] = useState(false);

    const [isMapOpen, setIsMapOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);


    const [errors, setErrors] = useState({});
    const validateForm = (selectedCategory) => {
      const errors = {};
    
      switch (selectedCategory) {
        case 'Clothes':
          if (!age) {
            errors.age = 'Age is required';
          }
          if (!gender) {
            errors.gender = 'Gender is required';
          }
          if (!season) {
            errors.season = 'Season is required';
          }
          if (!material) {
            errors.material = 'Material is required';
          }
          if (!quantity) {
            errors.quantity = 'Quantity is required';
          }
          break;
        case 'Toys':
          if (!age) {
            errors.age = 'Age is required';
          }
          if (!gender) {
            errors.gender = 'Gender is required';
          }
          if (!material) {
            errors.category = 'Category is required';
          }
          if (!quantity) {
            errors.quantity = 'Quantity is required';
          }
          break;
        case 'Food':
          if (!type) {
            errors.type = 'Type is required';
          }
          if (!quantity) {
            errors.quantity = 'Quantity is required';
          }
          break;
        case 'Medical Supplies':
          if (!devices) {
            errors.devices = 'Devices are required';
          }
          if (!type) {
            errors.type = 'Type is required';
          }
          if (!Use) {
            errors.use = 'Use is required';
          }
          if (!quantity) {
            errors.quantity = 'Quantity is required';
          }
          break;
        case 'School Supplies':
          if (!selectedSchoolSupply) {
            errors.selectedSchoolSupply = 'School Supply is required';
          }
          break;
        case 'Blood Donations':
          if (!patientName) {
            errors.patientName = 'Patient Name is required';
          }
          if (!selectedBloodType) {
            errors.selectedBloodType = 'Blood Type is required';
          }
          if (!hospitalName) {
            errors.hospitalName = 'Hospital Name is required';
          }
          if (!hospitalArea) {
            errors.hospitalArea = 'Hospital Area is required';
          }
          if (!selectedGovernment) {
            errors.selectedGovernment = 'Government is required';
          }
          if (!hospitalAddress) {
            errors.hospitalAddress = 'Hospital Address is required';
          }
          break;
        case 'Teaching':
          if (!numberOfStudents) {
            errors.numberOfStudents = 'Number of Students is required';
          }
          if (!address) {
            errors.address = 'Address is required';
          }
          if (!subjects) {
            errors.subjects = 'Subjects are required';
          }
          break;
        case 'Medical Cases':
          if (!patientName) {
            errors.patientName = 'Patient Name is required';
          }
          if (!age) {
            errors.age = 'Age is required';
          }
          if (!gender) {
            errors.gender = 'Gender is required';
          }
          if (!material) {
            errors.material = 'Category is required';
          }
          if (!quantity) {
            errors.quantity = 'Quantity is required';
          }
          if (!address) {
            errors.address = 'Address is required';
          }
          if (!speciality) {
            errors.speciality = 'Speciality is required';
          }
          if (!caseDescription) {
            errors.caseDescription = 'Case Description is required';
          }
          break;
        default:
          break;
      }
    
      setErrors(errors);
      return Object.keys(errors).length === 0;
    };
    


  
    const handleSubmitButton = (selectedCategory) => {
      const isValid = validateForm(selectedCategory);
      if (isValid) {
        setIsSubmitted(true);
      }
      else{
        alert('Please enter the missing data.');
      }
    };
  
    const handleClose = () => {
      setIsSubmitted(false);
      
    };
    const openMap = () => {
      setIsMapOpen(true);
    };
  
    const closeMap = () => {
      setIsMapOpen(false);
    };
    const clearBloodType = () => {
      setSelectedBloodType('');
    };
    
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
    
  
    const handleSchoolSupplyChange = (event) => {
        const selectedSupply = event.target.value;
        setSelectedSchoolSupply(selectedSupply);
        setShowBooksTextboxes(selectedSupply === "Book");
        setShowStationaryTextboxes(selectedSupply === "Stationary");
        // Add any other logic for other school supplies if needed
      };

      const handleGovernmentChange = (event) => {
        setSelectedGovernment(event.target.value);
      };

      const clearGovernment = () => {
        setSelectedGovernment('');
      };
      
      const handleSeasonChange = (event) => {
          setSeason(event.target.value);
      };
      
      const handleCategoryChange2 = (category) => {
        setSelectedCategory(category);
        // Clear all state variables when category changes to 'Clothes'
        if (category === 'Clothes') {
          setAge('');
          setGender('');
          setSeason('');
          setMaterial('');
          setQuantity('');
        }
        if(category === 'toys'){
          setAge('');
          setGender('');
          setQuantity('');
        }
        if(category === 'food'){
          setType('');
          setQuantity('');
        }
        if(category ==='medicalSupplis'){
          setDevices('');
          setType('');
          setUse('');
          setQuantity('');
        }
        if(category === 'schoolSupplies'){
          setBookName('');
          setAuthor('');
          setLanguage('');
          setEdition('');
          setSummary('');
          setAmount('');
          setType('');
        }
        if(category === 'bloodDonation'){
          clearBloodType();
          clearGovernment();
          setPatientName('');
          setHospitalName('');
          setHospitalArea('');
          setHospitalAddress('');
        }
        if(category === 'medicalCases'){
          setPatientName('');
          setAge('');
          setMaterial('');
          setQuantity('');
          setAddress('');
          setSpeciality('');
          setCaseDescription('');
        }
        if(category === 'teaching'){
          setNumberOfStudents('');
          setAddress('');
          setSubjects('');
        }
      }
  
    const handleCategoryChange = (event) => {
      const category = event.target.value;
      setSelectedCategory(category);
      setShowSchoolSuppliesSelect(category === "School Supplies"); // Show the school supplies select if the category is "School Supplies"
      setShowClothesTextboxes(category === "Clothes"); // Show the clothes textboxes if the category is "Clothes"
      setShowToysTextboxes(category === "Toys");
      setShowFoodTextboxes(category === "Food");
      setShowMedicalSuppliesTextboxes(category === "Medical Supplies");
      setSelectedSchoolSupply(event.target.value);
      setShowBooksTextboxes(event.target.value === "Book"); // Show the books textboxes if the selected school supply is "Book"
      setShowSchoolSuppliesTextboxes(category === "School Supplies");
      setShowBloodDonationsTextboxes(category === "Blood Donations");
      setShowTeachingTextboxes(category === "Teaching");
      setShowMedicalCasesTextboxes(category === "Medical Cases");
      setShowSubmitButton(true);

      
    };

    const [labelVisible, setLabelVisible] = useState(false);
  
    const handleSelectFocus = () => {
      setLabelVisible(true);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
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

      const handleBloodTypeChange = (event) => {
        setSelectedBloodType(event.target.value);
    };


  // Function to handle closing the popup message
      const handleCloseSnackbar = () => {
      setOpenSnackbar(false);
    };
      const handleSubmit = () => {
        // Prepare the data to be submitted
        const data = {
            // Include all the necessary fields here
        };

        // Add the data to the submittedData array list
        submittedData.push(data);

        // Show a pop-up message
        alert('Data is submitted successfully');
      };

       // Function to handle form submission
      const handlePostSubmit = () => {
        // Prepare the new post object
        const newPost = {
          // Add post data here...
        };

        // Call the addPost function passed from the parent component
        addPost(newPost);
  };


      const newPost = {
        // Create a new post object with the data you want to submit
        // For example, if you have some state variables like age, gender, material, etc.
        age: age,
        gender: gender,
        material: material,
        // Add other fields as needed
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
                  <MenuItem value="Clothes" onClick={() => handleCategoryChange2('Clothes')}>Clothes</MenuItem>
                  <MenuItem value="Toys"  onClick={() => handleCategoryChange2('toys')}>Toys</MenuItem>
                  <MenuItem value="Food" onClick={() => handleCategoryChange2('food')}>Food</MenuItem>
                  <MenuItem value="Medical Supplies" onClick={() => handleCategoryChange2('medicalSupplies')}>Medical Supplies</MenuItem>
                  <MenuItem value="School Supplies" onClick={() => handleCategoryChange2('schoolSupplies')}>School Supplies</MenuItem>
                  <MenuItem value="Blood Donations" onClick={() => handleCategoryChange2('bloodDonation')}>Blood Donations</MenuItem>
                  <MenuItem value="Teaching" onClick={() => handleCategoryChange2('teaching')}>Teaching</MenuItem>
                  <MenuItem value="Medical Cases" onClick={() => handleCategoryChange2('medicalCases')}>Medical Cases</MenuItem>
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
      {/* Render textboxes when selectedCategory is 'Clothes' */}
      {selectedCategory === 'Clothes' && (
        <Box sx={{ marginTop: 2 }}>
<FormControl sx={{ minWidth: 220 }}>
        <InputLabel 
          id="age-select-label" 
          htmlFor="age-select" 
          shrink={labelVisible}
          focused={labelVisible}
        >
          Age Range
        </InputLabel>
        <Select
          labelId="age-select-label"
          id="age-select"
          value={age}
          onChange={handleChange}
          onFocus={handleSelectFocus}
          fullWidth
          label="Age Range"
          displayEmpty
          inputProps={{
            name: 'age',
            id: 'age',
          }}
          variant="standard"
        >
          {!age && (
            <MenuItem value="" disabled>
            </MenuItem>
          )}
          <MenuItem value="0-6 months">0 - 6 months</MenuItem>
          <MenuItem value="6-12 months">6 - 12 months</MenuItem>
          <MenuItem value="1-2 years">1 - 2 years</MenuItem>
          <MenuItem value="1-2 years">2 - 4 years</MenuItem>
          <MenuItem value="1-2 years">4 - 6 years</MenuItem>
          <MenuItem value="1-2 years">6 - 8 years</MenuItem>
          <MenuItem value="1-2 years">8 - 10 years</MenuItem>
          <MenuItem value="1-2 years">10 - 12 years</MenuItem>
          <MenuItem value="1-2 years">12 - 14 years</MenuItem>
          <MenuItem value="1-2 years">14 - 16 years</MenuItem>
          <MenuItem value="1-2 years">16 - 18 years</MenuItem>
          <MenuItem value="1-2 years">18 - 20 years</MenuItem>
          {/* Add more age ranges as needed */}
        </Select>
      </FormControl>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <FormControl component="fieldset" style={{ marginBottom: 10 }}>
              <FormLabel component="legend">Gender</FormLabel>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  value={gender}
                  onChange={handleGenderChange}
                  style={{ display: 'flex', flexDirection: 'row' }}
                >
                  <FormControlLabel value="Male" control={<Radio />} label="Male" />
                  <FormControlLabel value="Female" control={<Radio />} label="Female" />
                </RadioGroup>
              </div>
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">Season</FormLabel>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <RadioGroup
                  aria-label="season"
                  name="season"
                  value={season}
                  onChange={handleSeasonChange}
                  style={{ display: 'flex', flexDirection: 'row' }}
                >
                  <FormControlLabel value="Summer" control={<Radio />} label="Summer" />
                  <FormControlLabel value="Winter" control={<Radio />} label="Winter" />
                  <FormControlLabel value="Autumn" control={<Radio />} label="Autumn" />
                  <FormControlLabel value="Spring" control={<Radio />} label="Spring" />
                </RadioGroup>
              </div>
            </FormControl>
          </div>
          <TextField
            label="Material"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            fullWidth
            sx={{ marginBottom: 1, width: '400px' }}
          />
          <br />
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
            sx={{ marginBottom: 1, width: '400px' }}
          />
        </Box>
      )}
          </div>

          <div>
            {showToysTextboxes && selectedCategory === 'Toys' && (
              <Box sx={{ marginTop: 2 }}>
<FormControl sx={{ minWidth: 220 }}>
        <InputLabel 
          id="age-select-label" 
          htmlFor="age-select" 
          shrink={labelVisible}
          focused={labelVisible}
        >
          Age Range
        </InputLabel>
        <Select
          labelId="age-select-label"
          id="age-select"
          value={age}
          onChange={handleChange}
          onFocus={handleSelectFocus}
          fullWidth
          label="Age Range"
          displayEmpty
          inputProps={{
            name: 'age',
            id: 'age',
          }}
          variant="standard"
        >
          {!age && (
            <MenuItem value="" disabled>
            </MenuItem>
          )}
          <MenuItem value="0-6 months">0 - 6 months</MenuItem>
          <MenuItem value="6-12 months">6 - 12 months</MenuItem>
          <MenuItem value="1-2 years">1 - 2 years</MenuItem>
          <MenuItem value="1-2 years">2 - 4 years</MenuItem>
          <MenuItem value="1-2 years">4 - 6 years</MenuItem>
          <MenuItem value="1-2 years">6 - 8 years</MenuItem>
          <MenuItem value="1-2 years">8 - 10 years</MenuItem>
          <MenuItem value="1-2 years">10 - 12 years</MenuItem>
          <MenuItem value="1-2 years">12 - 14 years</MenuItem>
          <MenuItem value="1-2 years">14 - 16 years</MenuItem>
          <MenuItem value="1-2 years">16 - 18 years</MenuItem>
          <MenuItem value="1-2 years">18 - 20 years</MenuItem>
          {/* Add more age ranges as needed */}
        </Select>
      </FormControl>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <FormControl component="fieldset" style={{ marginBottom: 10 }}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <RadioGroup
                  aria-label="gender"
                  name="gender"
                  value={gender}
                  onChange={handleGenderChange}
                  style={{ display: 'flex', flexDirection: 'row' }}
                >
                  <FormControlLabel value="Male" control={<Radio />} label="Male" />
                  <FormControlLabel value="Female" control={<Radio />} label="Female" />
                </RadioGroup>
                        </div>
                    </FormControl>
                    </div>
                <TextField
                  label="Category"
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  fullWidth
                  sx={{ marginBottom: 1, width:'400px' }}
                />
                <br/>
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
                    sx={{ marginBottom: 1, width:'400px' }}
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

          <div>
            {showFoodTextboxes && selectedCategory === 'Food' && (
              <Box sx={{ marginTop: 2 }}>
                <TextField
                  label="Type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  fullWidth
                  sx={{ marginBottom: 1, width:'400px' }}
                />
                <br/>
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
                    sx={{ marginBottom: 1, width:'400px' }}
                    />



              </Box>
            )}         
          </div>

          <div>
            {showMedicalSuppliesTextboxes && selectedCategory === 'Medical Supplies' && (
              <Box sx={{ marginTop: 2 }}>
                <TextField
                  label="Devices"
                  value={devices}
                  onChange={(e) => setDevices(e.target.value)}
                  fullWidth
                  sx={{ marginBottom: 1, width:'400px' }}
                />
                <br/>
                <TextField
                  label="Type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  fullWidth
                  sx={{ marginBottom: 1,width:'400px' }}
                />
                <br/>
                <TextField
                  label="Use"
                  value={Use}
                  onChange={(e) => setUse(e.target.value)}
                  fullWidth
                  sx={{ marginBottom: 1,width:'400px' }}
                />
                <br/>
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
                    sx={{ marginBottom: 1,width:'400px' }}
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

          
            <div>
            {selectedCategory === 'School Supplies' && showBooksTextboxes && (
                <Box sx={{ marginTop: 2 }}>
                    {/* Book Name */}
                    <TextField
                    label="Book Name"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                    fullWidth
                    sx={{ marginBottom: 1,width:'400px' }}
                    />
                    <br/>
                    {/* Author */}
                    <TextField
                    label="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    fullWidth
                    sx={{ marginBottom: 1, width:'400px' }}
                    />
                    <br/>
                    {/* Language */}
                    <TextField
                    label="Language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    fullWidth
                    sx={{ marginBottom: 1,width:'400px' }}
                    />
                    <br/>
                    {/* Edition */}
                    <TextField
                    label="Edition"
                    value={edition}
                    onChange={(e) => setEdition(e.target.value)}
                    fullWidth
                    sx={{ marginBottom: 1,width:'400px' }}
                    />
                    <br/>
                    {/* Short Summary */}
                    <TextField
                    label="Short Summary"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    fullWidth
                    multiline
                    rows={4}
                    sx={{ marginBottom: 1,width:'400px' }}
                    />
                    {/* Picture */}
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
                    <br/>
                    {/* Quantity */}
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
                    sx={{ marginBottom: 1,width:'400px' }}
                    />
                </Box>
                )}               
          </div>

          <div>
            {selectedCategory === 'School Supplies' && showStationaryTextboxes && (
                <Box sx={{ marginTop: 2 }}>
                    <TextField
                    label="Type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    fullWidth
                    sx={{ marginBottom: 1,width:'400px' }}
                    />
                    <br/>
                    <TextField
                    label="Amount"
                    value={amount}
                    onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                        setAmount(value);
                    }}
                    fullWidth
                    type="number"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} // Specify numeric input mode and pattern
                    sx={{ marginBottom: 1,width:'400px' }}
                    />
                </Box>
                )}

          </div>

          <div>
            {showBloodDonationsTextboxes && selectedCategory === 'Blood Donations' && (
              <Box sx={{ marginTop: 2 }}>
                <TextField
                  label="Patient Name"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  fullWidth
                  sx={{ marginBottom: 1,width:'400px' }}
                />

            <Box>
            <FormControl fullWidth>
                <InputLabel id="blood-type-label">Blood Type</InputLabel>
                <Select
                    labelId="blood-type-label"
                    id="blood-type-select"
                    value={selectedBloodType}
                    label="Blood Type"
                    onChange={handleBloodTypeChange}
                    sx={{ marginBottom: 1,width:'400px' }}
                >
                    <MenuItem value="">
                        <em>Choose a Blood Type</em>
                    </MenuItem>
                    {bloodTypes.map((type) => (
                        <MenuItem key={type} value={type}>
                            {type}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
                <TextField
                  label="Hospital Name"
                  value={hospitalName}
                  onChange={(e) => setHospitalName(e.target.value)}
                  fullWidth
                  sx={{ marginBottom: 1,width:'400px' }}
                />
                <br/>
                <TextField
                  label="Hospital Area"
                  value={hospitalArea}
                  onChange={(e) => setHospitalArea(e.target.value)}
                  fullWidth
                  sx={{ marginBottom: 1,width:'400px' }}
                />
                <FormControl fullWidth>
                    <InputLabel id="government-select-label">Government</InputLabel>
                    <Select
                        labelId="government-select-label"
                        id="government-select"
                        value={selectedGovernment}
                        label="Government"
                        onChange={handleGovernmentChange}
                        sx={{ marginBottom: 1,width:'400px' }}
                    >
                        {governments.map((government) => (
                        <MenuItem key={government} value={government}>
                            {government}
                        </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                  label="Hospital Address"
                  value={hospitalAddress}
                  onChange={(e) => setHospitalAddress(e.target.value)}
                  fullWidth
                  sx={{ marginBottom: 1,width:'400px' }}
                />
                </Box>
                )}
            </div>


            <div>
            {showTeachingboxes && selectedCategory === 'Teaching' && (
              <Box sx={{ marginTop: 2 }}>
                <TextField
                  label="Number of Students"
                  value={numberOfStudents}
                  onChange={(e) => setNumberOfStudents(e.target.value)}
                  fullWidth
                  sx={{ marginBottom: 1 ,width:'400px'}}
                />
                <br/>
                <TextField
                  label="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  fullWidth
                  
                  sx={{ marginBottom: 1 ,width:'400px'}}
                />
                <br/>
                <TextField
                  label="Subjects"
                  value={subjects}
                  onChange={(e) => setSubjects(e.target.value)}
                  fullWidth
                  sx={{ marginBottom: 1,width:'400px' }}
                />
                <div>
      <Button onClick={openMap}>Insert Location</Button>
      <Dialog open={isMapOpen} onClose={closeMap}>
        <DialogTitle>Insert Location</DialogTitle>
        <DialogContent>
          <GoogleMap />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeMap}>Done</Button>
        </DialogActions>
      </Dialog>
    </div>

              </Box>
            )}
          </div>

          <div>
            {showMedicalCasesTextboxes && selectedCategory === 'Medical Cases' && (
  <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
  <TextField
                  label="Patient Name"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  fullWidth
                  sx={{ marginBottom: 1,width:'400px' }}
                />
                <br/>
                <FormControl sx={{ minWidth: 200, marginBottom: 1 }}>
                <InputLabel id="age-label">{age ? '' : 'Age'}</InputLabel>
                <TextField
                    label="Age"
                    value={age}
                    onChange={(e) => {
                        let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                        value = Math.max(1, Math.min(100, value)); // Ensure value is between 1 and 100
                        setAge(value);
                    }}
                    onKeyPress={(e) => {
                        // Prevent non-numeric characters from being entered
                        if (!/\d/.test(e.key)) {
                            e.preventDefault();
                        }
                    }}
                    fullWidth
                    type="number"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} // Specify numeric input mode and pattern
                    sx={{ marginBottom: 1, width:'400px' }}
                />
                </FormControl>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <FormControl component="fieldset" style={{ marginBottom: 10 }}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <RadioGroup
                  aria-label="gender"
                  name="gender"
                  value={gender}
                  onChange={handleGenderChange}
                  style={{ display: 'flex', flexDirection: 'row' }}
                >
                  <FormControlLabel value="Male" control={<Radio />} label="Male" />
                  <FormControlLabel value="Female" control={<Radio />} label="Female" />
                </RadioGroup>
                        </div>
                    </FormControl>
                    </div>
                <TextField
                  label="Category"
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  fullWidth
                  sx={{ marginBottom: 1,width:'400px' }}
                />
                <br/>
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
                    sx={{ marginBottom: 1,width:'400px' }}
                    />
                    <br/>
                <TextField
                  label="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  fullWidth
                  sx={{ marginBottom: 1,width:'400px' }}
                />
                <br/>
                <TextField
                  label="Speciality"
                  value={speciality}
                  onChange={(e) => setSpeciality(e.target.value)}
                  fullWidth
                  sx={{ marginBottom: 1,width:'400px' }}
                />
                <br/>
                <TextField
                  label="Case Description"
                  value={caseDescription}
                  onChange={(e) => setCaseDescription(e.target.value)}
                  fullWidth
                  sx={{ marginBottom: 1,width:'400px' }}
                />

<div>
      <Button onClick={openMap}>Insert Location</Button>
      <Dialog open={isMapOpen} onClose={closeMap}>
        <DialogTitle>Insert Location</DialogTitle>
        <DialogContent>
          <GoogleMap />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeMap}>Done</Button>
        </DialogActions>
      </Dialog>
    </div>


              </Box>
            )}
          </div>
          {selectedCategory && (
            <Button onClick={() => handleSubmitButton(selectedCategory)}>Submit</Button>
      )}

<Dialog open={isSubmitted} onClose={handleClose}>
        <DialogTitle>Post Submitted</DialogTitle>
        <DialogContent>
          Your post has been submitted successfully.
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} component={Link} to="/">OK</Button>
        </DialogActions>
      </Dialog>

            
          

        </div>
      );
      
}

export default Post;