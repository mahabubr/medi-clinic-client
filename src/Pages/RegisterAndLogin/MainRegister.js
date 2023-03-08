import { Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import TabPanel from '../../Components/TabPanel/TabPanel';
import A11yProps from '../../Components/A11yProps/A11yProps';
import SignUp from './SignUp/SignUp';
// import LoginSocialMedia from '../../Components/LoginSocialMedia/LoginSocialMedia';
import Login from './Login/Login';


const MainRegister = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box my={{
            xs: 10,
            lg: 0
        }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box width={{
                xs: '0',
                lg: '40%'
            }} display={{
                xs: 'none',
                lg: 'block'
            }}>
                <img style={{ height: '150vh', objectFit: 'cover' }} src="https://i.ibb.co/KGbPJWm/2645.jpg" alt="" />
            </Box>
            <Box width={{
                xs: '100%',
                lg: '60%'
            }}>
                <Box width={{
                    xs: '80%',
                    lg: '50%'
                }} mx={'auto'}>
                    <Typography variant='h5' fontWeight={800} fontFamily={'inherit'}>Get more things done with Login platform.</Typography>
                    <Typography mt={1} fontWeight={200} color={'GrayText'}>Access to the most powerful section in the entire design and this company.</Typography>
                    <Box mt={6}>
                        <Box>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Login" {...A11yProps(0)} />
                                <Tab label="Register" {...A11yProps(1)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <Login />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <SignUp />
                        </TabPanel>
                    </Box>
                    {/* <Box>
                        <LoginSocialMedia />
                    </Box> */}
                </Box>
            </Box>
        </Box>
    );
};

export default MainRegister;