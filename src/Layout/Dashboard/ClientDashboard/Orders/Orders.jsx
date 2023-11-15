// import React, { useEffect, useState } from 'react';

// const Orders = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     // Fetch orders from the server
//     fetch('https://dropzey-server.vercel.app/orders')
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success && Array.isArray(data.orders)) {
//           setOrders(data.orders);
//         } else {
//           console.error('Failed to fetch orders or data is not an array.');
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching orders:', error);
//       });
//   }, []);
//   console.log(orders)

//   return (
//     <div className=" mx-auto mt-8">
//       <h2 className="text-2xl font-semibold mb-4">Order List</h2>
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border-b">Order Code</th>
//             <th className="py-2 px-4 border-b">Date and Time</th>
//             <th className="py-2 px-4 border-b">Customer Name</th>
//             <th className="py-2 px-4 border-b">Email</th>
//             <th className="py-2 px-4 border-b">Total Amount</th>
//             <th className="py-2 px-4 border-b">Status</th>
//             <th className="py-2 px-4 border-b">Items</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order._id}>
//               <td className="py-2 px-4 border-b">{order.orderCode}</td>
//               <td className="py-2 px-4 border-b">{order.products}</td>
//               <td className="py-2 px-4 border-b">{order.deliveryInformation.name}</td>
//               <td className="py-2 px-4 border-b">{order.user}</td>
//               <td className="py-2 px-4 border-b">{order.totalPrice}</td>
//               <td className="py-2 px-4 border-b">{order.fulfilled ? 'Fulfilled' : 'Unfulfilled'}</td>
//               <td className="py-2 px-4 border-b">
//                 {order.products.map((item) => (
//                   <div key={item.productId}>
//                     {item.name} - Quantity: {item.quantity}
//                   </div>
//                 ))}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Orders;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch orders from the server
        fetch('https://dropzey-server.vercel.app/orders')
            .then((res) => res.json())
            .then((data) => {
                if (data.success && Array.isArray(data.orders)) {
                    setOrders(data.orders);
                } else {
                    console.error('Failed to fetch orders or data is not an array.');
                }
            })
            .catch((error) => {
                console.error('Error fetching orders:', error);
            });
    }, []);
    console.log(orders)
    return (
        <div className=" mx-auto mt-8">
            <div className='text-center'>
                <h2 className="text-2xl font-semibold  font-serif mb-8">Order List</h2>

            </div>

            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th>#</th>
                        <th className="py-2 px-4 border-b font-serif">Order Code</th>
                        <th className="py-2 px-4 border-b font-serif">Date</th>
                        <th className="py-2 px-4 border-b font-serif">Customer Name</th>
                        <th className="py-2 px-4 border-b font-serif">Email</th>
                        <th className="py-2 px-4 border-b font-serif">Total Amount</th>
                        <th className="py-2 px-4 border-b font-serif">Payment Status</th>
                        <th className="py-2 px-4 border-b font-serif">Status</th>
                        <th  className="py-2 px-4 border-b font-serif">Items</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (

                        <tr key={order._id}>
                            {/*  */}
                            <td>{index + 1}</td>
                           <td  className="py-2 px-4 text-blue-700 border-b"> <Link to={`/orderedproductdetails/${order._id}`}>{order.orderCode}</Link></td>
                            <td className="py-2 px-4 border-b ">{order.orderDate}</td>
                            <td className="py-2 px-4 border-b">{order.deliveryInformation.name}</td>
                            <td className="py-2 px-4 border-b">{order.user}</td>
                            <td className="py-2 px-4 border-b">{order.totalPrice}</td>
                            <td  className='text-orange-500'> <Link to={`/clientpayment/${order._id}`}>Payment Pending</Link></td>
                            <td className="py-2 px-4 border-b">
                                {order.fulfillmentStatus} 
                            </td>
                            <td className="py-2 px-4 border-b">
                                {order.products.map((item) => (
                                    <div key={item.productId}>
                                        {item.quantity[0]}
                                    </div>
                                ))}
                            </td>
                            


                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;

