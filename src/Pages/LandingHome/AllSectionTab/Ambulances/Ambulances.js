import { Box, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { BsTelephoneOutboundFill } from 'react-icons/bs';
import { IoLogoUsd } from 'react-icons/io';
import { FaRoad } from 'react-icons/fa';
import { TabPrimaryButton4 } from '../../../../Styles/Button/button';

const Ambulances = () => {

    const [ambulance, setAmbulance] = useState([])

    useEffect(() => {
        fetch('ambulances.json')
            .then(res => res.json())
            .then(data => setAmbulance(data))
    }, [])

    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, mt: 5 }}>
            {
                ambulance?.map((n, i) =>
                    <Box key={i} sx={{ border: '1px solid #E90064' }}>
                        <Box p={1}>
                            <Rating name="half-rating" defaultValue={n.ratting} readOnly precision={0.5} />
                        </Box>
                        <img style={{ width: '100%', height: '200px', objectFit: 'cover' }} src={n.img} alt="" />
                        <Box px={2} >
                            <Typography fontWeight={700} color={'#E90064'} variant='h6' mt={1}>{n.hospital_name}</Typography>
                            <Box p={1} >
                                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                    <BsTelephoneOutboundFill color='#2F58CD' />
                                    <Typography ml={0.5} variant='subtitle2' color={'GrayText'}>{n.phone}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                    <IoLogoUsd color='#2F58CD' />
                                    <Typography ml={0.5} variant='subtitle2' color={'GrayText'}>{n.price}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                    <FaRoad color='#2F58CD' />
                                    <Typography ml={0.5} variant='subtitle2' color={'GrayText'}>{n.root}</Typography>
                                </Box>
                            </Box>
                        </Box>
                            <TabPrimaryButton4>Book Ambulance</TabPrimaryButton4>
                    </Box>
                )
            }
        </Box>
    );
};

export default Ambulances;