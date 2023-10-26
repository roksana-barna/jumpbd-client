import React, { useContext} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import img from "../assets/6.jpg"
import {FaHandPointRight } from 'react-icons/fa';
import './style.css';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

// import Swal from 'sweetalert2';
// import { AuthContext } from '../../AuthProvider';
// import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
const Register = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues:{
        role:'student'
    }
});
const { createUser, updateUserProfile } = useContext(AuthContext);
const navigate = useNavigate();
const onSubmit = data => {

    createUser(data.email, data.password)
        .then(result => {

            const loggedUser = result.user;
            console.log(loggedUser);

            updateUserProfile(data.name, data.photoURL)
                .then(() => {
                    const saveUser = { name: data.name, email: data.email,photoURL:data.photoURL }
                    fetch('http://localhost:5000/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(saveUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'User created successfully.',
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate('/');
                            }
                        })
                })
                .catch(error => console.log(error))
        })
};

  return (
    <>
      <div className="hero min-h-screen img ">
        <div className="hero-content  flex-col  lg:flex-row-reverse">
          <div className="">
            {/* <img className='' src={img}alt="" /> */}
          
          </div>
          <div className='text-cyan-600'><FaHandPointRight></FaHandPointRight></div>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form className="card-body bg-base-200 "  onSubmit={handleSubmit(onSubmit)} >
              <h1 className='text-center font-bold text-xl uppercase'>Create Account</h1>
              <div className='flex gap-2'>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text"> First Name</span>
                  </label>
                  <input type="text"  {...register("fname", { required: true })} name="fname" placeholder="First Name" className="input input-bordered" />
                  {errors.name && <span className="text-red-600">Name is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text"> Last Name</span>
                  </label>
                  <input type="text"  {...register("lname", { required: true })} name="lname" placeholder=" Last Name" className="input input-bordered" />
                  {errors.name && <span className="text-red-600">Name is required</span>}
                </div>
              </div>
              <div className='flex gap-2'>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                  {errors.email && <span className="text-red-600">Email is required</span>}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password"  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                  })} placeholder="password" className="input input-bordered" />
                  {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                  {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                  {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase,One Special Character</p>}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
              </div>

              <div className="form-control mt-6">
                <input className="btn bg-cyan-600 text-white" type="submit" value="Register" />
              </div>
              {/* <SocialLogin></SocialLogin> */}
            </form>
            <p className='mb-6'><small className='text-blue-900 pl-8  mt-2'>Already have an account?? <button className='bg-cyan-500 text-white px-4 py-1 '><Link to="/login">Login</Link></button></small></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;