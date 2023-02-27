import { Button, ButtonGroup, Typography } from '@mui/material';
import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const LoginSocialMedia = () => {
    return (
        <ButtonGroup sx={{
            display: {
                xs: 'none',
                md: 'flex'
            }
        }} fullWidth variant="text" color='error' aria-label="text button group">
            <Button sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                <GoogleIcon />
                <Typography variant='subtitle2'>Google</Typography>
            </Button>
            <Button sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                <FacebookIcon />
                <Typography variant='subtitle2'>Facebook</Typography>
            </Button>
            <Button sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                <GitHubIcon />
                <Typography variant='subtitle2'>Github</Typography>
            </Button>
        </ButtonGroup>
    );
};

export default LoginSocialMedia;