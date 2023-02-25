import React from 'react';
import pic from '../../../Assets/banner/pic1.png'
import doctor1 from '../../../Assets/doctor/1.png'
import doctor2 from '../../../Assets/doctor/2.png'
import doctor3 from '../../../Assets/doctor/3.png'

import './LandingHomeBanner.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { PrimaryButton, SecondaryButton } from '../../../Styles/Button/button';

const LandingHomeBanner = () => {
    return (
        <Box>
            <Swiper
                loop={true}
                autoplay={{ delay: 1500 }}
                speed={1200}
                spaceBetween={0}
                slidesPerView={1}
                modules={[Pagination, Autoplay]}
            >
                <SwiperSlide style={{ backgroundImage: `url(${pic})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <Box sx={{
                        p: 4, display: {
                            sx: 'block',
                            md: 'flex'
                        }, justifyContent: 'center', alignItems: 'center', width: "80%", margin: '0 auto'
                    }}>
                        <Box sx={{
                            width: {
                                xs: '50%',
                                md: '50%'
                            }
                        }}>
                            <img className='landingHomeBannerImg' src={doctor1} alt="" />
                        </Box>
                        <Box sx={{
                            width: {
                                xs: '100%',
                                md: '50%'
                            }
                        }}>
                            <Typography variant='h4' color={'#EB455F'} fontSize={{
                                xs: 20,
                                sm: 30,
                                md: 35,
                            }} fontWeight={600}>Emergency ?</Typography>
                            <Typography variant='h3' fontWeight={600} fontSize={{
                                xs: 25,
                                sm: 35,
                                md: 45,
                            }} color={'#2B3467'}>Find Nearest Shop</Typography>
                            <Box sx={{
                                display: {
                                    sx: 'block',
                                    sm: 'flex',
                                    md: 'flex'
                                }
                            }} mt={
                                {
                                    xs: 1,
                                    sm: 2,
                                    md: 4,
                                }
                            }>
                                <Box>
                                    <PrimaryButton style={{ marginRight: '20px' }}>Shops Info</PrimaryButton>
                                </Box>
                                <Box mt={
                                    {
                                        xs: 2,
                                        sm: 0,
                                        md: 0,
                                    }
                                }>
                                    <SecondaryButton >View Shops</SecondaryButton>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${pic})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <Box sx={{
                        p: 4, display: {
                            sx: 'block',
                            md: 'flex'
                        }, justifyContent: 'center', alignItems: 'center', width: {

                        }, margin: '0 auto'
                    }}>
                        <Box sx={{
                            width: {
                                xs: '50%',
                                md: '50%'
                            }
                        }}>
                            <img className='landingHomeBannerImg' src={doctor2} alt="" />
                        </Box>
                        <Box sx={{
                            width: {
                                xs: '100%',
                                md: '50%'
                            }
                        }}>
                            <Typography variant='h4' color={'#EB455F'} fontSize={{
                                xs: 20,
                                sm: 30,
                                md: 35,
                            }} fontWeight={600}>Emergency ?</Typography>
                            <Typography variant='h3' fontWeight={600} fontSize={{
                                xs: 25,
                                sm: 35,
                                md: 45,
                            }} color={'#2B3467'}>Find Nearest Doctors</Typography>
                            <Box sx={{
                                display: {
                                    sx: 'block',
                                    sm: 'flex',
                                    md: 'flex'
                                }
                            }} mt={
                                {
                                    xs: 1,
                                    sm: 2,
                                    md: 4,
                                }
                            }>
                                <Box>
                                    <PrimaryButton style={{ marginRight: '20px' }}>Doctors Info</PrimaryButton>
                                </Box>
                                <Box mt={
                                    {
                                        xs: 2,
                                        sm: 0,
                                        md: 0,
                                    }
                                }>
                                    <SecondaryButton >View Doctors</SecondaryButton>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${pic})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <Box sx={{
                        p: 4, display: {
                            sx: 'block',
                            md: 'flex'
                        }, justifyContent: 'center', alignItems: 'center', width: {

                        }, margin: '0 auto'
                    }}>
                        <Box sx={{
                            width: {
                                xs: '50%',
                                md: '50%'
                            }
                        }}>
                            <img className='landingHomeBannerImg' src={doctor3} alt="" />
                        </Box>
                        <Box sx={{
                            width: {
                                xs: '100%',
                                md: '50%'
                            }
                        }}>
                            <Typography variant='h4' color={'#EB455F'} fontSize={{
                                xs: 20,
                                sm: 30,
                                md: 35,
                            }} fontWeight={600}>Emergency ?</Typography>
                            <Typography variant='h3' fontWeight={600} fontSize={{
                                xs: 25,
                                sm: 35,
                                md: 45,
                            }} color={'#2B3467'}>Find Nearest Hospital</Typography>
                            <Box sx={{
                                display: {
                                    sx: 'block',
                                    sm: 'flex',
                                    md: 'flex'
                                }
                            }} mt={
                                {
                                    xs: 1,
                                    sm: 2,
                                    md: 4,
                                }
                            }>
                                <Box>
                                    <PrimaryButton style={{ marginRight: '20px' }}>Hospital Info</PrimaryButton>
                                </Box>
                                <Box mt={
                                    {
                                        xs: 2,
                                        sm: 0,
                                        md: 0,
                                    }
                                }>
                                    <SecondaryButton >View Hospital</SecondaryButton>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </SwiperSlide>
            </Swiper>
        </Box>
    );
};

export default LandingHomeBanner;