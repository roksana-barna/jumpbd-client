import React, { useEffect, useState } from 'react';
import OrdersTable from './OrdersTable';

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from your API or database
    fetch('https://dropzey-server-qm8su19xh-roksana-barna.vercel.app/orders') // Replace with the actual API endpoint
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);

  return (
    <div className='w-9/12 mx-auto'>
            <div >
                <h2 className='text-xl text-teal-600 text-center font-bold my-6'>All Orders</h2>
            </div>
            
            <div>
                <div className="">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th> picture</th>
                                <th>Client Name</th>
                                <th>Client email</th>
                                <th>Products</th>
                                <th>Price</th>
                                <th>Quantity</th>
                              
                            </tr>
                        </thead>
                        <tbody>
                    {
                        orders.map(mytoy => <OrdersTable
                            key={mytoy._id}
                            mytoy={mytoy}
                        >

                        </OrdersTable>)
                    }
                    </tbody>
                    </table>

                </div>
            </div >
        </div>
  );
};

export default Order;
