import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { ContainerSubTitleText, ContainerTitleText } from '../../../Styles/Typography/Typography';
import { SlCalender } from 'react-icons/sl'

const LatestNews = () => {

    const [news, setNews] = useState([])
    useEffect(() => {
        fetch('latestNews.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    return (
        <Box sx={{ width: '80%', margin: '0 auto', mt: 10 }}>
            <Box>
                <ContainerSubTitleText>Latest News</ContainerSubTitleText>
                <ContainerTitleText>Be The First To Read</ContainerTitleText>
                <Box sx={{
                    mt: 4, display: 'grid', gridTemplateColumns: {
                        xs: '1fr',
                        md: '3fr 1fr',
                    }, gap: 5
                }}>
                    <Box sx={{
                        display: 'grid', gridTemplateColumns: {
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                            lg: 'repeat(3, 1fr)',
                        }, gap: 5
                    }}>
                        {
                            news?.map((n, i) => <Box key={i}>
                                <img style={{ height: '200px', width: '100%', objectFit: 'cover' }} src={n.img} alt="" />
                                <Box sx={{ display: 'flex', borderBottom: '1px solid gray', pb: 2, justifyContent: 'start', mt: 2, alignItems: 'center' }}>
                                    <SlCalender color={'#161853'} />
                                    <Typography ml={1}>{n.date}</Typography>
                                </Box>
                                <Typography height={50} fontWeight={700} color={'#161853'} variant='h6' mt={2}>{n.title.slice(0, 30)}...</Typography>
                                <Typography variant='subtitle1' height={80} color={'GrayText'} mt={2}>{n.description.slice(0, 80)}...</Typography>
                            </Box>)
                        }
                    </Box>
                    <Box>
                        <Box>
                            <img style={{ height: '400px', width: '100%', objectFit: 'cover' }} src="https://images.unsplash.com/photo-1615821608710-cc65318135f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=412&q=80" alt="" />
                            <Box sx={{ pt: 2 }}>
                                <Typography color={'#3E54AC'} fontWeight={700} variant='h5'>Health Insurance</Typography>
                                <Typography color={'grey'} variant='subtitle1'>Medcenter with individual approach</Typography>
                            </Box>
                        </Box>
                        <Box mt={5}>
                            <img style={{ height: '400px', width: '100%', objectFit: 'cover' }} src="https://plus.unsplash.com/premium_photo-1674841252164-5f0ba609d623?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                            <Box sx={{ pt: 2 }}>
                                <Typography color={'#3E54AC'} fontWeight={700} variant='h5'>Medicine</Typography>
                                <Typography color={'grey'} variant='subtitle1'>Medicine with individual approach</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default LatestNews;