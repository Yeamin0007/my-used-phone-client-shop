import { useForm } from 'react-hook-form';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const [error, setError] = useState('');

    const{register, formState: {errors}, handleSubmit} = useForm();

    const {loginUser, providerLogin} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';


    const handleLogin =data =>{
        console.log(data);

        loginUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('');
            navigate(from, {replace: true});
            
            
        })
        .catch(error=> {
            console.error(error);
            setError(error.message);
        });
    }

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn =() =>{
        providerLogin(googleProvider)
        .then(result =>{
         const user = result.user;
         console.log(user);
      navigate(from, {replace: true});
     })
     .catch(error => console.error(error))
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
                 <input type="text" {...register("email", {required: "Email is required"})} className="input input-bordered border-info w-full max-w-xs" />
                 {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                 
                 </div>
                <div className="form-control w-full max-w-xs">
                 <label className="label">
                 <span className="label-text font-semibold">Password</span>
                 </label>
                 <input type="text" {...register("password", {required: "Password is required", minLength: { value: 6, message:"password must be 6 characters long" }})} className="input input-bordered border-info w-full max-w-xs" />
                 {errors.password && <p className='text-error'>{errors.password?.message}</p>}
                 <label className="label">
                 <span className="label-text">Forget Password?</span>
                 </label>
                 </div>

               
               <input className='btn btn-info w-full  text-white' value="Login" type="submit" />
               </form>
               <p className='text-sm py-3' >New to Cell-it? <Link to='/register' className='text-blue-400'>Creat An Account</Link></p>
               <small className='text-red-700 text-center'>
                        {error}
                    </small>
               <div className="divider">OR</div>
               <button onClick={handleGoogleSignIn}  className='btn btn-outline border-info w-full'>Login with Google</button>
            </div>
        </div>
    );
};

export default Login;