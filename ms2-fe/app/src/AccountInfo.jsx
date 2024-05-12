import React, { useState } from 'react';
import { Box, Stack, Typography, Avatar, Divider, Button, TextField, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Person, Email, Phone, Password } from '@mui/icons-material';
import Logo from './Resala.png';

const AccountInfo = () => {
    const [firstName, setFirstName] = useState("Malak");
    const [lastName, setLastName] = useState("Swar");
    const [gender, setGender] = useState("Female");
    const [email, setEmail] = useState("contact_us@resala.org");
    const [password, setPassword] = useState("Hello@123");
    const [contactNumber, setContactNumber] = useState("0100-876-9261");
    const [organizationName, setOrganizationName] = useState("Resala");
    const [organizationType, setOrganizationType] = useState("Charity");
    const [organizationAddress, setOrganizationAddress] = useState("Mostafa Kamel Axis");
    const [area, setArea] = useState("First Settlement");
    const [governorate, setGovernorate] = useState("Cairo");
    const [isEditing, setIsEditing] = useState(false);

    
    const handleFirstNameChange = (event) => {
        if (isEditing) {
            setFirstName(event.target.value);
        }
    }

    const handleLastNameChange = (event) => {
        if (isEditing) {
            setLastName(event.target.value);
        }
    }

    const handleGenderChange = (event) => {
        if (isEditing) {
            setGender(event.target.value);
        }
    }

    const handleEmailChange = (event) => {
        if (isEditing) {
            setEmail(event.target.value);
        }
    }

    const handlePasswordChange = (event) => {
        if (isEditing) {
            setPassword(event.target.value);
        }
    }

    const handleContactNumberChange = (event) => {
        if (isEditing) {
            setContactNumber(event.target.value);
        }
    }


    const handleOrganizationNameChange = (event) => {
        if (isEditing) {
            setOrganizationName(event.target.value);
        }
    }

    const handleOrganizationTypeChange = (event) => {
        if (isEditing) {
            setOrganizationType(event.target.value);
        }
    }

    const handleOrganizationAddressChange = (event) => {
        if (isEditing) {
            setOrganizationAddress(event.target.value);
        }
    }

    const handleAreaChange = (event) => {
        if (isEditing) {
            setArea(event.target.value);
        }
    }

    const handleGovernorateChange = (event) => {
        if (isEditing) {
            setGovernorate(event.target.value);
        }
    }

    const handleUpdate = () => {
        // Perform update logic here (e.g., send updated data to server)
        console.log("Updated Name:", firstName);
        console.log("Updated Last Name:", lastName);
        console.log("Selected Gender:", gender);
        console.log("Updated Email:", email);
        console.log("Selected Password:", password);
        console.log("Updated Mobile Number:", contactNumber);
        console.log("Updated Organiztaion Name:", organizationName);
        console.log("Updated Organiztaion Type:", organizationType);
        console.log("Updated Organization Address:", organizationAddress);
        console.log("Updated Area:", area);
        console.log("Updated Governorate:", governorate);

        setIsEditing(false); // Disable editing after update
    }

    return (
        <div>
            <Box sx={{ maxWidth: 400, mx: 'auto', p: 3, borderRadius: 4, boxShadow: 1 }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Account Information
                </Typography>
                <Avatar sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }} src={Logo} alt="Profile Picture" />
                <Divider sx={{ mb: 2 }} />
                <Stack spacing={3}>
                    <TextField
                        label="First Name"
                        variant="outlined"
                        value={firstName}
                        onChange={handleFirstNameChange}
                        disabled={!isEditing}
                    />

                    <TextField
                        label="Last Name"
                        variant="outlined"
                        value={lastName}
                        onChange={handleLastNameChange}
                        disabled={!isEditing}
                    />

                    
                    <TextField
                        label="Gender"
                        variant="outlined"
                        value={gender}
                        onChange={handleGenderChange}
                        disabled={!isEditing}
                    />

                    <TextField
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={handleEmailChange}
                        disabled={!isEditing}
                    />

                {isEditing ? (
                <TextField
                label="Password"
                variant="outlined"
                type={isEditing ? 'text' : 'password'} // Show text when editing, otherwise hide with password type
                value={password}
                onChange={handlePasswordChange}
                disabled={!isEditing}
            />
                ):
                (
                <TextField
                    label="Password"
                    variant="outlined"
                    value="*********"
                    InputProps={{
                        readOnly: true,
                        style: { color: 'black' }, // Change color to make text visible
                    }}
                />
            )}

                    <TextField
                        label="Contact Number"
                        variant="outlined"
                        value={contactNumber}
                        onChange={handleContactNumberChange}
                        disabled={!isEditing}
                    />

                    <TextField
                        label="Organization Name"
                        variant="outlined"
                        value={organizationName}
                        onChange={handleOrganizationNameChange}
                        disabled={!isEditing}
                    />

                    <TextField
                        label="Organization Type"
                        variant="outlined"
                        value={organizationType}
                        onChange={handleOrganizationTypeChange}
                        disabled={!isEditing}
                    />

                    <TextField
                        label="Organization Address"
                        variant="outlined"
                        value={organizationAddress}
                        onChange={handleOrganizationAddressChange}
                        disabled={!isEditing}
                    />

                    <TextField
                        label="Area"
                        variant="outlined"
                        value={area}
                        onChange={handleAreaChange}
                        disabled={!isEditing}
                    />

                    <TextField
                        label="Governorate"
                        variant="outlined"
                        value={governorate}
                        onChange={handleGovernorateChange}
                        disabled={!isEditing}
                    />

                    {isEditing ? (
                        <Button variant="contained" onClick={handleUpdate}>Update</Button>
                    ) : (
                        <Button variant="contained" onClick={() => setIsEditing(true)}>Edit</Button>
                    )}
                </Stack>
            </Box>
        </div>
    );
}

export default AccountInfo;
