import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../../Shared/Header/Header';

const DashboardLayout = () => {
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
                        <li><Link>My Orders</Link></li>
                        <li><Link>All Buyers</Link></li>
                        <li><Link>All Sellers</Link></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;