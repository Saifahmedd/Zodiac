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
      setShowSubmitButton(true);

      
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
                <InputLabel id="age-label">{age ? '' : 'Age'}</InputLabel>
                  <TextField
                    label="Age"
                    value={age}
                    onChange={(e) => {
                      let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                      value = Math.max(1, Math.min(100, value)); // Ensure value is between 1 and 100
                      setAge(value);
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
            {showToysTextboxes && selectedCategory === 'Toys' && (
              <Box sx={{ marginTop: 2 }}>
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
                        onChange={handleChange}
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
                    fullWidth
                    type="number"
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} // Specify numeric input mode and pattern
                    sx={{ marginBottom: 1,width:'400px' }}
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
                    <GoogleMap />
                    
                </div>


              </Box>
            )}
          </div>
            
          

        </div>
      );
      
}

export default Post;

















const clothes = [
  // [type of clothes, age, gender, season, material, quantity]
  ["T-shirt", "Kids", "Unisex", "Summer", "Cotton", 100],
  ["Coat", "Adult", "Male", "Winter", "Wool", 50],
  ["Dress", "Teen", "Female", "Spring", "Polyester", 80],
  ["Jeans", "Adult", "Female", "Fall", "Denim", 120],
  ["Sweater", "Kids", "Unisex", "Winter", "Acrylic", 70]
];

const schoolSupplies = [
     // [book name, author, language, edition, short summary, link of an image]
     ["To Kill a Mockingbird", "Harper Lee", "English", "First", "A classic novel about racial injustice and moral growth.", "https://example.com/book1.jpg"],
     ["1984", "George Orwell", "English", "Nineteen Eighty-Four", "A dystopian novel about totalitarianism and surveillance.", "https://example.com/book2.jpg"],
     ["The Great Gatsby", "F. Scott Fitzgerald", "English", "Reprint", "A story of the American Dream and its corruption in the Jazz Age.", "https://example.com/book3.jpg"],
     ["Pride and Prejudice", "Jane Austen", "English", "Revised", "A romantic novel of manners set in early 19th-century England.", "https://example.com/book4.jpg"],
     ["Harry Potter and the Philosopher's Stone", "J.K. Rowling", "English", "First", "The first book in the Harry Potter series.", "https://example.com/book5.jpg"]
      // [type, quantity]
      ["Pens", 500],
      ["Notebooks", 300],
      ["Pencils", 400],
      ["Erasers", 200],
      ["Markers", 150]    
]

const bookSupplies = [
  // [book name, author, language, edition, short summary, link of an image]
  ["To Kill a Mockingbird", "Harper Lee", "English", "First", "A classic novel about racial injustice and moral growth.", "https://example.com/book1.jpg"],
  ["1984", "George Orwell", "English", "Nineteen Eighty-Four", "A dystopian novel about totalitarianism and surveillance.", "https://example.com/book2.jpg"],
  ["The Great Gatsby", "F. Scott Fitzgerald", "English", "Reprint", "A story of the American Dream and its corruption in the Jazz Age.", "https://example.com/book3.jpg"],
  ["Pride and Prejudice", "Jane Austen", "English", "Revised", "A romantic novel of manners set in early 19th-century England.", "https://example.com/book4.jpg"],
  ["Harry Potter and the Philosopher's Stone", "J.K. Rowling", "English", "First", "The first book in the Harry Potter series.", "https://example.com/book5.jpg"]
];

const stationarySupplies = [
  // [type, quantity]
  ["Pens", 500],
  ["Notebooks", 300],
  ["Pencils", 400],
  ["Erasers", 200],
  ["Markers", 150]
];

const toys = [
  // [type of toy, age, gender, category, link of an image, quantity]
  ["LEGO Set", "5-12", "Unisex", "Building", "https://example.com/toy1.jpg", 80],
  ["Barbie Doll", "3-10", "Female", "Dolls", "https://example.com/toy2.jpg", 60],
  ["Remote Control Car", "8-14", "Male", "Vehicles", "https://example.com/toy3.jpg", 40],
  ["Puzzle", "6-10", "Unisex", "Educational", "https://example.com/toy4.jpg", 100],
  ["Action Figure", "5-12", "Male", "Action", "https://example.com/toy5.jpg", 70]
];

const food = [
  // [name, quantity(kg if fruit or vegetables and amount the rest)]
  ["Apples", "20 kg"],
  ["Rice", "50 kg"],
  ["Canned Beans", "100 cans"],
  ["Bread", "200 loaves"],
  ["Chicken", "30 kg"]
];

const medicalSupplies = [
  // [device type, use, image, quantity]
  ["Thermometer", "Measure body temperature", "https://example.com/medical1.jpg", 50],
  ["First Aid Kit", "Provide initial medical treatment", "https://example.com/medical2.jpg", 30],
  ["Blood Pressure Monitor", "Measure blood pressure", "https://example.com/medical3.jpg", 20],
  ["Nebulizer", "Deliver medication as a mist to be inhaled into the lungs", "https://example.com/medical4.jpg", 10],
  ["Stethoscope", "Listen to sounds within the body", "https://example.com/medical5.jpg", 40]
];


const bloodDonation = [
  // [name of patient, blood type, hospital name, hospital area, governorate, address]
  ["John Doe", "O+", "City Hospital", "Downtown", "Example Governorate", "123 Main Street"],
  ["Jane Smith", "AB-", "Community Hospital", "Suburb", "Another Governorate", "456 Elm Street"],
  ["Michael Johnson", "A+", "Regional Hospital", "Rural Area", "Yet Another Governorate", "789 Oak Street"],
  ["Emily Brown", "B+", "University Hospital", "Urban Area", "Different Governorate", "101 Pine Street"],
  ["David Wilson", "O-", "Children's Hospital", "Industrial Area", "New Governorate", "202 Maple Street"]
];

const teaching = [
  // [number of students, address, google marker, subject]
  [30, "123 Main St", "google marker url", "Mathematics"],
  [25, "456 Elm St", "google marker url", "Science"],
  [20, "789 Oak St", "google marker url", "English"],
  [35, "101 Pine St", "google marker url", "History"],
  [40, "202 Maple St", "google marker url", "Art"]
];

const medicalCases = [
  // [patient name, age, gender, weight, google marker, address, organization name, medical specialty, case description]
  ["John Doe", 45, "Male", 70, "google marker url", "123 Main St", "City Hospital", "Cardiology", "Patient complains of chest pain and shortness of breath."],
  ["Jane Smith", 30, "Female", 60, "google marker url", "456 Elm St", "Community Hospital", "Orthopedics", "Patient sustained a fracture in the left arm after a fall."],
  ["Michael Johnson", 60, "Male", 80, "google marker url", "789 Oak St", "Regional Hospital", "Oncology", "Patient diagnosed with stage 3 lung cancer."],
  ["Emily Brown", 20, "Female", 55, "google marker url", "101 Pine St", "University Hospital", "Neurology", "Patient presents with symptoms of migraine headaches."],
  ["David Wilson", 55, "Male", 90, "google marker url", "202 Maple St", "Children's Hospital", "Pediatrics", "Patient brought in for routine checkup and immunization."],
];