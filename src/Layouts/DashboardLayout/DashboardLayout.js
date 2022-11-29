import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../hooks/UseAdmin/useAdmin';
import useBuyer from '../../hooks/UseBuyer/useBuyer';
import useSeller from '../../hooks/UseSeller/useSeller';
import Header from '../../Shared/Header/Header';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] =useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)
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
                        
                        {  isBuyer && <>
                            
                            <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                        </>
                            
                        }
                        
                        {
                            isAdmin && <>
                            <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                        <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                            </>
                        }
                        {
                             isSeller && <>
                             <li><Link to='/dashboard/addproducts'>Add Products</Link></li>
                            <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                        
                            </>
                        }
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;