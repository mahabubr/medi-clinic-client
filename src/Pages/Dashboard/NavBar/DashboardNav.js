import { Drawer } from "@mui/material";
import { Box } from "@mui/system";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { AiOutlineAlignRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../Firebase/firebase.config";
import { logout } from "../../../Redux/features/auth/authSlice";
import { PrimaryButton } from "../../../Styles/Button/button";
import logo from '../../../Assets/logo.png'

const DashboardNav = () => {

    const [isOpen, setIsOpen] = useState(false)

    const { user: { email } } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(logout())
                navigate('/')
                toast.success('Log Out Successful!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            })
    }

    return (
        <Box>
            <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', width: '80%', margin: '20px auto' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src={logo} style={{ width: '40px', marginRight: '10px' }} alt="" />
                </Box>
                <Box sx={{
                    display: {
                        xs: 'flex',
                        md: 'none',
                    }, alignItems: 'center'
                }}>
                    <AiOutlineAlignRight onClick={toggleDrawer} fontSize={30} cursor='pointer' />
                </Box>
                <Box sx={{
                    display: {
                        xs: 'none',
                        md: 'flex',
                    }, alignItems: 'center'
                }}>
                    {
                        email
                        &&
                        <>

                            <PrimaryButton onClick={handleSignOut}>Log Out</PrimaryButton>
                        </>
                    }
                </Box>
            </Box>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
            >
                <Box sx={{}}>
                    <Box p={4}>
                        {
                            email
                            &&
                            <PrimaryButton style={{ width: '100%' }} onClick={handleSignOut}>Log Out</PrimaryButton>
                        }
                    </Box>
                </Box>
            </Drawer>
        </Box>
    );
};

export default DashboardNav;