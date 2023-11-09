import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const Register3 = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [oldData, setOldData]= useState({});
    useEffect(() => {
        const getData = JSON.parse(localStorage.getItem("abc"));
        setOldData(getData);
    }, [])
    const onSubmit = (data) => {

        console.log(data)
        localStorage.removeItem("abc")
        localStorage.setItem("abc" , JSON.stringify(data));
        
    }

    return (

        <div className='bg-cyan-50 w-[800px]  md:ml-32 mb-10'>
            <div className=" p-5">

               
                {/* </form > */} 
                <form onChange={handleSubmit(onSubmit)} >
                <div className="form-control">
                 <label className="label">
                   <span className="label-text text-gray-700">Business Name:</span>
                 </label>
                <input
                  type="text"
                  {...register("businessName")}
                  name="businessName"
                  defaultValue={oldData?.businessName}
                  placeholder="Business Name"
                  className="input input-bordered mt-1 w-full text-gray-800"
                />
                {errors.businessName && (
                  <span className="text-red-600 text-sm">Business Name is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700">NID Number:</span>
                </label>
                <input
                  type="number"
                  {...register("nidNumber")}
                  name="nidNumber"
                  defaultValue={oldData?.nidNumber}
                  placeholder="NID Number"
                  className="input input-bordered mt-1 w-full text-gray-800"
                />
                {errors.nidNumber && (
                  <span className="text-red-600 text-sm">NID Number is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700">Date Of Birth:</span>
                </label>
                <input
                  type="date"
                  {...register("dateOfBirth")}
                  defaultValue={oldData?.dateOfBirth}
                  name="dateOfBirth"
                  className="input input-bordered mt-1 w-full text-gray-800"
                />
                {errors.dateOfBirth && (
                  <span className="text-red-600 text-sm">Date Of Birth is required</span>
                )}
              </div> 
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700">Address:</span>
                </label>
                <input
                  type="text"
                  {...register("address")}
                  defaultValue={oldData?.address}
                  name="address"
                  className="input input-bordered mt-1 w-full text-gray-800"
                />
                {errors.dateOfBirth && (
                  <span className="text-red-600 text-sm">Address</span>
                )}
              </div> 
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700">Website:</span>
                </label>
                <input
                  type="url"
                  {...register("website")}
                  defaultValue={oldData?.website}
                  name="website"
                  className="input input-bordered mt-1 w-full text-gray-800"
                />
                {errors.website && (
                  <span className="text-red-600 text-sm">Website</span>
                )}
              </div> 
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700">Facebook Business Page Link:</span>
                </label>
                <input
                  type="url"
                  {...register("businessPage")}
                  defaultValue={oldData?.businessPage}
                  name="businessPage"
                  className="input input-bordered mt-1 w-full text-gray-800"
                />
                {errors.businessPage && (
                  <span className="text-red-600 text-sm">Facebook Business Page Link</span>
                )}
              </div> 
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700">Business Number:</span>
                </label>
                <input
                  type="number"
                  {...register("number")}
                  defaultValue={oldData?.number}
                  name="number"
                  className="input input-bordered mt-1 w-full text-gray-800"
                />
                {errors.number && (
                  <span className="text-red-600 text-sm"> Business Number</span>
                )}
              </div> 


              </form>
                <div className='justify-between mt-5 mb-10 flex gap-3'>
                    <Link to='/register' ><button className='bg-cyan-700 px-4 py-1 text-white'>Back</button></Link>
                    <Link to='/register4' ><button className='bg-cyan-700 px-4 py-1 text-white'>Next</button></Link>


                </div>

            </div>

        </div>


    );
};

export default Register3;

