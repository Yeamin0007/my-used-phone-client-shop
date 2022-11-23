import { useForm } from 'react-hook-form';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const{register, handleSubmit} = useForm();
    const handleLogin =data =>{
        console.log(data);
    }
    

    return (
        <div className='h-[700px] flex justify-center items-center '>
            <div className='w-96 px-10 py-10 bg-blue-100 rounded-md'>
              <h2 className='text-4xl font-bold text-center text-blue-400 my-3'>LOGIN</h2>
              <form onSubmit={handleSubmit(handleLogin)}>
    
                
                <div className="form-control w-full max-w-xs">
                 <label className="label">
                 <span className="label-text font-semibold ">Email</span>
                 </label>
                 <input type="text" {...register("email")} className="input input-bordered border-info w-full max-w-xs" />
                 </div>
                <div className="form-control w-full max-w-xs">
                 <label className="label">
                 <span className="label-text font-semibold">Password</span>
                 </label>
                 <input type="text" {...register("password")} className="input input-bordered border-info w-full max-w-xs" />
                 <label className="label">
                 <span className="label-text">Forget Password?</span>
                 </label>
                 </div>

               
               <input className='btn btn-info w-full  text-white' value="Login" type="submit" />
               </form>
               <p className='text-sm py-3' >New to Cell-it? <Link to='/register' className='text-blue-400'>Creat An Account</Link></p>
               <div className="divider">OR</div>
               <button className='btn btn-outline border-info w-full'>Login with Google</button>
            </div>
        </div>
    );
};

export default Login;