import { useForm } from 'react-hook-form';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';



const Signup = () => {
    const [error, SetError] = useState('');

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [createdEmail, setCreatedEmail] = useState('')
    const [token] = useToken(createdEmail)
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }

    const handleSignup = data => {
        console.log(document.getElementById('role').value);
        const role = document.getElementById('role').value;
        createUser(data.email, data.password, role)
            .then(result => {
                const user = result.user;
                console.log(user);
                SetError('');
                toast('user created sucessfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUserProfile(userInfo)
                    .then(() => {
                        saveBuyer(data.name, data.email, role);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.error(error);
                SetError(error.message);
            });

    }
    const saveBuyer = (name, email, role) => {
        const user = { name, email, role };
        fetch('http://localhost:5000/buyers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedEmail(email);

            })
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
                        <input type="text" {...register("name", { required: true })} className="input input-bordered border-info w-full max-w-xs" />
                        {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                    </div>

                    <select id='role' name='role' className="select w-full max-w-xs my-3" required>
                        <option selected value='buyer'>Buyer</option>
                        <option value='seller'>Seller</option>
                        
                    </select>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: "Email is required" })} className="input input-bordered border-info w-full max-w-xs" />
                        {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: "password must be 6 characters long" } })} className="input input-bordered border-info w-full max-w-xs" />
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