import React, { useEffect, useState } from 'react';
import { Alert, Box, Checkbox, FormControl, Input, InputAdornment, InputLabel, Typography } from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { TabPrimaryButton } from '../../../Styles/Button/button';
import KeyIcon from '@mui/icons-material/Key'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { registerUser } from '../../../Redux/features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import SecondaryLoader from '../../../Components/SecondaryLoader/SecondaryLoader';
import { toast } from 'react-toastify';

const SignUp = () => {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const [checkboxStatus, setCheckBoxStatus] = useState(true)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [passwordError, setPasswordError] = useState('')

    const navigate = useNavigate()

    const { error, isLoading, user: { email: signUpEmail } } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!isLoading && signUpEmail) {
            navigate('/role')
            toast.success('Sign Up Successful!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }, [isLoading, signUpEmail, navigate])

    const onSubmit = data => {
        if (data.password !== data.confirmPassword) {
            setPasswordError('Password Not Matched')
            return
        }

        const email = data.email
        const password = data.password

        dispatch(registerUser({ email, password }))
    };

    return (
        <>
            <Alert severity="success" color="info">
                Please Full Out All The Section
            </Alert>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box>
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
                    {
                        isLoading
                            ?
                            <SecondaryLoader />
                            :
                            <TabPrimaryButton>Register</TabPrimaryButton>
                    }
                    {
                        error &&
                        <Alert severity="error">{error.slice(17, -2)}</Alert>
                    }
                </Box>
            </form>
        </>
    );
};

export default SignUp;