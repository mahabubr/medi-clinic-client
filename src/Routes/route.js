import { createBrowserRouter } from "react-router-dom";
import LandingHomeLayout from "../Layout/LandingHomeLayout";
import RoleLayout from "../Layout/RoleLayout";
import LandingHome from "../Pages/LandingHome/LandingHome";
import MainRegister from "../Pages/RegisterAndLogin/MainRegister";
import RegisterRole from "../Pages/RegisterRole/RegisterRole";

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
            }
        ]
    }
])

export default router