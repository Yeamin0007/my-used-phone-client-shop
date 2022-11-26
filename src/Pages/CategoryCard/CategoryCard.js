import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
    const {title , img, categoryId} = category;

    return (
        <div className="card bg-base-100 shadow-xl">
  <img src={img} className='w-auto' alt="Movie"/>
  <div className="card-body text-center">
    <h2 className="font-bold text-blue-500 text-2xl">{title}</h2>
    <p>Click to check the latest iphone in cheapest prices.</p>
    <div className="flex items-center justify-center ">
      <Link to={`/category/${categoryId}`} ><button className="btn btn-primary">View Phones</button></Link>
    </div>
  </div>
</div>
    );
};

export default CategoryCard;