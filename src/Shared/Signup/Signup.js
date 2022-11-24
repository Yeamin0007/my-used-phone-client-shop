import { useForm } from 'react-hook-form';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';



const Signup = () => {
    const [error, SetError] =useState('');

    const{register, formState: {errors}, handleSubmit} = useForm();
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate= useNavigate();


    const handleSignup =data =>{
        console.log(data);
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            SetError('');
            navigate('/login');
            toast('user created sucessfully')
            const userInfo ={
                displayname: data.name
            }
            updateUserProfile(userInfo)
            .then(()=>{})
            .catch(err => console.log(err));         
        })
        .catch(error => {
            console.error(error);
            SetError(error.message);
        });

}



    return (
        <div className='h-[700px] flex justify-center items-center '>
            <div className='w-96 px-10 py-10 bg-blue-100 rounded-md'>
              <h2 className='text-4xl font-bold text-center text-blue-400 my-3'>SIGN UP</h2>
              <form onSubmit={handleSubmit(handleSignup)}>
    
                
                <div className="form-control w-full max-w-xs ">
                 <label className="label">
                 <span className="label-text font-semibold ">Name</span>
                 </label>
                 <input type="text" {...register("name", {required: true})} className="input input-bordered border-info w-full max-w-xs" />
                 {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                 </div>
                <div className="form-control w-full max-w-xs">
                 <label className="label">
                 <span className="label-text font-semibold">Email</span>
                 </label>
                 <input type="email" {...register("email", {required: "Email is required"})} className="input input-bordered border-info w-full max-w-xs" />
                 {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                 </div>

                <div className="form-control w-full max-w-xs">
                 <label className="label">
                 <span className="label-text font-semibold">Password</span>
                 </label>
                 <input type="password" {...register("password", {required: "Password is required", minLength: { value: 6, message:"password must be 6 characters long" }})} className="input input-bordered border-info w-full max-w-xs" />
                 {errors.password && <p className='text-error'>{errors.password?.message}</p>}
                 </div>

               
               <input className='btn btn-info w-full my-3 text-white' value="Signup" type="submit" />
               </form>
               <p className='text-sm my-3' >Already Have An Account? <Link to='/login' className='text-blue-400'>Login Here</Link></p>
               <small className='text-red-700'>
                {error}
            </small>
            </div>
        </div>
    );
};

export default Signup;