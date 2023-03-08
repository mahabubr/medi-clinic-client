import { Button, ButtonGroup, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useDispatch, useSelector } from 'react-redux';
import { facebookLogin, githubLogin, googleLogin } from '../../Redux/features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { usePostRoleMutation, usePostUserMutation } from '../../Redux/features/role/roleApi';

const LoginSocialMedia = () => {

    const { error, isLoading, user: { email: signUpEmail } } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    // const [postRole, { isSuccess }] = usePostRoleMutation()
    // const [postUser] = usePostUserMutation()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isLoading && signUpEmail) {
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
            // const userInfo = {
            //     img: '',
            //     name: '',
            //     designation: '',
            //     email: signUpEmail,
            //     phone: '',
            //     role: 'user'
            // }
            // postRole(userInfo)
            // postUser(userInfo)
            navigate('/dashboard/user')
        }
    }, [isLoading, signUpEmail, navigate])

    const handleGoogleSignUp = () => {
        dispatch(googleLogin())
    }

    const handleFacebookSignUp = () => {
        dispatch(facebookLogin())
    }


    const handleGithubSignUp = () => {
        dispatch(githubLogin())
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