import React from 'react';
import { Link } from 'react-router-dom';
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'

const HomeAccount = () => {
    return (
        <div>
            <div className='my-10'>
            <div className="hero h-96 " style={{ backgroundImage: `url("https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1600")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="text-center md:text-start  text-neutral-content grid lg:grid-cols-2">
            <div className="text-orange-50">
            <h1 className="mb-5 text-5xl font-bold">Welcome To The Family</h1>
            <p className="mb-5">Creat an account on <span className='text-blue-400 font-bold'>Cell-it</span> and save upto 10% on your first order.<br/> You may also get a special gift.</p>
            <Link><button className="btn btn-outline text-orange-50 btn-sm border-blue-400">SignUp</button></Link>
            </div>
            <div className='hidden md:flex justify-around  gap-8'>
            <div className="card card-side shadow-xl px-5 bg-blue-200">
  <figure><img src={icon1} alt="Movie"/></figure>
  <div className="card-body text-slate-800 ">
    <h2 className="card-title font-bold">Client Satisfiction</h2>
    <p className='font-semibold text-2xl'>100%</p>
   
  </div>
</div>

<div className="card card-side shadow-xl px-5 bg-blue-200 ">
  
  <div className="card-body text-slate-800 ">
    <h2 className="card-title font-bold">Happy Customers</h2>
    <p className='font-semibold text-2xl'> +600 </p>
     </div>
  <figure><img src={icon2} alt="Movie"/></figure>
</div>
            </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default HomeAccount;