import React, { useEffect, useState } from 'react';
import { Alert, FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { TabPrimaryButton } from '../../../Styles/Button/button';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../Redux/features/auth/authSlice';
import SecondaryLoader from '../../../Components/SecondaryLoader/SecondaryLoader';
import { toast } from 'react-toastify';
import { useGetRoleFilterQuery } from '../../../Redux/features/role/roleApi';


const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { user: { email }, error, isLoading } = useSelector(state => state.auth)
    const { data } = useGetRoleFilterQuery(email)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    useEffect(() => {
        if (data?.role === 'doctor') {
            navigate('/doctor')
            toast.success('Login Successful!', {
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
        if (data?.role === 'hospital') {
            navigate('/hospital')
            toast.success('Login Successful!', {
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
        if (data?.role === 'pharmacy') {
            navigate('/pharmacy')
            toast.success('Login Successful!', {
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
        if (data?.role === 'user') {
            navigate('/user')
            toast.success('Login Successful!', {
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
        // else {
        //     navigate('/register')
        //     toast.error('Please Register As Role!', {
        //         position: "top-center",
        //         autoClose: 5000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "colored",
        //     });
        // }
    }, [navigate, data?.role])

    const onSubmit = ({ email, password }) => {
        dispatch(loginUser({ email, password }));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Alert severity="success" color="info">
                Please Full Out All The Section
            </Alert>
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
                <InputLabel color='success' htmlFor="outlined-adornment-password">
                    Password
                </InputLabel>
                <Input
                    {...register("password", { required: true, minLength: 6 })}
                    color='success'
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>
            {
                errors.password?.type === 'required' &&
                <Alert severity="error">Password is required</Alert>
            }
            <Link to='/forget-password' style={{ display: 'flex', justifyContent: 'end', margin: '5px 0', textDecoration: 'none' }}>
                Forget Password
            </Link>
            {
                isLoading
                    ?
                    <SecondaryLoader />
                    :
                    <TabPrimaryButton style={{ marginTop: '30px' }}>Login</TabPrimaryButton>
            }
            {
                error &&
                <Alert severity="error">{error.slice(17, -2)}</Alert>
            }
        </form>
    );
};

export default Login;