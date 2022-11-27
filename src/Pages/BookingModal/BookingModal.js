import React, {useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';


const BookingModal = ({product}) => {
    const {user} = useContext(AuthContext);
    console.log(user);
    const {email, displayName} = user;
    const {name, price} = product;

    const handleOrder= (()=>{

    }) 

    return (
    
        <section>
            <input type="checkbox" id="product-modal" className="modal-toggle" />
             <div className="modal">
             <div className="modal-box relative">
             <label htmlFor="product-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-xl text-blue-600 text-center font-bold">{name}</h3>
            <form onSubmit={handleOrder} className='grid grid-cols-1 gap-2 mt-8'>
            <input type="text" value={email} placeholder="Type here" disabled className="input input-bordered input-info w-full font-bold " />
            <input type="text" value={displayName} placeholder="Type here" disabled className="input input-bordered input-info w-full font-bold " />
            <input type="text" value={price}placeholder="Type here" disabled className="input input-bordered input-info w-full font-bold " />
            <input type="text" placeholder="Meeting Location" className="input input-bordered input-info w-full font-semibold" />
            <input type="text" placeholder="Phone Number" className="input input-bordered input-info w-full font-semibold " />
            <input type="submit" className='btn btn-info w-full' value="Submit" />
            </form>
            </div>
            </div>
        </section>    
        
    );
};

export default BookingModal;