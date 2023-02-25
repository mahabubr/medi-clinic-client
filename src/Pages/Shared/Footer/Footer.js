import { Box, TextField, Typography } from '@mui/material';
import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
// import { SiSinglestore } from 'react-icons/si';


const Footer = () => {
    return (
        <Box sx={{ mt: 10 }}>
            <Box sx={{
                display: 'grid', gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(4, 1fr)',
                }, placeItems: 'center', backgroundColor: '#C0EEF2', p: 10
            }}>
                <Box>
                    <Typography variant='h5'>By Specialty</Typography>
                    <Typography variant='subtitle1'>Allergy & Immunology</Typography>
                    <Typography variant='subtitle1'>Anesthesiology</Typography>
                    <Typography variant='subtitle1'>Diagnostic radiology</Typography>
                    <Typography variant='subtitle1'>Emergency medicine</Typography>
                    <Typography variant='subtitle1'>Surgery</Typography>
                    <Typography color={'#537FE7'} fontWeight={600} sx={{ cursor: 'pointer' }} variant='subtitle1'>View All</Typography>
                </Box>
                <Box>
                    <Typography variant='h5'>Doctors In UAE</Typography>
                    <Typography variant='subtitle1'>Allergy & Immunology</Typography>
                    <Typography variant='subtitle1'>Anesthesiology</Typography>
                    <Typography variant='subtitle1'>Diagnostic radiology</Typography>
                    <Typography variant='subtitle1'>Emergency medicine</Typography>
                    <Typography variant='subtitle1'>Surgery</Typography>
                    <Typography color={'#537FE7'} fontWeight={600} sx={{ cursor: 'pointer' }} variant='subtitle1'>View All</Typography>
                </Box>
                <Box>
                    <Typography variant='h5'>Doctors In UK</Typography>
                    <Typography variant='subtitle1'>Allergy & Immunology</Typography>
                    <Typography variant='subtitle1'>Anesthesiology</Typography>
                    <Typography variant='subtitle1'>Dermatology</Typography>
                    <Typography variant='subtitle1'>Surgery</Typography>
                    <Typography variant='subtitle1'>Emergency</Typography>
                    <Typography color={'#537FE7'} fontWeight={600} sx={{ cursor: 'pointer' }} variant='subtitle1'>View All</Typography>
                </Box>
                <Box>
                    <Typography variant='h5'>By Location</Typography>
                    <Typography variant='subtitle1'>United Kingdom( UK )</Typography>
                    <Typography variant='subtitle1'>India</Typography>
                    <Typography variant='subtitle1'>Australia</Typography>
                    <Typography variant='subtitle1'>Turkey</Typography>
                    <Typography variant='subtitle1'>United Emirates</Typography>
                    <Typography color={'#537FE7'} fontWeight={600} sx={{ cursor: 'pointer' }} variant='subtitle1'>View All</Typography>
                </Box>
            </Box>
            <Box sx={{
                backgroundColor: '#393053', display: 'grid', gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                }, placeItems: 'stretch', p: 10
            }}>
                <Box>
                    <Typography color={'whitesmoke'} variant='h5'>Connect Us</Typography>
                    <Box sx={{ display: 'flex', gap: '10px', mt: 3 }}>
                        <BsFacebook color='white' fontSize={20} />
                        <BsInstagram color='white' fontSize={20} />
                        <BsTwitter color='white' fontSize={20} />
                        <BsLinkedin color='white' fontSize={20} />
                    </Box>
                </Box>
                <Box>
                    <Typography color={'whitesmoke'} mb={3} variant='h5'>Download Now</Typography>
                    <IoLogoGooglePlaystore color='white' fontSize={50} />
                </Box>
                <Box>
                    <Typography variant='h5' mb={2} color={'whitesmoke'}>Send Your Email</Typography>
                    <TextField id="standard-basic" label="Send Email" variant="standard" color='warning' fullWidth />
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;