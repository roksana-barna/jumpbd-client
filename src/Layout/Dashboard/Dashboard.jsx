import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaPeopleArrows, FaOdnoklassniki, FaDesktop, FaCog } from 'react-icons/fa';
// import useAdmin from '../../Components/Hooks/useAdmin';


const Dashboard = () => {
    // const [isAdmin] = useAdmin();

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-orange-200">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu  p-4 w-80">
                        {/* 
                        {
                        isAdmin && */}
                        <>
                            <li><Link className='bg-red-700 text-center text-white'>Admin Home</Link></li>
                            <div className="divider"></div>

                            <li>
                                <Link to='/' className='text-cyan-800 text-lg bg-transparent hover:bg-red-400'>
                                    <FaDesktop /> Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/dashboard/orders' className='text-cyan-800 text-lg bg-transparent hover:bg-red-400'>
                                    <FaDesktop /> Orders
                                </Link>
                            </li>
                            <li>
                                <Link to='/dashboard/addproducts' className='text-cyan-800 text-lg bg-transparent hover-bg-red-400'>
                                    <FaDesktop /> Products  </Link>
                            </li>
                            <li>
                                <Link to='/dashboard/customers' className='text-cyan-800 text-lg bg-transparent hover-bg-red-400'>
                                    <FaDesktop /> Customers
                                </Link>
                            </li>
                            <li>
                                <Link to='/dashboard/analytics' className='text-cyan-800 text-lg bg-transparent hover-bg-red-400'>
                                    <FaDesktop /> Analytics
                                </Link>
                            </li>
                            <li>
                                <Link to='/dashboard/marketing' className='text-cyan-800 text-lg bg-transparent hover-bg-red-400'>
                                    <FaDesktop /> Marketing
                                </Link>
                            </li>
                            <li>
                                <Link to='/dashboard/discount' className='text-cyan-800 text-lg bg-transparent hover-bg-red-400'>
                                    <FaDesktop /> Discount
                                </Link>
                            </li>
                            <li>
                                <Link to='/dashboard/api' className='text-cyan-800 text-lg bg-transparent hover-bg-red-400'>
                                    <FaDesktop /> API
                                </Link>
                            </li>
                            <li>
                                <Link to='/dashboard/finance' className='text-cyan-800 text-lg bg-transparent hover-bg-red-400'>
                                    <FaDesktop /> Finance
                                </Link>
                                <Link to='/dashboard/settings' className='text-cyan-800 text-lg bg-transparent hover:bg-red-400'>
                                    <FaCog /> Settings
                                </Link>
                            </li>
                           
                        </>

                        {/* } */}
                    
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;