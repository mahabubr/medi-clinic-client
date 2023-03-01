import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import RoleNav from '../Pages/Shared/NavBar/RoleNav';

const RoleLayout = () => {
    return (
        <Box>
            <RoleNav></RoleNav>
            <Outlet></Outlet>
        </Box>
    );
};

export default RoleLayout;