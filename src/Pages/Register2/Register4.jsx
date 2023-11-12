import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Waiting from '../../Components/Waiting';

const Register4 = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [oldData, setOldData] = useState({});
  const [isAwaitingApproval, setIsAwaitingApproval] = useState(false);
  const [imagePreviews, setImagePreviews] = useState([]); // Store image previews
  // State for "Awaiting Approval" message


  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("def"));
    setOldData(getData);
  }, [])

  // 
  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files && files.length) {
      const previews = Array.from(files).map((file) => URL.createObjectURL(file));
      setImagePreviews(previews);
    }
  };

  const removeImage = (index) => {
    const newPreviews = [...imagePreviews];
    URL.revokeObjectURL(newPreviews[index]);
    newPreviews.splice(index, 1);
    setImagePreviews(newPreviews);
  };

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
    // 

    fetch('http://localhost:5000/subscriptions', {
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
    localStorage.setItem("def", JSON.stringify(data));

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
  //   fetch('http://localhost:5000/subscriptions', {
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
    <span className="label-text">Photo URL</span>
  </label>
  <input type="text"  {...register("photoURL")} placeholder="Photo URL" className="input input-bordered" />
  {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
</div>
<div className="mb-4">
  <label htmlFor="nidImages" className="block text-cyan-600 text-base font-bold mb-2">Upload NID Images:</label>
  <input type="file" id="nidImages" name="nidImages" onChange={handleImageChange} multiple className="text-cyan-600" />
</div>
            <div className="mb-4">
              <div className="flex flex-wrap">
                {imagePreviews.map((preview, index) => (
                  <div key={index} className="mr-2 mb-2" style={{ position: 'relative' }}>
                    <img src={preview} alt={`Preview ${index}`} style={{ width: '100px', height: '100px' }} />
                    <button type="button" onClick={() => removeImage(index)} className="bg-red-600 text-white p-1 rounded-full" style={{ position: 'absolute', top: 0, right: 0 }}>
                      X
                    </button>
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="form-control">
                <label className="label">
                  <span className="label-text text-gray-700">NID Front Part:</span>
                </label>
                <input
                  type="text"
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
                  type="text"
                  {...register("nidBackPart")}
                  name="nidBackPart"
                  className="input input-bordered mt-1 w-full text-gray-800"
                />
                {errors.nidBackPart && (
                  <span className="text-red-600  text-sm">NID Back Part is required</span>
                )}
              </div> */}

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
          <Link to='/register' ><button className='bg-cyan-700 px-4 py-1 text-white'>Back</button></Link>


        </div>

      </div>
    </div>

  );
};

export default Register4;
