import React from 'react';
import { Link } from 'react-router-dom';
import './Slider.css'

const Slider = () => {
    return (
        <div>
        <div className="carousel w-full lg:h-[600px]">
<div id="slide1" className="carousel-item relative w-full">
<div className='slider-gradient w-full'>
<img src="https://images.pexels.com/photos/89955/pexels-photo-89955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' className="w-full" />
</div>

  <div className="absolute  text-center transform -translate-y-1/2 left-5 right-5 top-1/2">
  <h2 className='sm:text-3xl md:text-7xl font-bold pb-10 text-blue-400'>GET<span className='text-white'> YOUR PHONE</span></h2>
  <h2 className='text-lg font-semibold pb-10 text-white'>Find the best second hand phones in the cheapest prices. Explore us</h2>
  <Link to='/about'><button className="btn btn-outline border-blue-400 text-white">About Us</button></Link>
  

</div> 
   
  
 

<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
  <a href="#slide2" className="btn btn-circle">❮</a> 
  <a href="#slide2" className="btn btn-circle">❯</a>
</div>

</div> 

<div id="slide2" className="carousel-item relative w-full">
<div className='w-full slider-gradient'>
<img src="https://images.pexels.com/photos/1209435/pexels-photo-1209435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' className="w-full" />
</div>

<div className="absolute  text-center transform -translate-y-1/2 left-5 right-5 top-1/2">
  <h2 className='md:text-7xl font-bold pb-10 text-white '>SECOND HAND IPHONE <span className='text-orange-300 '>OFFERS!!</span> </h2>
  <h2 className='text-lg font-semibold pb-10 text-white'>Apple mobile phones at best price only on Cell-it, the largest phone marketplace in Bangladesh. </h2>
  <Link to='category/1'><button className="btn btn-outline border-orange-200 text-white">Book Now</button></Link>

</div> 


<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
  <a href="#slide1" className="btn btn-circle">❮</a> 
  <a href="#slide1" className="btn btn-circle">❯</a>
</div>

</div> 
</div>
    </div>
    );
};

export default Slider;