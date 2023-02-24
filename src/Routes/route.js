import { createBrowserRouter } from "react-router-dom";
import LandingHomeLayout from "../Layout/LandingHomeLayout";
import LandingHome from "../Pages/LandingHome/LandingHome";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingHomeLayout />,
        children: [
            {
                path: '/',
                element: <LandingHome />
            }
        ]
    }
])

export default router