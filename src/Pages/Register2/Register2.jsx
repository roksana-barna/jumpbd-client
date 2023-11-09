import React, { useContext } from 'react';
import { useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register2 = () => {

    const handleBuy = (event) => {
      event.preventDefault();
      const form = event.target;

      const subscriptionFee = form.subscriptionFee.value;
      const couponCode = form.couponCode.value;
  
      const toys = { subscriptionFee,couponCode };
      console.log(toys);
      form.reset();
      fetch('https://dropzey-server-qm8su19xh-roksana-barna.vercel.app/subscriptions', {
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
            alert('Fee successfully Added')
          }
        })
  
    }


    return (
         <div className='bg-cyan-50 w-[800px]  md:ml-32 mb-10'>
            <div className=" p-5 ">

                <form onSubmit={handleBuy}>
                   
                     <div className="mb-4">
        <label htmlFor="subscriptionFee" className="block text-cyan-600 text-base font-bold mb-2">Subscription Fee:</label>
        <input type="number" id="subscriptionFee" disabled value={2500} name="subscriptionFee" className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline" placeholder="0" />
      </div>
      <div className="mb-4">
            <label htmlFor="couponCode" className="block text-cyan-600 text-base font-bold mb-2">Coupon Code:</label>
            <input type="number" id="couponCode"name='couponCode' className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Coupon No" />
          </div>

                    {/* <div className='text-center'>
                    <button type="submit" className="bg-cyan-600 hover:bg-teal-700 px-10  text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline">ADD</button>

                    </div> */}
                </form >
                <div className='justify-between mt-5 flex gap-3'>
                    <Link to='/register' ><button className='bg-cyan-700 px-4 py-1 text-white'>Back</button></Link>
                    <Link to='/register3' ><button className='bg-cyan-700 px-4 py-1 text-white'>Next</button></Link>


                </div>

            </div>
        </div>


    );
};

export default Register2;
