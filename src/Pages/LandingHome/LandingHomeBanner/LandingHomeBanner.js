import React from 'react';
import pic from '../../../Assets/banner/pic1.png'
import doctor1 from '../../../Assets/doctor/1.png'
import doctor2 from '../../../Assets/doctor/2.png'
import doctor3 from '../../../Assets/doctor/3.png'

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
                    <Box sx={{ p: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', width: "80%", margin: '0 auto' }}>
                        <Box sx={{ width: '50%' }}>
                            <img src={doctor1} alt="" />
                        </Box>
                        <Box sx={{ width: '50%' }}>
                            <Typography variant='h4' color={'#EB455F'} fontWeight={700}>Emergency ?</Typography>
                            <Typography variant='h3' fontWeight={600} color={'#2B3467'}>Find Nearest Medical Shops</Typography>
                            <Box mt={4}>
                                <PrimaryButton style={{ marginRight: '20px' }}>Shops Info</PrimaryButton>
                                <SecondaryButton>View Shops</SecondaryButton>
                            </Box>
                        </Box>
                    </Box>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${pic})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <Box sx={{ p: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', width: "80%", margin: '0 auto' }}>
                        <Box sx={{ width: '50%' }}>
                            <img src={doctor2} alt="" />
                        </Box>
                        <Box sx={{ width: '50%' }}>
                            <Typography variant='h4' color={'#EB455F'} fontWeight={700}>Emergency ?</Typography>
                            <Typography variant='h3' fontWeight={600} color={'#2B3467'}>Find Nearest Hospitals</Typography>
                            <Box mt={4}>
                                <PrimaryButton style={{ marginRight: '20px' }}>Hospitals Info</PrimaryButton>
                                <SecondaryButton>View Hospitals</SecondaryButton>
                            </Box>
                        </Box>
                    </Box>
                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${pic})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <Box sx={{ p: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', width: "80%", margin: '0 auto' }}>
                        <Box sx={{ width: '50%' }}>
                            <img src={doctor3} alt="" />
                        </Box>
                        <Box sx={{ width: '50%' }}>
                            <Typography variant='h4' color={'#EB455F'} fontWeight={700}>Emergency ?</Typography>
                            <Typography variant='h3' fontWeight={600} color={'#2B3467'}>Find Nearest Doctors</Typography>
                            <Box mt={4}>
                                <PrimaryButton style={{ marginRight: '20px' }}>Doctors Info</PrimaryButton>
                                <SecondaryButton>Contact Doctors</SecondaryButton>
                            </Box>
                        </Box>
                    </Box>
                </SwiperSlide>
            </Swiper>
        </Box>
    );
};

export default LandingHomeBanner;