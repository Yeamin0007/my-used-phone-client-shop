import React, { useEffect, useState } from 'react';
import CategoryCard from '../../Pages/CategoryCard/CategoryCard';


const PhoneCategories = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('https://cell-it-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, []);

    return (
        <div>
            <h2 className='text-4xl text-blue-500 font-bold my-10 text-center'>Our Products</h2>
            <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-3'>

            {
                    category.map(category => <CategoryCard
                        key={category._id}
                        category={category}
                    ></CategoryCard>)
                }

            </div>
        </div>
    );
};

export default PhoneCategories;