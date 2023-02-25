import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { BsTelephoneOutboundFill } from 'react-icons/bs';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { TabPrimaryButton2 } from '../../../../Styles/Button/button';

const Therapy = () => {

    const [therapy, setTherapy] = useState([])

    useEffect(() => {
        fetch('therapy.json')
            .then(res => res.json())
            .then(data => setTherapy(data))
    }, [])

    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, mt: 5 }}>
            {
                therapy?.map((n, i) => <Box key={i} sx={{ border: '1px solid #FF8B13' }}>
                    <Box p={1} bgcolor={'#DC8449'}>
                        <img style={{ width: '100%', height: '150px', objectFit: 'cover' }} src={n.img} alt="" />
                    </Box>
                    <Box p={2} bgcolor={'#E9F8F9'} >
                        <Typography fontWeight={700} color={'#FF8B13'} variant='h6' >{n.name}</Typography>
                        <Typography variant='subtitle1' fontWeight={700} color={'#344D67'} >{n.designation}</Typography>
                        <Box my={1} p={1} borderRadius={1}>
                            <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                <BsTelephoneOutboundFill color='#2F58CD' />
                                <Typography ml={0.5} variant='subtitle2' color={'GrayText'}>{n.phone}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                <AiOutlineFieldNumber color='#2F58CD' />
                                <Typography ml={0.5} variant='subtitle2' color={'GrayText'}>{n.number_of_therapy}</Typography>
                            </Box>
                        </Box>
                        <Typography variant='subtitle1' fontWeight={700} color={'#609966'}>{n.hospital_name}</Typography>
                    </Box>
                    <TabPrimaryButton2>Book Now</TabPrimaryButton2>
                </Box>)
            }
        </Box>
    );
};

export default Therapy;