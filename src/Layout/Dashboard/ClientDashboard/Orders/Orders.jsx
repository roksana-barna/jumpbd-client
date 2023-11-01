import React, { useState, useEffect } from 'react';

function Orders() {
  // Simulated order data
  const [orders, setOrders] = useState([]);

  // Simulated order tracking data
  const [orderTracking, setOrderTracking] = useState({});

  // Fetch orders from your server or API
  useEffect(() => {
    // Replace this with your actual data fetching logic
    const fetchOrders = async () => {
      try {
        const response = await fetch('your-api-endpoint/orders');
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders: ', error);
      }
    };

    fetchOrders();
  }, []);

  // Function to track an order
  const trackOrder = async (orderId) => {
    try {
      // Replace with your actual order tracking logic
      const response = await fetch(`your-api-endpoint/track-order/${orderId}`);
      const data = await response.json();
      setOrderTracking({ ...orderTracking, [orderId]: data });
    } catch (error) {
      console.error('Error tracking order: ', error);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4 ml-10">Your Orders</h1>
      <div className="grid grid-cols-1 gap-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xl font-semibold">Order #{order.id}</span>
              <button
                className="bg-blue-500 text-white px-4 py-1 rounded-lg"
                onClick={() => trackOrder(order.id)}
              >
                Track Order
              </button>
            </div>
            <p>Order Date: {order.orderDate}</p>
            <p>Total Amount: ${order.totalAmount}</p>
            {orderTracking[order.id] && (
              <div className="mt-4">
                <h2 className="text-lg font-semibold">Order Status:</h2>
                <p>{orderTracking[order.id].status}</p>
                <p>Estimated Delivery: {orderTracking[order.id].estimatedDelivery}</p>
                {/* You can add more tracking details here */}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
