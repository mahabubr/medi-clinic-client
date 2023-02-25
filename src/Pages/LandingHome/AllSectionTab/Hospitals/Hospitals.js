import { Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { BsTelephoneOutboundFill } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import { TabPrimaryButton1 } from '../../../../Styles/Button/button';

const Hospitals = () => {

    const [hospitals, setHospitals] = useState([])

    useEffect(() => {
        fetch('hospitals.json')
            .then(res => res.json())
            .then(data => setHospitals(data))
    }, [])

    return (
        <Box sx={{
            display: 'grid', gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(2, 1fr)',
            }, gap: 2, mt: 5
        }}>
            {
                hospitals?.map((n, i) =>
                    <Box key={i} sx={{
                        border: '1px solid #537FE7',
                        display: {
                            xs: 'block',
                            md: 'flex'
                        }
                    }
                    } >
                        <Box width={{
                            xs: '100%',
                            md: '40%'
                        }}>
                            <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={n.img} alt="" />
                        </Box>
                        <Box width={{
                            xs: '100%',
                            md: '60%'
                        }}>
                            <Box px={3} py={2}>
                                <Typography fontWeight={700} color={'#537FE7'} variant='h6' >{n.name}</Typography>
                                <Typography variant='subtitle2' fontWeight={200} color={'#344D67'} >{n.description.slice(0, 50)}...</Typography>
                                <Box my={1} bgcolor={'#E9F8F9'} p={1} borderRadius={1}>
                                    <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                        <BsTelephoneOutboundFill color='#2F58CD' />
                                        <Typography ml={0.5} variant='subtitle2' color={'GrayText'}>{n.phone}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                        <HiLocationMarker color='#2F58CD' />
                                        <Typography ml={0.5} variant='subtitle2' color={'GrayText'}>{n.location}</Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Rating name="half-rating" defaultValue={n.ratting} readOnly precision={0.5} />
                                </Box>
                            </Box>
                            <TabPrimaryButton1>More About</TabPrimaryButton1>
                        </Box>
                    </Box>
                )
            }
        </Box >
    );
};

export default Hospitals;