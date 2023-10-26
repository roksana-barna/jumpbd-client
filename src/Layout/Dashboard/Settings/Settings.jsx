import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Settings = () => {
    return (
        <div>
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
                                <li><Link to='/dashboard' className='bg-red-700 text-center text-white'>Stores Home</Link></li>
                                <div className="divider"></div>
                                <li>
                                    <Link to='/dashboard/settings/plan' className='text-cyan-800 text-lg bg-transparent hover:bg-red-400'>
                                        Plan
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/settings/billing' className='text-cyan-800 text-lg bg-transparent hover:bg-red-400'>
                                        Billing
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/settings/users-and-permissions' className='text-cyan-800 text-lg bg-transparent hover:bg-red-400'>
                                        Users and Permissions
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/settings/payments' className='text-cyan-800 text-lg bg-transparent hover:bg-red-400'>
                                        Payments
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/settings/shipping-and-delivery' className='text-cyan-800 text-lg bg-transparent hover:bg-red-400'>
                                        Shipping and Delivery
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/settings/taxes-and-duties' className='text-cyan-800 text-lg bg-transparent hover:bg-red-400'>
                                        Taxes and Duties
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/settings/gift-cards' className='text-cyan-800 text-lg bg-transparent hover:bg-red-400'>
                                        Gift Cards
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/settings/store-activity-log' className='text-cyan-800 text-lg bg-transparent hover:bg-red-400'>
                                        Store Activity Log
                                    </Link>
                                </li>
                            </>

                            {/* } */}

                        </ul>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default Settings;