import React, { useState } from 'react';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, Tooltip, Grid, FormControl, InputLabel, Select, MenuItem, FormHelperText, TextField, Radio, RadioGroup, FormControlLabel,FormLabel } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '@mui/material/Button';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import GoogleMap from './GoogleMap';


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
        const selectedSupply = event.target.value;
        setSelectedSchoolSupply(selectedSupply);
        setShowBooksTextboxes(selectedSupply === "Book");
        setShowStationaryTextboxes(selectedSupply === "Stationary");
        // Add any other logic for other school supplies if needed
      };
      
    
  
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

          <div>
            {showFoodTextboxes && selectedCategory === 'Food' && (
              <Box sx={{ marginTop: 2 }}>
                <TextField
                  label="Type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
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
                  sx={{ marginBottom: 1 , width:'500px'}}
                />
                <TextField
                  label="Use"
                  value={Use}
                  onChange={(e) => setUse(e.target.value)}
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

          
            <div>
            {selectedCategory === 'School Supplies' && showBooksTextboxes && (
                <Box sx={{ marginTop: 2 }}>
                    {/* Book Name */}
                    <TextField
                    label="Book Name"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                    fullWidth
                    sx={{ marginBottom: 1 }}
                    />
                    {/* Author */}
                    <TextField
                    label="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    fullWidth
                    sx={{ marginBottom: 1 }}
                    />
                    {/* Language */}
                    <TextField
                    label="Language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    fullWidth
                    sx={{ marginBottom: 1 }}
                    />
                    {/* Edition */}
                    <TextField
                    label="Edition"
                    value={edition}
                    onChange={(e) => setEdition(e.target.value)}
                    fullWidth
                    sx={{ marginBottom: 1 }}
                    />
                    {/* Short Summary */}
                    <TextField
                    label="Short Summary"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    fullWidth
                    multiline
                    rows={4}
                    sx={{ marginBottom: 1 }}
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
                    sx={{ marginBottom: 1 }}
                    />
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
                  sx={{ marginBottom: 1 }}
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
                  sx={{ marginBottom: 1 }}
                />
                <TextField
                  label="Hospital Area"
                  value={hospitalArea}
                  onChange={(e) => setHospitalArea(e.target.value)}
                  fullWidth
                  sx={{ marginBottom: 1 }}
                />
                <FormControl fullWidth>
                    <InputLabel id="government-select-label">Government</InputLabel>
                    <Select
                        labelId="government-select-label"
                        id="government-select"
                        value={selectedGovernment}
                        label="Government"
                        onChange={handleChange}
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
                  sx={{ marginBottom: 1 }}
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
                  sx={{ marginBottom: 1 }}
                />
                <TextField
                  label="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  fullWidth
                  
                  sx={{ marginBottom: 1 }}
                />
                <TextField
                  label="Subjects"
                  value={subjects}
                  onChange={(e) => setSubjects(e.target.value)}
                  fullWidth
                  sx={{ marginBottom: 1 }}
                />

                <div>
                    <GoogleMap />
                </div>

              </Box>
            )}
          </div>

          <div>
            {showMedicalCasesTextboxes && selectedCategory === 'Medical Cases' && (
              <Box sx={{ marginTop: 2 }}>
                <TextField
                  label="Patient Name"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  fullWidth
                  sx={{ marginBottom: 1 }}
                />
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
                <TextField
                  label="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  fullWidth
                  sx={{ marginBottom: 1 }}
                />
                <TextField
                  label="Speciality"
                  value={speciality}
                  onChange={(e) => setSpeciality(e.target.value)}
                  fullWidth
                  sx={{ marginBottom: 1 }}
                />
                <TextField
                  label="Case Description"
                  value={caseDescription}
                  onChange={(e) => setCaseDescription(e.target.value)}
                  fullWidth
                  sx={{ marginBottom: 1 }}
                />

                <div>
                    <GoogleMap />
                    
                </div>


              </Box>
            )}
          </div>





        </div>
      );
      
}

export default Post;

