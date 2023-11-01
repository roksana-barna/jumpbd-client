import React, { useState, useEffect } from 'react';

function OrderDetails() {
  // Simulated order data
  const [orders, setOrders] = useState([]);

  // Simulated order status options
  const orderStatusOptions = ['Processing', 'Shipped', 'Delivered', 'Cancelled'];

  // Function to load order data (simulated API call)
  useEffect(() => {
    // Simulated API call to fetch order data
    fetch('https://your-api-endpoint.com/orders')
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4 ml-6">Your Orders</h1>
      <div className="grid grid-cols-1 gap-4">
        {orders.length === 0 ? (
          <p className='ml-6'>You have no orders yet.</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="bg-white p-4 rounded-lg shadow">
              <div className="mb-2">
                <span className="text-xl font-semibold">Order ID: {order.id}</span>
                <p>Order Date: {order.orderDate}</p>
              </div>
              <div className="mb-2">
                <span className="text-xl font-semibold">Order Status:</span>
                <select
                  value={order.status}
                  onChange={(e) => {
                    // Handle order status change (you can update this in your API)
                    // For simplicity, this example doesn't perform the actual status update.
                    alert(`Order status changed to: ${e.target.value}`);
                  }}
                >
                  {orderStatusOptions.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">Order Items</h2>
                <ul>
                  {order.items.map((item) => (
                    <li key={item.id}>
                      {item.name} - Quantity: {item.quantity} - Price: ${item.price}
                    </li>
                  ))}
                </ul>
                <p className="mt-2">Total Price: ${order.totalPrice}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default OrderDetails;
