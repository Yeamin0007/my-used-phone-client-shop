import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/orders?email=${user?.email}`
    
    const {data: orders = [] }= useQuery({
        queryKey:['orders', user?.email],
        queryFn: async () =>{
            const res = await fetch (url, {
              headers: {
                authorization: `bearer${localStorage.getItem('accessToken')}` 
              }
            });
            const data = await res.json();
            return data;
        }
    })
    
    return (
        <div>
            <h2 className='text-3xl my-5 text-blue-500 font-bold'>My Orders</h2>

            <div className="overflow-x-auto w-full mx-5">
  <table className="table w-full">
    <thead>
      <tr>
        <th>
          
        </th>
        
        <th className='text-blue-400'>Name</th>
        <th className='text-blue-400'>Price</th>
        <th className='text-blue-400'>Payment</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
         {
            orders.map(order =><tr key={order._id}>
                <td>
                 <div className="flex items-center space-x-3">
                   <div className="avatar">
                     <div className="mask mask-squircle w-12 h-12">
                       <img src={order.img} alt="Avatar Tailwind CSS Component" />
                     </div>
                   </div>
                 </div>
               </td>
               <td>
                {order.name}
               </td>
               <td>{order.price}</td>
               <th>
                 {
                  order.price && !order.paid && <Link to={`/dashboard/payment/${order._id}`}><button className="btn btn-warning text-slate-600 btn-xs">Pay</button></Link>
                 }
                 {
                  order.price && order.paid && <span className=" text-green-600 text-sm">Paid</span>
                 }
               </th>
             </tr>)
         }
      
    
    </tbody>
    
    
    
  </table>
</div>

        </div>
    );
};

export default MyOrders;