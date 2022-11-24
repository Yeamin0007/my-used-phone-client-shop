import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Main from "../Layouts/Main/Main";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Login from "../Shared/Login/Login";
import Signup from "../Shared/Signup/Signup";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Signup></Signup>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
    }
])