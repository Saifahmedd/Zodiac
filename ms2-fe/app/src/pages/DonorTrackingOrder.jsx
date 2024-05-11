import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Root from './DonorRoot';

const steps = [
    'Searching for a Driver',
    'A Driver is assigned',
    'The Driver is on his way',
    'Pick up the donated item(s)',
    'The Driver is on his way to the Organization',
    'The Driver reached the Organization',
    'The donated item successfully donated'
];

const DonorTrackingOrder = () => {
    const [activeStep1, setActiveStep1] = useState(0);
    const [activeStep2, setActiveStep2] = useState(0);

    useEffect(() => {
        const timer1 = setInterval(() => {
            if (activeStep1 < steps.length - 1) {
                setActiveStep1(activeStep1 + 1);
            } else {
                clearInterval(timer1);
            }
        }, 8000); // Timer for track order 1

        const timer2 = setInterval(() => {
            if (activeStep2 < steps.length - 1) {
                setActiveStep2(activeStep2 + 1);
            } else {
                clearInterval(timer2);
            }
        }, 10000); // Timer for track order 2

        return () => {
            clearInterval(timer1);
            clearInterval(timer2);
        };
    }, [activeStep1, activeStep2]);

    return (
        <div>
            <Root />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Track Order 1
                </AccordionSummary>
                <AccordionDetails>
                    <Stepper activeStep={activeStep1}>
                        {steps.map((label, index) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    Track Order 2
                </AccordionSummary>
                <AccordionDetails>
                    <Stepper activeStep={activeStep2}>
                        {steps.map((label, index) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </AccordionDetails>
            </Accordion>
        </div>
        </div>
        </div>
    );
}

export default DonorTrackingOrder;
