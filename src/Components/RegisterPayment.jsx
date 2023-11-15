// // BkashPayment.js
// import React from 'react';

// const RegisterPayment = ({ onPayment }) => {
//   const handlePayment = () => {
//     // Simulate redirect to Bkash payment link
//     window.location.href = 'https://shop.bkash.com/bhai-bhai-general-store0161600/pay/bdt2500/uQEGrG?fbclid=IwAR0wE9B5vjKPW1IRsxkNTPQPyk2OVK6Jr1inx-S2LBREo2NeqFG92yDoNGA';
//     // Call the onPayment function if needed
//     onPayment();
//   };

//   return (
//     <div className='text-center'>
//       <p className='text-red-500 font-serif mt-6'>Notice:After Adding  Cupon Code You Will get discount from Subscription Fee!!!</p>
//       <button className='px-5 bg-pink-600 text-white py-2 mt-4 rounded-lg font-bold font-serif ' onClick={handlePayment}>Pay with Bkash</button>
//     </div>
//   );
// };

// export default RegisterPayment;
import React from 'react';

const RegisterPayment = ({ bkashPaymentLink }) => {
  const handlePayment = () => {
    // Open Bkash payment link in a new window
    window.open(bkashPaymentLink, '_blank');
  };

  return (
    <div className='text-center'>
      <button className='px-5 bg-pink-600 text-white py-2 mt-4 rounded-lg font-bold font-serif' onClick={handlePayment}>
        Pay with Bkash
      </button>
    </div>
  );
};

export default RegisterPayment;
