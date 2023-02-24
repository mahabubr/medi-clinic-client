import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { TabPrimaryButton } from '../../../../Styles/Button/button';

import { HiOutlineMailOpen } from 'react-icons/hi'
import { BsTelephoneOutboundFill } from 'react-icons/bs'
import { BiTime } from 'react-icons/bi'
import { MdLocalHospital } from 'react-icons/md'

const Doctors = () => {

    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, mt: 5 }}>
            {
                doctors?.map((n, i) => <Box key={i} sx={{ border: '1px solid #609966' }}>
                    <img style={{ width: '100%', height: '150px', objectFit: 'cover' }} src={n.img} alt="" />
                    <Box px={2} >
                        <Typography fontWeight={700} color={'#0F6292'} variant='h6' mt={2}>{n.name}</Typography>
                        <Typography variant='subtitle1' fontWeight={700} color={'#344D67'} >{n.designation}</Typography>
                        <Box my={1} bgcolor={'#E9F8F9'} p={1} borderRadius={1}>
                            <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                <HiOutlineMailOpen color='#2F58CD' />
                                <Typography ml={0.5} variant='subtitle2' color={'GrayText'}>{n.email}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                <BsTelephoneOutboundFill color='#2F58CD' />
                                <Typography ml={0.5} variant='subtitle2' color={'GrayText'}>{n.phone}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                <MdLocalHospital color='#2F58CD' />
                                <Typography ml={0.5} variant='subtitle2' color={'GrayText'}>{n.hospital_name}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                <BiTime color='#2F58CD' />
                                <Typography ml={0.5} variant='subtitle2' color={'GrayText'}>{n.time_to_sit}</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <TabPrimaryButton>Chat With Doctor</TabPrimaryButton>
                </Box>)
            }
        </Box>
    );
};

export default Doctors;