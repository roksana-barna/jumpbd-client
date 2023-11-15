import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import RegisterPayment from '../../Components/RegisterPayment';

const Register2 = () => {
  const { register, handleSubmit } = useForm();
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [oldData1, setOldData1]= useState({});
  useEffect(() => {
    const getData1 = JSON.parse(localStorage.getItem("abc1"));
    setOldData1(getData1);
}, [])


  const handleApplyCoupon = () => {
    // Example: Check if the coupon code is '10' for a 10% discount
    if (couponCode === '10') {
      setDiscount(250); // 10% of 2500 (assuming subscription fee is 2500)
    } else {
      // Reset discount if the coupon code is not valid
      setDiscount(0);
    }
  };

  const onSubmit = (data) => {
    // Calculate the final subscription fee after applying the discount
    const finalSubscriptionFee = 2500 - discount;
    console.log(data)

    // Save form data with discount in localStorage
    localStorage.setItem(
      'formDataFromRegister2',
      JSON.stringify({ ...data, couponCode, discount, finalSubscriptionFee })
    );

    // Optionally, you can redirect to the next page (Register3) here
    // history.push('/register3');
  };


 

  

  return (
    <div className='bg-cyan-50 w-[800px] md:ml-32 mb-10'>

      <div className="p-5">
      <p className='text-red-500 font-serif mt-6 mb-4 font-medium'>Notice: After Adding Coupon Code, You Will Get a Discount from the Subscription Fee!!!</p>

        <form onChange={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="subscriptionFee" className="block text-cyan-600 text-base font-bold mb-2">Subscription Fee:</label>
            <input
              type="number"
              id="subscriptionFee"
              disabled
              value={2500 - discount} // Deduct discount from subscription fee
              name="subscriptionFee"
              {...register('subscriptionFee')}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="0"
            />
          </div>
          <div className="form-control">
            <label className="label">

              <span className="label-text text-gray-700">Coupon Code:</span>
            </label>
            <input
              type="text"
              value={couponCode}
              defaultValue={oldData1?.couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Enter coupon code"
              className="input input-bordered mt-1 w-full text-gray-800"
            />
            <button
              type="button"
              onClick={handleApplyCoupon}
              className="bg-cyan-700 px-4 py-1 text-white"
            >
              Apply Coupon
            </button>
          </div>

          {/* Display Discount */}
          {discount > 0 && <p>Cuopon Applied: less amount <span className='text-red-500'>{discount}</span> </p>}

          {/* RegisterPayment Component */}
          <RegisterPayment bkashPaymentLink='https://shop.bkash.com/bhai-bhai-general-store0161600/pay/bdt2500/uQEGrG?fbclid=IwAR0wE9B5vjKPW1IRsxkNTPQPyk2OVK6Jr1inx-S2LBREo2NeqFG92yDoNGA' />

          <div className='justify-between mt-5 flex gap-3'>
            <Link to='/register' ><button className='bg-cyan-700 px-4 py-1 text-white'>Back</button></Link>
            <Link to='/register3' ><button className='bg-cyan-700 px-4 py-1 text-white'>Next</button></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register2;
