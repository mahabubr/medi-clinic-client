import React from 'react';
import { Box } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom';
import { PrimaryRoleButton } from '../../../Styles/Button/button';

const RoleNav = () => {

    const navigate = useNavigate()

    const handleHistoryBack = () => {
        navigate(-1)
    }

    return (
        <Box p={6}>
            <PrimaryRoleButton onClick={handleHistoryBack}>
                <ArrowBackIcon />
            </PrimaryRoleButton>
        </Box>
    );
};

export default RoleNav;