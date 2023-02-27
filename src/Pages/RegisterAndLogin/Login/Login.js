import React, { useState } from 'react';
import { Alert, FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { TabPrimaryButton } from '../../../Styles/Button/button';
import { Link } from 'react-router-dom';


const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <form>
            <Alert severity="success" color="info">
                Please Full Out All The Section
            </Alert>
            <FormControl sx={{ mt: 2 }} fullWidth variant="standard">
                <InputLabel color='success' htmlFor="outlined-adornment-password">
                    Email
                </InputLabel>
                <Input
                    color='success'
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    startAdornment={
                        <InputAdornment position="start">
                            <AlternateEmailIcon />
                        </InputAdornment>
                    }
                    label="Email"
                />
            </FormControl>
            <FormControl sx={{ mt: 2 }} fullWidth variant="standard">
                <InputLabel color='success' htmlFor="outlined-adornment-password">
                    Password
                </InputLabel>
                <Input
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
            <Link to='/forget-password' style={{ display: 'flex', justifyContent: 'end', margin: '5px 0', textDecoration: 'none' }}>
                Forget Password
            </Link>
            <TabPrimaryButton style={{ marginTop: '30px' }}>Login</TabPrimaryButton>
        </form>
    );
};

export default Login;