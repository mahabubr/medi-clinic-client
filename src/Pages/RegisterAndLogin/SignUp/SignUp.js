import React, { useState } from 'react';
import BadgeIcon from '@mui/icons-material/Badge';
import { Box, Checkbox, FormControl, Input, InputAdornment, InputLabel, Typography } from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { TabPrimaryButton } from '../../../Styles/Button/button';
import KeyIcon from '@mui/icons-material/Key'
import { Link } from 'react-router-dom';
import { useFileUpload } from 'use-file-upload';


const SignUp = () => {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const [checkboxStatus, setCheckBoxStatus] = useState(true)
    const [file, selectFile] = useFileUpload()

    console.log(file);

    return (
        <>
            <form>
                <Box>
                    {file
                        ?
                        <Box sx={{ display: 'grid', placeItems: 'center' }}>
                            <img style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} src={file.source} alt='preview' />
                        </Box>
                        :
                        <Box sx={{ display: 'grid', placeItems: 'center' }}>
                            <svg onClick={() => {
                                // Single File Upload
                                selectFile()
                            }}
                                style={{ width: '100px', height: '100px', }}
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </Box>
                    }
                    <FormControl sx={{ mt: 2 }} fullWidth variant="standard">
                        <InputLabel color='success' htmlFor="input-with-icon-adornment">
                            Your Full Name
                        </InputLabel>
                        <Input
                            color='success'
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <BadgeIcon />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl sx={{ mt: 2 }} fullWidth variant="standard">
                        <InputLabel color='success' htmlFor="input-with-icon-adornment">
                            Your Email
                        </InputLabel>
                        <Input
                            type='email'
                            color='success'
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <AlternateEmailIcon />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl sx={{ mt: 2 }} fullWidth variant="standard">
                        <InputLabel color='success' htmlFor="input-with-icon-adornment">
                            Your Password
                        </InputLabel>
                        <Input
                            type='email'
                            color='success'
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <KeyIcon />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl sx={{ mt: 2 }} fullWidth variant="standard">
                        <InputLabel color='success' htmlFor="input-with-icon-adornment">
                            Confirm Password
                        </InputLabel>
                        <Input
                            type='email'
                            color='success'
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <KeyIcon />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <Box onClick={() => setCheckBoxStatus(!checkboxStatus)} display={'flex'} justifyContent={'start'} alignItems={'center'} mt={2} >
                        <Checkbox {...label} color="secondary" />
                        <Link style={{ textDecoration: 'none', color: 'blueviolet' }} to='/trams-and-condition'>
                            <Typography> Accept Trams and Condition</Typography>
                        </Link>
                    </Box>
                    <TabPrimaryButton disabled={checkboxStatus}>Register</TabPrimaryButton>
                </Box>
            </form>
        </>
    );
};

export default SignUp;