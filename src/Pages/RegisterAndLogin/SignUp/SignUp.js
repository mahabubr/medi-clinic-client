import React, { useState } from 'react';
import BadgeIcon from '@mui/icons-material/Badge';
import { Alert, Box, Checkbox, FormControl, Input, InputAdornment, InputLabel, Typography } from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { TabPrimaryButton } from '../../../Styles/Button/button';
import KeyIcon from '@mui/icons-material/Key'
import { Link } from 'react-router-dom';
import { useFileUpload } from 'use-file-upload';
import { useForm } from 'react-hook-form';


const SignUp = () => {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const [checkboxStatus, setCheckBoxStatus] = useState(true)
    const [file, selectFile] = useFileUpload()

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [passwordError, setPasswordError] = useState('')

    const onSubmit = data => {
        if (data.password !== data.confirmPassword) {
            setPasswordError('Password Not Matched')
            return
        }

        const formInfo = {
            name: data.name,
            email: data.email,
            password: data.password,
            confirm_password: data.confirmPassword
        }

    };

    return (
        <>
            <Alert severity="success" color="info">
                Please Full Out All The Section
            </Alert>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box>
                    {file
                        ?
                        <Box mt={2} sx={{ display: 'grid', placeItems: 'center' }}>
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
                            {...register("name", { required: true, maxLength: 20 })}
                            color='success'
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <BadgeIcon />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    {
                        errors.name?.type === 'required' &&
                        <Alert severity="error">Name is required</Alert>
                    }
                    <FormControl sx={{ mt: 2 }} fullWidth variant="standard">
                        <InputLabel color='success' htmlFor="input-with-icon-adornment">
                            Your Email
                        </InputLabel>
                        <Input
                            {...register("email", { required: true, maxLength: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ })}
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
                    {
                        errors.email?.type === 'required' &&
                        <Alert severity="error">Email is required</Alert>
                    }
                    <FormControl sx={{ mt: 2 }} fullWidth variant="standard">
                        <InputLabel color='success' htmlFor="input-with-icon-adornment">
                            Your Password
                        </InputLabel>
                        <Input
                            {...register("password", { required: true, minLength: 6 })}
                            type='password'
                            color='success'
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <KeyIcon />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    {
                        errors.password?.type === 'required' &&
                        <Alert severity="error">Password is required</Alert>
                    }
                    <FormControl sx={{ mt: 2 }} fullWidth variant="standard">
                        <InputLabel color='success' htmlFor="input-with-icon-adornment">
                            Confirm Password
                        </InputLabel>
                        <Input
                            {...register("confirmPassword", { required: true, minLength: 6 })}
                            type='password'
                            color='success'
                            id="input-with-icon-adornment"
                            startAdornment={
                                <InputAdornment position="start">
                                    <KeyIcon />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    {
                        errors.confirmPassword?.type === 'required' &&
                        <Alert severity="error">Confirm Password is required</Alert>
                    }
                    {
                        passwordError &&
                        <Alert severity="error">{passwordError}</Alert>
                    }
                    <Box onClick={() => setCheckBoxStatus(!checkboxStatus)} display={'flex'} justifyContent={'start'} alignItems={'center'} mt={2} >
                        <Checkbox {...label} color="secondary" />
                        <Link style={{ textDecoration: 'none', color: 'blueviolet' }} to='/trams-and-condition'>
                            <Typography> Accept Trams and Condition</Typography>
                        </Link>
                    </Box>
                    <TabPrimaryButton>Register</TabPrimaryButton>
                </Box>
            </form>
        </>
    );
};

export default SignUp;