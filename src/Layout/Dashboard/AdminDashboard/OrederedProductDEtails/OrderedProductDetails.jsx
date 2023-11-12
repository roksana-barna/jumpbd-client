// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// const OrderedProductDetails = () => {
//     const orderedProduct = useLoaderData();
// const {products,shippingCost,shippingMethod,totalBDT,totalPrice,user,orderDate,deliveryInformation,orderCode} =orderedProduct;
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default OrderedProductDetails;
import axios from 'axios';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const OrderedProductDetails = () => {
    const orderedProduct = useLoaderData();
    const { products, shippingCost, shippingMethod, totalBDT, totalPrice, user, orderDate, deliveryInformation, orderCode } = orderedProduct;
    const [fulfillmentStatus, setFulfillmentStatus] = useState(''); // State to track the fulfillment status

    const handleFulfillmentUpdate = async (orderId, newStatus) => {
        try {
            await axios.put(`http://localhost:3001/order/updateFulfillmentStatus/${orderId}`, {
                status: newStatus,
            });

            // Handle success (e.g., show a success message)
            console.log('Fulfillment status updated successfully');
        } catch (error) {
            // Handle error (e.g., show an error message)
            console.error('Error updating fulfillment status:', error);
        }
    };


    return (
        <div className="container mx-auto mt-8">
            <div className="grid grid-cols-2 gap-8">
                {/* Left column */}
                <div className="bg-blue-200 p-4 rounded">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-800">Order Details</h2>
                    <p className="text-blue-700"><strong>Order Code:</strong> {orderCode}</p>
                    <p className="text-blue-700"><strong>Order Date:</strong> {orderDate}</p>
                    <div>
                <label>
                    <input className='mt-4'
                        type="radio"
                        value="fulfilled"
                        checked={fulfillmentStatus === 'fulfilled'}
                        onChange={() => setFulfillmentStatus('fulfilled')}
                    />
                    Fulfilled
                </label>

                <label>
                    <input
                        type="radio"
                        value="unfulfilled"
                        checked={fulfillmentStatus === 'unfulfilled'}
                        onChange={() => setFulfillmentStatus('unfulfilled')}
                    />
                    Unfulfilled
                </label>

                {/* <button
                    onClick={() => handleFulfillmentUpdate('yourOrderId', fulfillmentStatus)}
                >
                    Update Fulfillment Status
                </button> */}
            </div>
                    {/* Add other order details as needed */}
                </div>

                {/* Right column */}
                <div className="bg-green-200 p-4 rounded">
                    <h2 className="text-2xl font-semibold mb-4 text-green-800">Products</h2>
                    <ul className='grid md:grid-cols-2'>
                        {products.map((product, index) => (
                            <li key={index} className="mb-2 text-green-700  ">
                                <div className="flex items-center">
                                    <div className="mr-4">
                                        <img src={`http://localhost:5000/productImages/${product.productImages}`} alt={product.name} className="w-16 h-16 object-cover rounded" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">{product.name}</p>
                                        <p>Price: {product.price}</p>
                                        <p>Quantity: {product.quantity}</p>
                                        {/* Add other product details as needed */}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                   <div className='grid md:grid-cols-2'>
                   <p className="text-blue-700 pt-12"><strong>Shipping Method:</strong> {shippingMethod}</p>
                   <div className='mt-8'>
                   <p className="text-green-700"><strong>Total Price:</strong> {totalPrice}</p>
                    <p className="text-green-700"><strong>Shipping Charge:</strong> {shippingCost}</p>
                    <div className="divider"></div> 
                    <p className="text-green-700"><strong>Total BDT:</strong> {totalBDT}</p>
                   </div>

                   </div>
                    {/* Add other product details as needed */}
                </div>
            </div>

            {/* Additional Details */}
            <div className="mt-8 bg-yellow-200 p-4 rounded">
                <h2 className="text-2xl font-semibold mb-4 text-yellow-800">Delivery Information</h2>
                <p className="text-yellow-700"><strong>Name:</strong> {deliveryInformation.name}</p>
                <p className="text-yellow-700"><strong>Address:</strong> {deliveryInformation.address}</p>
                <p className="text-yellow-700"><strong>City:</strong> {deliveryInformation.city}</p>
                <p className="text-yellow-700"><strong>Postal Code:</strong> {deliveryInformation.postalCode}</p>
                <p className="text-yellow-700"><strong>Phone Number:</strong> {deliveryInformation.phoneNumber}</p>
                <p className="text-yellow-700"><strong>Email:</strong> {user.email}</p>
                {/* Add other delivery information details as needed */}

                {/* Save for Next Time */}
                <div className="mt-4">
                    <label className="text-yellow-700">
                        <input type="checkbox" checked={deliveryInformation.saveForNextTime} readOnly /> Save for Next Time
                    </label>
                </div>
            </div>
        </div>
    );
};

export default OrderedProductDetails;
