import { Box, Typography } from '@mui/material';
import React from 'react';
import { ContainerSubTitleText, ContainerTitleText } from '../../Styles/Typography/Typography';
import PersonIcon from '@mui/icons-material/Person'
import VaccinesIcon from '@mui/icons-material/Vaccines'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'

const RegisterRole = () => {

    // ROLE (Doctor, Hospital, Pharmacy, User)

    return (
        <Box>
            <ContainerSubTitleText>Are You New ?</ContainerSubTitleText>
            <ContainerTitleText>Register Your Role !</ContainerTitleText>
            <Box sx={{
                mt: 5, textAlign: 'center', width: "80%", mx: 'auto', display: 'grid', gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
                    md: 'repeat(2, 1fr)',
                }, gap: 8,
            }}>
                <Box sx={{ ":hover": { transform: "scale(1.1);" }, transition: 'all 1s', cursor: 'pointer' }} bgcolor={'#BAD7E9'} p={5} borderRadius={2} >
                    <PersonIcon sx={{ fontSize: '60px' }} />
                    <Typography variant='h4' fontWeight={800}>AS USER</Typography>
                </Box>
                <Box sx={{ ":hover": { transform: "scale(1.1);" }, transition: 'all 1s', cursor: 'pointer' }} bgcolor={'#BAD7E9'} p={5} borderRadius={2} >
                    <EmojiPeopleIcon sx={{ fontSize: '60px' }} />
                    <Typography variant='h4' fontWeight={800}>AS Doctor</Typography>
                </Box>
                <Box sx={{ ":hover": { transform: "scale(1.1);" }, transition: 'all 1s', cursor: 'pointer' }} bgcolor={'#BAD7E9'} p={5} borderRadius={2} >
                    <LocalHospitalIcon sx={{ fontSize: '60px' }} />
                    <Typography variant='h4' fontWeight={800}>AS Hospital</Typography>
                </Box>
                <Box sx={{ ":hover": { transform: "scale(1.1);" }, transition: 'all 1s', cursor: 'pointer' }} bgcolor={'#BAD7E9'} p={5} borderRadius={2} >
                    <VaccinesIcon sx={{ fontSize: '60px' }} />
                    <Typography variant='h4' fontWeight={800}>AS Pharmacy</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default RegisterRole;