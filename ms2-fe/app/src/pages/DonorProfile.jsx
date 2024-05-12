import React from 'react';
import { Card, CardContent, Divider, Typography } from '@mui/material';
import Root from './DonorRoot';
const DonorProfile = () => {
    const profile = ["Saif", "Ahmed", "Male", "saifahmedsalah11@gmail.com", "01023255440","Me3rag", "Maadi", "Cairo"];

    return (
        <div>
            <Root />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '90vh' }}>
            <Card className="card" style={{ maxWidth: 400 }}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Donor Profile
                    </Typography>
                    <Divider />
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '8px' }}><strong>First Name:</strong> {profile[0]}</li>
                        <li style={{ marginBottom: '8px' }}><strong>Last Name:</strong> {profile[1]}</li>
                        <li style={{ marginBottom: '8px' }}><strong>Gender:</strong> {profile[2]}</li>
                        <li style={{ marginBottom: '8px' }}><strong>Email:</strong> {profile[3]}</li>
                        <li style={{ marginBottom: '8px' }}><strong>Contact Number:</strong> {profile[4]}</li>
                        <li style={{ marginBottom: '8px' }}><strong>Address:</strong> {profile[5]}</li>
                        <li style={{ marginBottom: '8px' }}><strong>Area:</strong> {profile[6]}</li>
                        <li><strong>Governorate:</strong> {profile[7]}</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
        </div>
    );
}

export default DonorProfile;
