import React, {useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';


const BookingModal = ({product, setProduct}) => {
    const {user} = useContext(AuthContext);
    console.log(user);
    const {email, displayName} = user;
    const {name, price, img} = product;

    const handleOrder= event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const displayname = form.displayname.value;
        const price = form.price.value;
        const meetinglocation = form.meetinglocation.value;
        const phone = form.phone.value;

        const booking = {
            name,
            img,
            email,
            customername :displayname,
            price,
            meetinglocation,
            phone,
        }
        console.log(booking);
        setProduct(null);

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                    toast.success('order done sucessfully')
                }
            })
            .catch(error => console.error(error));
    

    }

    return (
    
        <section>
            <input type="checkbox" id="product-modal" className="modal-toggle" />
             <div className="modal">
             <div className="modal-box relative">
             <label htmlFor="product-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-xl text-blue-600 text-center font-bold">{name}</h3>
            <form onSubmit={handleOrder} className='grid grid-cols-1 gap-2 mt-8'>
            <input name='email' type="email" value={email} placeholder="Type here" disabled className="input input-bordered input-info w-full font-bold " />
            <input name='displayname' type="text" value={displayName} placeholder="Type here" disabled className="input input-bordered input-info w-full font-bold " />
            <input name='price' type="text" value={price}placeholder="Type here" disabled className="input input-bordered input-info w-full font-bold " />
            <input name='meetinglocation' type="text" placeholder="Meeting Location" className="input input-bordered input-info w-full font-semibold" />
            <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered input-info w-full font-semibold " />
            <input type="submit" className='btn btn-info w-full' value="Submit" />
            </form>
            </div>
            </div>
        </section>    
        
    );
};

export default BookingModal;