import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';

const ProductCollection = () => {

    const products = useLoaderData();
    console.log(products);

    const [product, setProduct] = useState(null);

    return (
        <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-3 my-6 '>

        {
                products.map(products =>
                <div  key={products._id} products={products}>
                    
                    <div className="card shadow-lg bg-blue-100">
                    <div className='flex justify-between py-5 px-5'>
                        <h2 className='text-xl font-bold'>{products.seller}</h2>
                        <p className='text-gray-600 font-semibold text-base'>{products.location}</p>
                    </div>
                <img src={products.img} className="w-auto h-72" alt="Album"/>
                <div className=" card-body px-4">
                  <h2 className="text-xl font-bold pb-5 text-blue-500">{products.name}</h2>
                  <p> <span className='font-semibold text-lg'> Description :</span> {products.description}.</p>
                  <p> <span className='font-semibold text-lg'> Reason for selling: </span>{products.reason}.</p>
                  <p> <span className='font-semibold text-lg'> Product used :</span> {products.used}.</p>
                    
                    <div className='flex justify-between py-5'>

                    <p className='font-bold text-lg text-blue-600'> <span className='font-semibold text-lg'>Price : </span>$ {products.price}</p>
                  <p className='font-bold text-end px-5'> <span className='font-semibold text-lg'>Condition :</span> {products.condition}</p>
                  
                    </div>

                  <div className="flex justify-center">
                    <label onClick={()=> setProduct(products)} htmlFor="product-modal" className="btn btn-sm btn-primary">Book Now</label>
                  </div>
                </div>
              </div>
                </div>)
            }
            { 
            product &&
             <BookingModal
             product={product}
             ></BookingModal>
            }
        </div>
    );
};

export default ProductCollection;