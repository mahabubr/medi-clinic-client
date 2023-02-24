import { Box } from '@mui/material';
import React from 'react';
import { ContainerSubTitleText, ContainerTitleText } from '../../../Styles/Typography/Typography';

import { Swiper, SwiperSlide } from "swiper/react";

import { FaGooglePay } from 'react-icons/fa'
import { TbBrandMeta } from 'react-icons/tb'
import { SiAmazonaws, SiBmw, SiNetflix, SiTesla } from 'react-icons/si'
import { GiHealthNormal, GiHospital, GiHotSpices } from 'react-icons/gi'
import { AiOutlineAmazon } from 'react-icons/ai'

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Autoplay, Scrollbar } from "swiper";
import { BiWorld } from 'react-icons/bi';
import { BsMicrosoft } from 'react-icons/bs';

const InsurancePlan = () => {
    return (
        <Box sx={{ mt: 10 }}>
            <ContainerSubTitleText>Please call us at 111-222-333 and we’ll help you out,</ContainerSubTitleText>
            <ContainerTitleText>We accept all major insurance plans.</ContainerTitleText>
            <Box sx={{ mt: 6 }}>
                <Swiper
                    slidesPerView={6}
                    loop={true}
                    autoplay={{ delay: 1000 }}
                    speed={500}
                    modules={[Scrollbar, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <FaGooglePay fontSize={100} color="#7B8FA1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TbBrandMeta fontSize={100} color="#7B8FA1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SiNetflix fontSize={100} color="#7B8FA1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <GiHealthNormal fontSize={100} color="#7B8FA1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <BiWorld fontSize={100} color="#7B8FA1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <AiOutlineAmazon fontSize={100} color="#7B8FA1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SiAmazonaws fontSize={100} color="#7B8FA1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <GiHotSpices fontSize={100} color="#7B8FA1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <BsMicrosoft fontSize={100} color="#7B8FA1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SiTesla fontSize={100} color="#7B8FA1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <SiBmw fontSize={100} color="#7B8FA1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <GiHospital fontSize={100} color="#7B8FA1" />
                    </SwiperSlide>
                </Swiper>
            </Box>
        </Box>
    );
};

export default InsurancePlan;