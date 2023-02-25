import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { MdLocalHospital } from 'react-icons/md';
import { TabPrimaryButton5 } from '../../../../Styles/Button/button';

const Nurses = () => {

    const [nurse, setNurse] = useState([])

    useEffect(() => {
        fetch('nurses.json')
            .then(res => res.json())
            .then(data => setNurse(data))
    }, [])

    return (
        <Box sx={{
            display: 'grid', gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(4, 1fr)',
            }, gap: 2, mt: 5
        }}>
            {
                nurse?.map((n, i) =>
                    <Box key={i} sx={{ border: '1px solid #301E67' }}>
                        <img style={{ width: '100%', height: '150px', objectFit: 'cover' }} src={n.img} alt="" />
                        <Box px={2} >
                            <Typography fontWeight={700} color={'#301E67'} variant='h6' mt={1}>{n.name}</Typography>
                            <Box my={1} bgcolor={'#E9F8F9'} p={1} borderRadius={1}>
                                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                    <MdLocalHospital color='#2F58CD' />
                                    <Typography ml={0.5} variant='subtitle2' color={'GrayText'}>{n.hospital_name}</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <TabPrimaryButton5>See Information</TabPrimaryButton5>
                    </Box>
                )
            }
        </Box>
    );
};

export default Nurses;