import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AdvertisedItems = () => {
    const [advertisedProducts, setAdvertisedProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/advertisedProduct')
            .then(res => res.json())
            .then(data => setAdvertisedProducts(data))
    }, []);


    return (
        <div className="max-w-screen-xl mx-auto md:pt-10 pb-6">
          <marquee className=' font-bold text-xl text-white bg-blue-400'>New Arivals. Grab Your Phone Before Others Do.</marquee>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12'>
                {
                    advertisedProducts.map(product => <div key={product._id} className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={product.img} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        {product.name}
                        <div className="badge badge-secondary">NEW</div>
                      </h2>
                      <p>Seller: {product.seller}</p>
                      <div className="card-actions justify-end">
                        <div className="badge badge-outline">Price: Tk.{product.price}</div> 
                        <div className="badge badge-outline ">Condition: {product.condition}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center pb-5">
                                <Link to={`/category/${product.categoryId}`}> <button className="btn btn-xs btn-primary">View Details</button></Link>
                            </div>
                  </div>
                    )
                }
            </div>

        </div>
    );
};

export default AdvertisedItems;