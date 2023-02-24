import { Box, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import SmallNav from './SmallNav';
import logo from '../../../Assets/logo.png'
import { SecondaryButton } from '../../../Styles/Button/button';
import { Link } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi'

// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'

const LandingHomeNavbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <Box>
            <SmallNav></SmallNav>
            <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', width: '80%', margin: '20px auto' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Link to='/'>
                        <img src={logo} style={{ width: '40px', marginRight: '10px' }} alt="" />
                    </Link>
                    <Typography variant='h5' fontWeight={700} color={'#0081B4'}>Medi Clinic</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <BiSearchAlt2 onClick={toggleDrawer} fontSize={30} style={{ marginRight: '10px', cursor: 'pointer' }} />
                    <Link to='/register'>
                        <SecondaryButton>Join Now</SecondaryButton>
                    </Link>
                </Box>
            </Box>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='top'
                style={{ backgroundColor: '#EAFDFC'}}
            >
                <Box sx={{ display: 'grid', placeItems: 'center', height: '100%' }}>
                    <TextField id="standard-basic" label="Standard" variant="standard" />
                </Box>
            </Drawer>
        </Box>
    );
};

export default LandingHomeNavbar;