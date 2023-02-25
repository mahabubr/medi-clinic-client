import { Box, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { TbZoomQuestion, TbBuildingFortress } from 'react-icons/tb';
import { TabPrimaryButton6 } from '../../../../Styles/Button/button';

const Medicine = () => {

    const [medicine, setMedicine] = useState([])

    useEffect(() => {
        fetch('medicines.json')
            .then(res => res.json())
            .then(data => setMedicine(data))
    }, [])

    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, mt: 5, width: '100%' }}>
            {
                medicine?.map((n, i) =>
                    <Box key={i} sx={{ border: '1px solid #A7727D' }}>
                        <Box>
                            <img style={{ width: '100%', height: '180px', objectFit: 'cover', backgroundSize: "cover" }} src={n.img} alt="" />
                        </Box>
                        <Box px={2} >
                            <Box mt={1}>
                                <Rating name="half-rating" defaultValue={n.ratting} readOnly precision={0.5} />
                            </Box>
                            <Typography fontWeight={700} color={'#A7727D'} variant='h6' >{n.name}</Typography>
                            <Typography variant='subtitle1' fontWeight={700} color={'#344D67'} >{n.shop_name}</Typography>
                            <Box p={1} >
                                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                    <TbZoomQuestion color='#2F58CD' />
                                    <Typography ml={0.5} variant='subtitle2' color={'GrayText'}>{n.for_which}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                                    <TbBuildingFortress color='#2F58CD' />
                                    <Typography ml={0.5} variant='subtitle2' color={'GrayText'}>{n.company}</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <TabPrimaryButton6>Buy Medicine</TabPrimaryButton6>
                    </Box>
                )
            }
        </Box>
    );
};

export default Medicine;