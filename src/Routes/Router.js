import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import Main from "../Layouts/Main/Main";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyOrders from "../Pages/MyOrders/MyOrders";
import ProductCollection from "../Pages/ProductCollection/ProductCollection";
import Login from "../Shared/Login/Login";
import Signup from "../Shared/Signup/Signup";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import AllBuyers from "../Pages/AllBuyers/AllBuyers"
import AllSeller from "../Pages/AllSeller/AllSeller";
import AdminRoutes from "./AdminRoutes/AdminRoutes";
import MyProducts from "../Pages/MyProducts/MyProducts";
import SellerRoutes from "./SellerRoutes/SellerRoutes";
import BuyerRoutes from "./BuyerRoutes/BuyerRoutes";


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
                path:'/dashboard/myorders',
                element: <BuyerRoutes><MyOrders></MyOrders></BuyerRoutes>
            },
            {
                path:'/dashboard/allbuyers',
                element: <AdminRoutes><AllBuyers></AllBuyers></AdminRoutes>
            },
            {
                path:'/dashboard/allsellers',
                element: <AdminRoutes><AllSeller></AllSeller></AdminRoutes>
            },
            {
                path:'/dashboard/addproducts',
                element: <SellerRoutes><AddProduct></AddProduct></SellerRoutes>
            },
            {
                path:'/dashboard/myproducts',
                element: <SellerRoutes><MyProducts></MyProducts></SellerRoutes>
            },
        ]    
    }
])