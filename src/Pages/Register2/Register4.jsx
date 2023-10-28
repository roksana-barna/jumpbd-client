import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const Register4 = () => {
  const handleBuy = (event) => {
    event.preventDefault();
    const form = event.target;

    const nidFront = form.nidFront.value;
    const nidBack = form.nidBack.value;
    const profilePhoto = form.profilePhoto.value;
    const toys = { profilePhoto,nidBack,nidFront };
    console.log(toys);
    form.reset();
    fetch('http://localhost:5000/subscriptions', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(toys)

    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          alert('successfully Added')
        }
      })

  }
  return (


    <div className='bg-cyan-50 w-[800px]  md:ml-32 mb-10'>
      <div className=" p-5">

        <form onSubmit={handleBuy}>
          <div className="mb-4">
            <label htmlFor="nidFront" className="block text-cyan-600 text-base font-bold mb-2">NID Front Part:</label>
            <input
              type="file"
              id="nidFront"
              name="nidFront"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline"
              accept="image/*"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="nidBack" className="block text-cyan-600 text-base font-bold mb-2">NID Back Part:</label>
            <input
              type="file"
              id="nidBack"
              name="nidBack"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline"
              accept="image/*"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="profilePhoto" className="block text-cyan-600 text-base font-bold mb-2">Add Profile Photo:</label>
            <input type="file" id="profilePhoto" name="profilePhoto" accept="image/*" className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="paymentMethod" className="block text-cyan-600 text-base font-bold mb-2">Payment Method:</label>
            <select id="paymentMethod" name="paymentMethod" className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline">
              <option value="credit">Credit Card</option>
              <option value="paypal">PayPal</option>
              {/* Add more payment options as needed */}
            </select>
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

          <div className="form-control mt-6">                 <input className="btn bg-cyan-600 text-white" type="submit" value="Submit" />
          </div>

        </form >
        <div className='justify-between mt-5 mb-10 flex gap-3'>
          <Link to='/register' ><btton className='bg-cyan-700 px-4 py-1 text-white'>Back</btton></Link>
          <Link to='/register4' ><btton className='bg-cyan-700 px-4 py-1 text-white'>Next</btton></Link>


        </div>

      </div>
    </div>

  );
};

export default Register4;