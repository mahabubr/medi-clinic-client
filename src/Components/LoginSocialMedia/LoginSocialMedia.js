import { Button, ButtonGroup, Typography } from '@mui/material';
import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useDispatch } from 'react-redux';
import { facebookLogin, githubLogin, googleLogin } from '../../Redux/features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const LoginSocialMedia = () => {


    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleGoogleSignUp = () => {
        dispatch(googleLogin())
        navigate('/role')
    }

    const handleFacebookSignUp = () => {
        dispatch(facebookLogin())
        navigate('/role')
    }


    const handleGithubSignUp = () => {
        dispatch(githubLogin())
        navigate('/role')
    }



    return (
        <ButtonGroup sx={{
            display: {
                xs: 'none',
                md: 'flex'
            }
        }} fullWidth variant="text" color='error' aria-label="text button group">
            <Button onClick={handleGoogleSignUp} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                <GoogleIcon />
                <Typography variant='subtitle2'>Google</Typography>
            </Button>
            <Button onClick={handleFacebookSignUp} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                <FacebookIcon />
                <Typography variant='subtitle2'>Facebook</Typography>
            </Button>
            <Button onClick={handleGithubSignUp} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                <GitHubIcon />
                <Typography variant='subtitle2'>Github</Typography>
            </Button>
        </ButtonGroup>
    );
};

export default LoginSocialMedia;