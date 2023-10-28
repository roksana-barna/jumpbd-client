import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className=" text-black py-6">
            <div className="container   mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    <div className="footer-section">
                        <h3 className="text-xl font-semibold mb-3">Stores Location</h3>
                        <ul className="text-sm">
                            <li>New York</li>
                            <li>Los Angeles</li>
                            <li>Miami</li>
                            <li>Chicago</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3 className="text-xl font-semibold mb-3">About Us</h3>
                        <ul className="text-sm">
                            <li>Refund Policy</li>
                            <li>Shipping Policy</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3 className="text-xl font-semibold mb-3">Customer Service</h3>
                        <ul className="text-sm">
                            <li>FAQ’s</li>
                            <li>Shipping Rates</li>
                            <li>Orders & Returns</li>
                            <li>International Shipping</li>
                            <li>Safe & Guarantee</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3 className="text-xl font-semibold mb-3">My Account</h3>
                        <ul className="text-sm">
                            <li>Login/Register</li>
                            <li>Order Status</li>
                            <li>Payment Methods</li>
                            <li>Gift Vouchers</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center text-sm">
                <p>Register now to get updates on promotions and coupons.</p>
                <div className="mt-4">
                    <input
                        type="text"
                        placeholder="Your email"
                        className="bg-cyan-50 rounded-md p-2 text-black"
                    />
                    <button className="bg-cyan-600 text-white p-2 rounded-md ml-2">Subscribe</button>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 py-4 text-sm text-center">
                <p className='text-center'>Stay Connected</p>
               <div className="mt-4 flex  justify-center">
                    <a href="#" className="text-cyan-600 mx-2  text-2xl hover:text-red-500">
                        <FaTwitter></FaTwitter>
                    </a>
                    <a href="#" className="text-cyan-600  mx-2 text-2xl hover:text-red-500">
                        <FaFacebook></FaFacebook>
                    </a>
                    <a href="#" className="text-cyan-600  mx-2 text-2xl hover:text-red-500">
                        <FaInstagram></FaInstagram>
                    </a>

                    <a href="#" className="text-cyan-600 mx-2 text-2xl hover:text-red-500">
                        <FaYoutube></FaYoutube>
                    </a>
               </div>
            </div>
            <div className="mt-5 text-center text-sm flex justify-center">
                <a href="#" className="text-black hover:text-red-500">
                    Terms of Use
                </a>
                <span className="mx-2">|</span>
                <a href="#" className="text-black hover:text-red-500">
                    Privacy Policy
                </a>
                <span className="mx-2">|</span>
                <a href="#" className="text-black hover:text-red-500">
                    Advanced Search        </a> <span className="mx-2">|</span>
                <a href="#" className="text-black hover:text-red-500">
                    Site Map        </a> <span className="mx-2">|</span>
                <a href="#" className="text-black hover:text-red-500">
                    Information        </a> <span className="mx-2">|</span>
                <a href="#" className="text-black hover:text-red-500">
                    Copyright © 2023 <span className='text-cyan-600'>Dropzey </span>       </a>
            </div>
            <div className="mt-8 text-center text-sm">
            </div>
        </footer>
    );
};

export default Footer;
