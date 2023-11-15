import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const PaymentAccount = () => {
    const account =useLoaderData();
    console.log(account)
    const { products, shippingCost, shippingMethod, totalBDT, totalPrice, user, orderDate, deliveryInformation, orderCode,fulfillmentStatus } = account;
    const [dueAmount, setDueAmount] = useState(0);

  useEffect(() => {
    // Calculate due amount based on fulfillment status
    if (fulfillmentStatus === 'unfullfilled') {
      setDueAmount(shippingCost);
    } else {
      setDueAmount(totalBDT);
    }
  }, []);

  return (
   <div>
     <div className="  bg-gray-100 p-6 rounded-md shadow-md">
      <div className='text-center '>
        <h2 className="text-2xl font-semibold mb-4 text-blue-800 font-serif">Payment Details</h2>
        <p className="mb-2"><strong className="text-blue-700">Order Code:</strong> {orderCode}</p>
        <p className="mb-4"><strong className="text-blue-700">Order Date:</strong> {orderDate}</p>

        <h3 className="text-xl font-semibold mb-2 text-blue-800 font-serif">Products</h3>
        <div className="list-disc md:flex  justify-evenly ml-4 mt-4 mb-6">
          {products.map((product, index) => (
            <p key={index} className="mb-2">
              <p className="font-semibold font-serif">{product.name}</p>
              <p>Price: {product.price}</p>
              <p>Quantity: {product.quantity}</p>
            </p>
          ))}
        </div>
        </div>

      


        {/* <h3 className="text-xl font-semibold mb-2 text-blue-800 mt-4">Delivery Information</h3>
        <p className="mb-2"><strong className="text-yellow-700">Name:</strong> {deliveryInformation.name}</p>
        <p className="mb-2"><strong className="text-yellow-700">Address:</strong> {deliveryInformation.address}</p>
        <p className="mb-2"><strong className="text-yellow-700">City:</strong> {deliveryInformation.city}</p>
        <p className="mb-2"><strong className="text-yellow-700">Postal Code:</strong> {deliveryInformation.postalCode}</p>
        <p className="mb-2"><strong className="text-yellow-700">Phone Number:</strong> {deliveryInformation.phoneNumber}</p>
        <p className="mb-4"><strong className="text-yellow-700">Email:</strong> {user.email}</p> */}


<div className="overflow-x-auto">
  <table className="table mb-10">
    {/* head */}
    <thead className=''>
      <tr >
        <th
        className="mb-2"><strong className="text-green-700  text-lg">Price</strong> 
        </th>
        <th className="mb-2"><strong className="text-green-700  text-lg">Delivery Charge</strong>

        </th>
        <th className="mb-2"><strong className="text-green-700  text-lg">Total BDT</strong> 

        </th>
        <th className="mb-2 text-base"><strong className="text-blue-700">Fulfillment Status:</strong></th>
        <th className="mb-4 text-base"><strong className="text-blue-700">Due Amount:</strong> </th>

      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr className="bg-base-300 text-md">
      <td className='font-bold'>{totalPrice}</td>
        <td className='font-bold'> {shippingCost}</td>
        <td className='font-bold'>{totalBDT}</td>
        <td className='font-bold'>{fulfillmentStatus}</td>
        <td className='font-bold'>{dueAmount}</td>
      </tr>
      {/* <tr>
        <td></td>
        <td className="mb-2 text-base"><strong className="text-blue-700">Fulfillment Status:</strong> {fulfillmentStatus}</td>
        <td className="mb-4 text-base"><strong className="text-blue-700">Due Amount:</strong> {dueAmount}</td>
      </tr> */}
     
    </tbody>
  </table>
</div>
 
     
     
    </div>
   </div>
  );
};

export default PaymentAccount;