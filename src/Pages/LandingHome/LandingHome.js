import { Box } from '@mui/material';
import React from 'react';
import AllSectionTab from './AllSectionTab/AllSectionTab';
import ContactUs from './ContactUs/ContactUs';
import InsurancePlan from './InsurancePlan/InsurancePlan';
import BannerSearchJoin from './LandingHomeBanner/BannerSearchJoin/BannerSearchJoin';
import LandingHomeBanner from './LandingHomeBanner/LandingHomeBanner';
import LandingSmallCard from './LandingHomeBanner/LandingSmallCard/LandingSmallCard';
import LandingPageCountDown from './LandingPageCountDown/LandingPageCountDown';
import LatestNews from './LatestNews/LatestNews';
import TherapyServices from './TherapyServices/TherapyServices';

const LandingHome = () => {
    return (
        <Box sx={{ overflowX: 'hidden' }}>
            <LandingHomeBanner></LandingHomeBanner>
            <BannerSearchJoin></BannerSearchJoin>
            <LandingSmallCard></LandingSmallCard>
            <LandingPageCountDown></LandingPageCountDown>
            <AllSectionTab></AllSectionTab>
            <TherapyServices></TherapyServices>
            <LatestNews></LatestNews>
            <InsurancePlan></InsurancePlan>
            <ContactUs></ContactUs>
        </Box>
    );
};

export default LandingHome;