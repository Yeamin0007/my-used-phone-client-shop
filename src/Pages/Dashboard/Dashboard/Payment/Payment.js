import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm/CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_PK);
console.log(stripePromise);
const Payment = () => {
    const order = useLoaderData();
    
    return (
        <div>
            <h2 className='text-3xl text-blue-500 my-3 font-bold'>Payment for {order.name}</h2>
            <marquee className='text-xl font bg-orange-300'>You Need To Pay Tk.{order.price} For This Product.</marquee>
            <div className='flex justify-center md:my-40'>
            <div className='w-96 my-10 mx-10 '>
            <Elements stripe={stripePromise}>
      <CheckoutForm
      order= {order}
      />
    </Elements>
            </div>
            </div>
        </div>
    );
};

export default Payment;