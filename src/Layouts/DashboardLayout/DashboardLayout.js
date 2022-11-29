import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Header from '../../Shared/Header/Header';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <Header></Header>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col  text-center mt-6">
                    <Outlet></Outlet>
                    

                </div>
                <div className="drawer-side ">
                    <label htmlFor="dashboard-drawer" className=" drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content bg-blue-100">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                        <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                        <li><Link to='/dashboard/allsellers'>My Products</Link></li>
                        <li><Link to='/dashboard/allsellers'>Add Products</Link></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;