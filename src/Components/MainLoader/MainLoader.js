import { Box } from '@mui/system';
import React from 'react';
import { CirclesWithBar } from 'react-loader-spinner';

const MainLoader = () => {
    return (
        <Box sx={{ display: 'grid', placeItems: 'center', height: '100vh', width: '100%' }}>
            <CirclesWithBar
                height="100"
                width="100"
                color="#3F979B"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                outerCircleColor=""
                innerCircleColor=""
                barColor=""
                ariaLabel='circles-with-bar-loading'
            />
        </Box>
    );
};

export default MainLoader;