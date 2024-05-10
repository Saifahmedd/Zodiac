import React, { useState } from 'react';
import DonorClothes from './DonorClothes';
import DonorFood from './DonorFood';
import DonorSchoolSupplies from './DonorSchoolSupplies';
import DonorMedicalCases from './DonorMedicalCases';
import DonorMedicalSupplies from './DonorMedicalSupplies';
import DonorTeaching from './DonorTeaching';
import DonorToys from './DonorToys';
import { TextField } from '@mui/material';

const DonorHome = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    }

    const filteredComponents = [
        { name: 'Clothes', component: <DonorClothes hideSearchFilter={true} /> },
        { name: 'Food', component: <DonorFood hideSearchFilter={true} /> },
        { name: 'MedicalCases', component: <DonorMedicalCases hideSearchFilter={true} /> },
        { name: 'MedicalSupplies', component: <DonorMedicalSupplies hideSearchFilter={true} /> },
        { name: 'SchoolSupplies', component: <DonorSchoolSupplies hideSearchFilter={true} /> },
        { name: 'Teaching', component: <DonorTeaching hideSearchFilter={true} /> },
        { name: 'Toys', component: <DonorToys hideSearchFilter={true} /> }
    ];

    const filteredComponentsToShow = filteredComponents.filter(item =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '90vh' }}>
            <div style={{ alignSelf: 'flex-start', marginLeft: '20px', marginTop: '20px' }}>
                <TextField id="search" label="Search" variant="outlined" value={searchText} onChange={handleSearchChange} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '90vh', marginLeft: '80px'}}>
                {filteredComponentsToShow.map((item, index) => (
                    <React.Fragment key={index}>{item.component}</React.Fragment>
                ))}
            </div>

        </div>
    );
}

export default DonorHome;
