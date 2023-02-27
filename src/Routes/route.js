import { createBrowserRouter } from "react-router-dom";
import LandingHomeLayout from "../Layout/LandingHomeLayout";
import LandingHome from "../Pages/LandingHome/LandingHome";
import MainRegister from "../Pages/RegisterAndLogin/MainRegister";

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
    }
])

export default router