import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../assets/logo1.png'
import { AuthContext } from '../../Context/AuthProvider';

const Header = () => {

    const{user, logOut}= useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }

    const menuItems = <>
<li><Link to='/' className='text-orange-400'>Home</Link></li>
<li><Link to='/blog' className='text-orange-400'>Blog</Link></li>
{
    user?.email ?
        <>
            <li><Link to='/dashboard' className='text-orange-400'>Dashboard</Link></li>
            <li><Link to='/myReviews' className='text-orange-400'>Something</Link></li>
        </>
        :
        <></>
}
</>

const menuSignInOut = <>
{
    user?.email ?
        <button onClick={handleLogOut} className="btn btn-xs md:btn-md btn-info">Logout</button>
        :
        <Link to='/login'><button className="btn btn-info">Login</button></Link>
}
</>


    return (
       

        <div className="navbar bg-[#DEF6FF] text-[#3c4dce] font-bold py-2 px-5  ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
        {
          menuItems
        }
         </ul>
    </div>
    <img className='h-12 md:h-24 motion-safe:hover:scale-110 ' src={logo1} alt="logo" />
    <Link className='btn btn-ghost normal-case text-xl text-accent' to='/'>
    <h2 className='text-2xl md:text-4xl font-bold text-blue-500'>Cell-<span className='text-orange-400'>it</span></h2>
    </Link>
  </div>

  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal p-0 text-accent">
      {
        menuItems
      }
    </ul>
  </div>
  
  <div className="navbar-end">
    {
      menuSignInOut
    }
  </div>

  <label htmlFor="dashboard-drawer" tabIndex={1} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>

</div>

    );
};

export default Header;