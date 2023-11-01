import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Waiting from '../../Components/Waiting';

const Register4 = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [oldData, setOldData]= useState({});
  const [isAwaitingApproval, setIsAwaitingApproval] = useState(false); // State for "Awaiting Approval" message


  useEffect(() => {
      const getData = JSON.parse(localStorage.getItem("def"));
      setOldData(getData);
  }, [])

  const submitformdata = () => {
    const getData = JSON.parse(localStorage.getItem("abc"));
    const data = JSON.parse(localStorage.getItem("def"));
    
    const email = localStorage.getItem("usr_email");

    // const email = JSON.parse(localStorage.getItem("email"));

    const processData = {
      ...getData,
      email,
      subscription_fee: 2500,
      ...data,
      isApproved: 'pending',
    }
    console.log(processData);

    setIsAwaitingApproval(true);

    fetch('https://dropzey-server.vercel.app/subscriptions', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(processData)

    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          alert('successfully Added')
        }
      })
  }

  const onSubmit = (data) => {

    localStorage.removeItem("def");
    localStorage.setItem("def" , JSON.stringify(data));

    // console.log(data)
  
  }

  // const handleBuy = (event) => {
  //   event.preventDefault();
  //   const form = event.target;

  //   const nidFront = form.nidFront.value;
  //   const nidBack = form.nidBack.value;
  //   const profilePhoto = form.profilePhoto.value;
  //   const toys = { profilePhoto,nidBack,nidFront };
  //   console.log(toys);
  //   form.reset();
  //   fetch('https://dropzey-server.vercel.app/subscriptions', {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //     body: JSON.stringify(toys)

  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //       if (data.insertedId) {
  //         alert('successfully Added')
  //       }
  //     })
// }
  
  console.log('')

  return (


    <div className='bg-cyan-50 w-[800px]  md:ml-32 mb-10'>
      <div className=" p-5">
      {isAwaitingApproval ? (
          <Waiting></Waiting> // Display "Awaiting Approval" message
        ) : (
          // Display the form as before
        <form onChange={handleSubmit(onSubmit)}>
        <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700">NID Front Part:</span>
                </label>
                <input
                  type="file"
                  {...register("nidFrontPart")}
                  name="nidFrontPart"
                  className="input input-bordered mt-1 w-full text-gray-800"
                />
                {errors.nidFrontPart && (
                  <span className="text-red-600 text-sm">NID Front Part is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700">NID Back Part:</span>
                </label>
                <input
                  type="file"
                  {...register("nidBackPart")}
                  name="nidBackPart"
                  className="input input-bordered mt-1 w-full text-gray-800"
                />
                {errors.nidBackPart && (
                  <span className="text-red-600  text-sm">NID Back Part is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700">Meeting After Confirm Approved:</span>
                </label>
                <input
                  type="text"
                  {...register("meetingConfirmation")}
                  defaultValue={oldData?.meetingConfirmation}
                  name="meetingConfirmation"
                  placeholder="Meeting Confirmation"
                  className="input input-bordered mt-1 w-full text-gray-800"
                />
                {errors.meetingConfirmation && (
                  <span className="text-red-600 text-sm">Meeting Confirmation is required</span>
                )}
              </div> 
            
          {/* <div className="mb-4">
    <label htmlFor="approvalAfterSeeInfo" className="block text-cyan-600 text-base font-bold mb-2">Approval After See All Profile Info:</label>
    <input
        type="checkbox"
        id="approvalAfterSeeInfo"
        name="approvalAfterSeeInfo"
        className="appearance-none rounded w-5 h-5 border border-cyan-600 text-cyan-600 focus:outline-none focus:ring focus:ring-cyan-300"
    />
</div> */}

          
        </form >
        )}
        <div className="form-control mt-6">                 <input onClick={submitformdata} className="btn bg-cyan-600 text-white" type="submit" value="Add" />
          </div>
        <div className='justify-between mt-5 mb-10 flex gap-3'>
          <Link to='/register' ><btton className='bg-cyan-700 px-4 py-1 text-white'>Back</btton></Link>


        </div>

      </div>
    </div>

  );
};

export default Register4;