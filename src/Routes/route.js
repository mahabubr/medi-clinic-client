import { createBrowserRouter } from "react-router-dom";
import LandingHomeLayout from "../Layout/LandingHomeLayout";
import RoleLayout from "../Layout/RoleLayout";
import LandingHome from "../Pages/LandingHome/LandingHome";
import MainRegister from "../Pages/RegisterAndLogin/MainRegister";
import Doctor from "../Pages/RegisterRole/Doctor/Doctor";
import Hospital from "../Pages/RegisterRole/Hospital/Hospital";
import Pharmacy from "../Pages/RegisterRole/Pharmacy/Pharmacy";
import RegisterRole from "../Pages/RegisterRole/RegisterRole";
import User from "../Pages/RegisterRole/User/User";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingHomeLayout />,
        children: [
            {
                path: '/',
                element: <LandingHome />
            },
            {
                path: '/register',
                element: <MainRegister />
            }
        ]
    },
    {
        path: '/role',
        element: <RoleLayout />,
        children: [
            {
                path: '/role',
                element: <RegisterRole />
            },
            {
                path: '/role/doctor',
                element: <Doctor />
            },
            {
                path: '/role/hospital',
                element: <Hospital />
            },
            {
                path: '/role/pharmacy',
                element: <Pharmacy />
            },
            {
                path: '/role/user',
                element: <User />
            },
        ]
    }
])

export default router