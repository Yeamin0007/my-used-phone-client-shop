import React from 'react';
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'

const ContactCard = () => {
    return (
        <div className='my-10 max-w-screen-lg mx-auto'>
            <h2 className='sm:text-xl md:text-5xl text-center font-bold text-blue-600 my-10'>WELCOME TO CELL-IT SUPPORT. WE'RE HERE TO HELP.</h2>
            <h3 className='text-center font-bold my-10 text-orange-300'>ALWAYS ON YOUR SIDE WHEN YOU NEED HELP</h3>
        <section className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 '>
        <div className="card card-side  shadow-xl px-5 bg-blue-200">
<figure><img src={icon4} alt="Movie"/></figure>
<div className="card-body">
<h2 className="card-title">Chat Now</h2>
<p>Wanna talk with us? Just send a text messege.</p>

</div>
</div>

<div className="card card-side shadow-xl px-5 bg-blue-200">
<figure><img src={icon3} alt="Movie"/></figure>
<div className="card-body">
<h2 className="card-title ">We are 24/7 Availabe</h2>
<p>Call +8802020202020 anytime to contact us.</p>

</div>
</div>

        </section>
    </div>
    );
};

export default ContactCard;