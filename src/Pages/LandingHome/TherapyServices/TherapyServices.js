import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { ContainerSubTitleText, ContainerTitleText } from '../../../Styles/Typography/Typography';

const TherapyServices = () => {

    const [therapy, setTherapy] = useState([])
    useEffect(() => {
        fetch('therapyServices.json')
            .then(res => res.json())
            .then(data => setTherapy(data))
    }, [])


    return (
        <Box sx={{ width: '80%', margin: '0 auto', mt: 10 }}>
            <ContainerSubTitleText>Peace Of Mind</ContainerSubTitleText>
            <ContainerTitleText>Popular Therapy Services</ContainerTitleText>
            <Box sx={{
                display: 'grid', gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                }, gap: 5, mt: 5
            }}>
                {
                    therapy?.map((n, i) => <Box key={i} sx={{ border: '1px solid #EEF2FF' }}>
                        <img style={{ height: '200px', width: '100%', objectFit: 'cover' }} src={n.img} alt="" />
                        <Box px={4} py={2}>
                            <Typography fontWeight={700} color={'#161853'} variant='h6' mt={2}>{n.title}</Typography>
                            <Typography variant='subtitle1' height={80} color={'GrayText'} mt={2}>{n.description}</Typography>
                        </Box>
                        <Button variant="contained" color="error" fullWidth sx={{ py: 1, mt: 2 }}>Read More</Button>
                    </Box>)
                }
            </Box>
        </Box>
    );
};

export default TherapyServices;