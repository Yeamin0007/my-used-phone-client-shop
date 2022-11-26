import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductCollection = () => {

    const categoryDetails = useLoaderData();
    console.log(categoryDetails);

    return (
        <div>
            
        </div>
    );
};

export default ProductCollection;