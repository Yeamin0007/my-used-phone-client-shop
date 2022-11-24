import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/footer.png'
import logo1 from '../../assets/logo1.png'

const Footer = () => {
    return (
        <div>
        <footer style={{
        background: `url(${footer})` 
    }} className="footer p-10 bg-base-200 text-info">
<div>
<img className='h-24 motion-safe:hover:scale-110' src={logo1} alt="logo" />
<h2 className='text-4xl font-bold text-blue-500'>Cell-<span className='text-orange-400'>it</span></h2>

</div> 
<div>
<span className="footer-title">Services</span> 
<Link className="link link-hover">Branding</Link> 
<Link className="link link-hover">Design</Link> 
<Link className="link link-hover">Marketing</Link> 
<Link className="link link-hover">Advertisement</Link>
</div> 
<div>
<span className="footer-title">Company</span> 
<Link className="link link-hover">About us</Link> 
<Link className="link link-hover">Contact</Link> 
<Link className="link link-hover">Jobs</Link> 
<Link className="link link-hover">Press kit</Link>
</div> 
<div>
<span className="footer-title">Legal</span> 
<Link className="link link-hover">Terms of use</Link> 
<Link className="link link-hover">Privacy policy</Link> 
<Link className="link link-hover">Cookie policy</Link>
</div>
</footer>
    </div>
    );
};

export default Footer;