import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import LandingHomeNavbar from '../Pages/Shared/NavBar/LandingHomeNavbar';

const LandingHomeLayout = () => {
    return (
        <div>
            <LandingHomeNavbar></LandingHomeNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LandingHomeLayout;