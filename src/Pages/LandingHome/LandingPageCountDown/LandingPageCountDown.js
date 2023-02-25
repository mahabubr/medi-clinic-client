import { Box, Typography } from '@mui/material';
import React from 'react';
import { ContainerSubTitleText, ContainerTitleText, LandingCountUpText1, LandingCountUpText2, LandingCountUpText3, LandingCountUpText4, LandingCountUpText5 } from '../../../Styles/Typography/Typography';
import { IoCalendarNumberOutline } from 'react-icons/io5'
import { FaUserAlt } from 'react-icons/fa'
import { MdStore } from 'react-icons/md'
import { BsFillAwardFill } from 'react-icons/bs'
import CountUp from 'react-countup';

const LandingPageCountDown = () => {
    return (
        <Box sx={{ width: '90%', margin: '0 auto', mt: 10 }}>
            <ContainerSubTitleText>Convenient Heart</ContainerSubTitleText>
            <ContainerTitleText>Our Statistics</ContainerTitleText>
            <Box sx={{ display: 'grid', gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(5, 1fr)',
            }, gap: 5, mt: 6 }}>
                <Box sx={{ textAlign: 'center', backgroundColor: '#EFF5F5', '&:hover': { backgroundColor: '#ffffff' }, p: 4, transition: 'all 0.5s', cursor: 'grab', borderRadius: '8px', boxShadow: '0 0 10px grey' }}>
                    <IoCalendarNumberOutline fontSize={50} color="#3F979B" />
                    <LandingCountUpText1>
                        <CountUp end={25} duration={5} />
                    </LandingCountUpText1>
                    <Typography>Years of Excellence</Typography>
                </Box>
                <Box sx={{ textAlign: 'center', backgroundColor: '#EFF5F5', '&:hover': { backgroundColor: '#ffffff' }, p: 4, transition: 'all 0.5s', cursor: 'grab', borderRadius: '8px', boxShadow: '0 0 10px grey' }}>
                    <FaUserAlt fontSize={50} color="#FC7300" />
                    <LandingCountUpText2>
                        <CountUp end={15} duration={5} suffix="k" />
                    </LandingCountUpText2>
                    <Typography>Clients a year trust</Typography>
                </Box>
                <Box sx={{ textAlign: 'center', backgroundColor: '#EFF5F5', '&:hover': { backgroundColor: '#ffffff' }, p: 4, transition: 'all 0.5s', cursor: 'grab', borderRadius: '8px', boxShadow: '0 0 10px grey' }}>
                    <FaUserAlt fontSize={50} color="#20262E" />
                    <LandingCountUpText3>
                        <CountUp end={8} duration={5} suffix="k" />
                    </LandingCountUpText3>
                    <Typography>Stores Work with Us</Typography>
                </Box>
                <Box sx={{ textAlign: 'center', backgroundColor: '#EFF5F5', '&:hover': { backgroundColor: '#ffffff' }, p: 4, transition: 'all 0.5s', cursor: 'grab', borderRadius: '8px', boxShadow: '0 0 10px grey' }}>
                    <MdStore fontSize={50} color="#301E67" />
                    <LandingCountUpText4>
                        <CountUp end={50} duration={5} />
                    </LandingCountUpText4>
                    <Typography>Star rating Trust Pilot</Typography>
                </Box>
                <Box sx={{ textAlign: 'center', backgroundColor: '#EFF5F5', '&:hover': { backgroundColor: '#ffffff' }, p: 4, transition: 'all 0.5s', cursor: 'grab', borderRadius: '8px', boxShadow: '0 0 10px grey' }}>
                    <BsFillAwardFill fontSize={50} color="#E90064" />
                    <LandingCountUpText5>
                        <CountUp end={1} duration={5} suffix="k" />
                    </LandingCountUpText5>
                    <Typography>Recognition Awards</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default LandingPageCountDown;