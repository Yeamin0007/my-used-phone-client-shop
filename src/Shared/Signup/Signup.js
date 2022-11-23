import { useForm } from 'react-hook-form';
import React from 'react';
import { Link } from 'react-router-dom';


const Signup = () => {

    const{register, handleSubmit} = useForm();
    const handleSignup =data =>{
        console.log(data);
    }

    return (
        <div className='h-[700px] flex justify-center items-center '>
            <div className='w-96 px-10 py-10 bg-blue-100 rounded-md'>
              <h2 className='text-4xl font-bold text-center text-blue-400 my-3'>SIGN UP</h2>
              <form onSubmit={handleSubmit(handleSignup)}>
    
                
                <div className="form-control w-full max-w-xs ">
                 <label className="label">
                 <span className="label-text font-semibold ">Email</span>
                 </label>
                 <input type="text" {...register("email")} className="input input-bordered border-info w-full max-w-xs" />
                 </div>
                <div className="form-control w-full max-w-xs">
                 <label className="label">
                 <span className="label-text font-semibold">Password</span>
                 </label>
                 <input type="password" {...register("password")} className="input input-bordered border-info w-full max-w-xs" />
                 
                 </div>

                <div className="form-control w-full max-w-xs">
                 <label className="label">
                 <span className="label-text font-semibold">Confirm Password</span>
                 </label>
                 <input type="password" {...register("confirmPassword")} className="input input-bordered border-info w-full max-w-xs" />
                 
                 </div>

               
               <input className='btn btn-info w-full my-3 text-white' value="Signup" type="submit" />
               </form>
               <p className='text-sm my-3' >Already Have An Account? <Link to='/login' className='text-blue-400'>Login Here</Link></p>
            </div>
        </div>
    );
};

export default Signup;