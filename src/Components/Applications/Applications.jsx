import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import './Applications.css';
import Title from '../Title/Title';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const tabNames = ['Leave', 'Outing', 'Permission', 'Problems', 'Others'];
const steps = ['Step 1', 'Step 2', 'Step 3'];

const Applications = () => {
    const [value, setValue] = React.useState(0);
    const isMobile = useMediaQuery('(max-width:600px)');
    const [activeStep, setActiveStep] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className="fixed-scroll">
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', flexDirection: isMobile ? 'column' : 'row', height: '100%' }}
            >
                {isMobile ? (
                    <Select
                        value={value}
                        onChange={(event) => handleChange(event, event.target.value)}
                        sx={{ mb: 2 }}
                    >
                        {tabNames.map((name, index) => (
                            <MenuItem key={index} value={index}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                ) : (
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Form Tabs"
                        sx={{ borderRight: 1, borderColor: 'divider', minWidth: 100 }}
                        TabIndicatorProps={{
                            sx: {
                                backgroundColor: '#CC0303',
                            },
                        }}
                        textColor="inherit"
                    >
                        {tabNames.map((name, index) => (
                            <Tab
                                key={index}
                                label={name}
                                {...a11yProps(index)}
                                sx={{
                                    color: value === index ? '#CC0303' : 'inherit',
                                    mb: 5, mr: 3,
                                }}
                            />
                        ))}
                    </Tabs>
                )}
                {tabNames.map((name, index) => (
                    <TabPanel key={index} value={value} index={index}>
                        <Stepper activeStep={activeStep}>
                            {steps.map((label, stepIndex) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length ? (
                            <>
                                <Typography sx={{ mt: 2, mb: 1 }}>
                                    All steps completed - you're finished
                                </Typography>
                                <Button onClick={handleReset}>Reset</Button>
                            </>
                        ) : (
                            <>
                                <Title subTitle={`${name} Model`} />
                                <form className="row">
                                    <div className="mb-3 col-md-6">
                                        <label htmlFor="inputName" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="inputName" autoComplete="name" />
                                    </div>
                                    <div className="mb-3 col-md-4">
                                        <label htmlFor="inputEmail" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="inputEmail" autoComplete="email" />
                                    </div>
                                    <div className="mb-3 col-md-2">
                                        <label htmlFor="inputPassword" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="inputPassword" autoComplete="current-password" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="inputPhone" className="form-label">Phone</label>
                                        <input type="tel" className="form-control" id="inputPhone" autoComplete="tel" />
                                    </div>
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                                        {activeStep !== 0 && (
                                            <Button
                                                variant="contained"
                                                onClick={handleBack}
                                                sx={{ ml: 2 }}
                                            >
                                                Back
                                            </Button>
                                        )}
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                            sx={{ ml: 2 }}
                                        >
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                    </Box>
                                </form>
                            </>
                        )}
                    </TabPanel>
                ))}
            </Box>
        </div>
    );
}

export default Applications;
