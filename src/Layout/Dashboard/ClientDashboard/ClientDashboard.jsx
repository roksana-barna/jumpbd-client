import React from 'react';
import { Link } from 'react-router-dom';

const ClientDashboard = () => {
    return (
        <div>
            <div className="container  mx-auto mt-8 p-4 bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen py-16">

                <h1 className="text-2xl text-center text-white font-semibold mb-4">Clients Dashboard</h1>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-white p-4 shadow-md rounded-lg">
                        <h2 className="text-xl font-semibold mb-2  text-cyan-600">Orders</h2>
                        <p>You can view and track your orders here.</p>
                        <Link to="/client/orders" className="text-blue-600 hover:underline block mt-4">
                            View Orders
                        </Link>
                    </div>

                    <div className="bg-white p-4 shadow-md rounded-lg">
                        <h2 className="text-xl font-semibold text-cyan-600 mb-2">Order Details</h2>
                        <p>View details of a specific order.</p>
                        <Link to="/client/orders/:orderId" className="text-blue-600 hover:underline block mt-4">
                            View Order Details
                        </Link>
                    </div>

                    <div className="bg-white p-4 shadow-md rounded-lg">
                        <h2 className="text-xl text-cyan-600 font-semibold mb-2">Wishlist</h2>
                        <p>Manage your wishlist of favorite products.</p>
                        <Link to="/client/wishlist" className="text-blue-600 hover:underline block mt-4">
                            View Wishlist
                        </Link>
                    </div>




                    <div className="bg-white p-4 shadow-md rounded-lg">
                        <h2 className="text-xl font-semibold  text-cyan-600 mb-2">Reviews and Ratings</h2>
                        <p>View and submit product reviews and ratings.</p>
                        <Link to="/client/reviews" className="text-blue-600 hover:underline block mt-4">
                            Product Reviews
                        </Link>
                    </div>
                    <div className="bg-white p-4 shadow-md rounded-lg">
                        <h2 className="text-xl font-semibold text-cyan-600 mb-2">Account Settings</h2>
                        <p>Manage your account settings.</p>
                        <Link to="/client/settings" className="text-blue-600 hover:underline block mt-4">
                            Manage Account
                        </Link>
                    </div>
                    <div className="bg-white p-4 shadow-md rounded-lg">
                        <h2 className="text-xl font-semibold text-cyan-600 mb-2">Contact Support</h2>
                        <p>Contact customer support for assistance.</p>
                        <Link to="/client/support" className="text-blue-600 hover:underline block mt-4">
                            Contact Support
                        </Link>
                    </div>

                </div>
                <div className='text-center mt-4'>
                        <Link to='/' ><button className='border border-x-2 px-4 py-1 text-white'>Home</button></Link>

                    </div> 

            </div>
          
           
        </div>
    );
};

export default ClientDashboard;