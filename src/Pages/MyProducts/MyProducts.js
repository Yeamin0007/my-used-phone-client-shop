import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import MyProductCard from './MyProductCard';

const MyProducts = () => {

    const { user } = useContext(AuthContext);
    const [myProducts, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myproducts?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [user?.email])

    console.log(myProducts)

    const handleDelete = _id => {
        const proceed = window.confirm('Do you want to delete this review?');
        if (proceed) {
            fetch(`http://localhost:5000/myproducts/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Product Deleted!');
                        const remaining = myProducts.filter(product => product._id !== _id);
                        setProducts(remaining);
                    }
                })
        }
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto'>
            {
                myProducts.map(product => <MyProductCard
                    key={product._id}
                    product={product}
                    handleDelete={handleDelete}
                >
                </MyProductCard>)
            }
        </div>
    );
};

export default MyProducts;