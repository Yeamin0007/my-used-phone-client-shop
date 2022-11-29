import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import Main from "../Layouts/Main/Main";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../Pages/MyOrders/MyOrders";
import ProductCollection from "../Pages/ProductCollection/ProductCollection";
import Login from "../Shared/Login/Login";
import Signup from "../Shared/Signup/Signup";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import AllBuyers from "../Pages/AllBuyers/AllBuyers"
import AllSeller from "../Pages/AllSeller/AllSeller";

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
            {
                path: '/category/:categoryId',
                element: <PrivateRoutes><ProductCollection></ProductCollection></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/brands/${params.categoryId}`)
            }
        ]
    },
    {
       path:''
    },

    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children:[
            {
                path:'/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path:'/dashboard/allbuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path:'/dashboard/allsellers',
                element: <AllSeller></AllSeller>
            },
        ]    
    }
])