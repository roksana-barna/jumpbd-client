import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaPeopleArrows, FaOdnoklassniki, FaDesktop, FaCog, FaAngleRight, FaShoppingCart, FaTable, FaArrowCircleRight } from 'react-icons/fa';
import useAdmin from '../../Hooks/useAdmin';
import useSeller from '../../Hooks/useSeller';
import useSubscriptions from '../../Hooks/useSubscriptions';
import useClient from '../../Hooks/useClient';
// import useAdmin from '../../Components/Hooks/useAdmin';


const Dashboard = () => {
    const [subscription] = useSubscriptions();
    const [isAdmin] = useAdmin();
    const [isSeller] = useSeller();
    const [isClient] = useClient();

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side lg:bg-orange-200">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu  p-4 lg:w-80">
                        {
                            isAdmin &&
                            <>
                                <li><Link className='bg-red-700 text-center text-white'>Admin Panel</Link></li>
                                <div className="divider"></div>


                                <li>
                                    <Link to='/dashboard/addproducts' className='text-cyan-800 text-lg bg-transparent hover-bg-red-400'>
                                        <FaDesktop /> Upload Products  </Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/ourproducts' className='text-cyan-800 text-lg bg-transparent hover-bg-red-400'>
                                        <FaDesktop /> Our Products  </Link>
                                </li>
                                <li>

                                    <Link to='/dashboard/ordersforadmin' className='text-cyan-800 text-lg bg-transparent hover:bg-red-400'>
                                        <FaDesktop /> Orders
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/managecustomer' className='text-cyan-800 text-lg bg-transparent hover-bg-red-400'>
                                        <FaDesktop /> Manage Users
                                    </Link>
                                </li>

                                <li>
                                    <Link to='/dashboard/client' className='text-cyan-800 text-lg bg-transparent hover-bg-red-400'>
                                        <FaDesktop /> Clients
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
                                    <Link to='/dashboard/subscriptions' className='text-cyan-800 text-lg bg-transparent hover-bg-red-400'>
                                        <FaShoppingCart></FaShoppingCart>Subcriptions
                                        <button className="btn">
                                            {/* <div className="badge badge-secondary">+{cart?.length ||0}</div> */}
                                            <div className="badge bg-red-600 text-white">+{subscription?.length || 0}</div>


                                        </button>

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

                                <li>
                                    <Link to='/' className='text-cyan-800 text-lg bg-transparent hover:bg-red-400'>
                                        <FaDesktop /> Home
                                    </Link>
                                </li>

                            </>
                        }
                        {

                            isSeller &&
                            <>

                                {/*  */}

                                <li><Link className='bg-red-700 text-center text-lg text-white'>Seller Home</Link></li>
                                <div className="divider"></div>
                                <li >
                                    <FaAngleRight /> <Link to="/dashboard/personal-info">Personal Info</Link>
                                </li>
                                <li>
                                    <FaAngleRight /> <Link to="/dashboard/billing">Billing</Link>
                                    <ul>
                                        <li>
                                            <FaAngleRight /> <Link to="/dashboard/payment-method">Payment Method</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <FaAngleRight /> <Link to="/dashboard/customer-list">Customer List</Link>
                                </li>
                                <li>
                                    <FaAngleRight /> <Link to="/dashboard/order-list">Order List</Link>
                                </li>
                                <li>
                                    <FaAngleRight /> Saler Order Delivery Rate
                                    <ul>
                                        <li>
                                            <FaAngleRight /> Shipping
                                            <ul>
                                                <li>
                                                    <FaAngleRight /> Profile
                                                </li>
                                                <li>
                                                    <FaAngleRight /> General Shipping Rate
                                                    <ul>
                                                        <li>
                                                            <FaAngleRight /> Inside Dhaka &gt; 60
                                                        </li>
                                                        <li>
                                                            <FaAngleRight /> Outside Dhaka &gt; 130
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <FaAngleRight /> Custom Shipping Rate
                                                    <ul>
                                                        <li>
                                                            <FaAngleRight /> Inside Dhaka &gt; {/* Define your rate */}
                                                        </li>
                                                        <li>
                                                            <FaAngleRight /> Outside Dhaka &gt; {/* Define your rate */}
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <FaAngleRight /> Inside Dhaka &lt; {/* Add your content */}
                                                </li>
                                                <li>
                                                    <FaAngleRight /> Outside Dhaka &lt; {/* Add your content */}
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </>

                        }
                        {
                            isClient &&

                            <>
                                <li><Link className='bg-red-700 text-center lg:text-lg sm:text-base text-white'>CLients Dashboard</Link></li>
                                <div className="divider"></div>
                                <li className='lg:text-blue-800 sm:text-white text-md bg-transparent font-bold' >
                                    <Link to="/dashboard/client"> Explore Clients Gallery<FaArrowCircleRight></FaArrowCircleRight></Link>
                                </li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;