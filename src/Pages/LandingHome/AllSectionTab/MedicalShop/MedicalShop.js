import { Box, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { BiTime } from 'react-icons/bi';
import { BsTelephoneOutboundFill } from 'react-icons/bs';
import { GiMedicines } from 'react-icons/gi';
import { HiLocationMarker } from 'react-icons/hi';
import { TabPrimaryButton3 } from '../../../../Styles/Button/button';

const MedicalShop = () => {

    const [medical, setMedical] = useState([])

    useEffect(() => {
        fetch('medicalShop.json')
            .then(res => res.json())
            .then(data => setMedical(data))
    }, [])

    return (
        <Box sx={{
            display: 'grid', gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(4, 1fr)',
            }, gap: 5, mt: 5, width: '100%'
        }}>
            {
                medical?.map((n, i) =>
                    <Box key={i} sx={{ border: '1px solid #E384FF' }}>
                        <TabPrimaryButton3>Shop Now</TabPrimaryButton3>
                        <Box px={2} >
                            <Box mt={1}>
                                <Rating name="half-rating" defaultValue={n.ratting} readOnly precision={0.5} />
                            </Box>
                            <Typography fontWeight={700} color={'#E384FF'} variant='h6' >{n.name}</Typography>
                            <Typography variant='subtitle1' fontWeight={700} color={'#344D67'} >{n.designation}</Typography>
                            <Box p={1} >
                                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                    <BsTelephoneOutboundFill color='#2F58CD' />
                                    <Typography ml={0.5} variant='subtitle2' color={'GrayText'}>{n.phone}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                    <HiLocationMarker color='#2F58CD' />
                                    <Typography ml={0.5} variant='subtitle2' color={'GrayText'}>{n.location}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                    <BiTime color='#2F58CD' />
                                    <Typography ml={0.5} variant='subtitle2' color={'GrayText'}>{n.opening_hours}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                    <GiMedicines color='#2F58CD' />
                                    <Typography ml={0.5} variant='subtitle2' color={'GrayText'}>{n.available_medicine}</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <img style={{ width: '100%', height: '80px', objectFit: 'cover', backgroundSize: "cover" }} src={n.img} alt="" />
                        </Box>
                    </Box>
                )
            }
        </Box>
    );
};

export default MedicalShop;