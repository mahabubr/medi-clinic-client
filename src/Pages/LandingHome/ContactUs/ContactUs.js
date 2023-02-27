import { Box, Typography } from '@mui/material';
import { Map, Marker } from 'pigeon-maps';
import React from 'react';
import { ContainerSubTitleText, ContainerTitleText } from '../../../Styles/Typography/Typography';
import { BsTelephoneForwardFill } from 'react-icons/bs'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { HiLocationMarker } from 'react-icons/hi'
import { PrimaryButton } from '../../../Styles/Button/button';


const ContactUs = () => {
    return (
        <Box sx={{ width: '80%', margin: '0 auto', mt: 10, mb: 10 }}>
            <ContainerSubTitleText>Get In Touch</ContainerSubTitleText>
            <ContainerTitleText>Contact Us</ContainerTitleText>
            <Box sx={{
                mt: 5, display: 'grid', gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(1, 1fr)',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(3, 1fr)',
                },
            }}>
                <Box>
                    <Map height={350} defaultCenter={[24.8481, 89.3730]} defaultZoom={10}>
                        <Marker width={50} anchor={[24.8481, 89.3730]} />
                    </Map>
                </Box>
                <Box sx={{ p: 6 }}>
                    <Typography variant='h4' fontWeight={500}>Meet Us</Typography>
                    <Box sx={{ mt: 4 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                            <BsTelephoneForwardFill color='#537FE7' fontSize={30} />
                            <Typography ml={2}>+1 222 333 444</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', mt: 2, justifyContent: 'start', alignItems: 'center' }}>
                            <MdOutlineAlternateEmail color='#537FE7' fontSize={30} />
                            <Typography ml={2}>info@mediclinic.com</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', mt: 2, justifyContent: 'start', alignItems: 'center' }}>
                            <HiLocationMarker color='#537FE7' fontSize={30} />
                            <Typography ml={2}>Bogra, Bangladesh</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ p: 6, backgroundColor: '#EEEEEE' }}>
                    <Typography variant='h4' fontWeight={500}>Pitch Us</Typography>
                    <Typography mt={4}>Hello</Typography>
                    <Typography variant='subtitle1' mb={2} mt={3} fontWeight={700} color='#3E54AC'>Describe the customers or the cause that your business serves.</Typography>
                    <PrimaryButton>Contact Us</PrimaryButton>
                </Box>
            </Box>
        </Box>
    );
};

export default ContactUs;