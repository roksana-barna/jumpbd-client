import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const Subscriptions = () => {
    const { user } = useContext(AuthContext);

    const [subscriptions, setSubcriptions] = useState([]);
    useEffect(() => {
        fetch('https://dropzey-server.vercel.app/subscriptions')
            .then(res => res.json())
            .then(data => setSubcriptions(data))
    }, [])
    const handleMakeclient = user => {
        fetch(`https://dropzey-server.vercel.app/subscriptions/client/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.businessName}subscription paid client Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleMakeDenied = user => {
        fetch(`https://dropzey-server.vercel.app/subscriptions/denied/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.businessName} is Denied!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }


    console.log(subscriptions)
    return (
        <div>
            <div className="">

                <div className="overflow-x-auto pt-9">
                    <table className="table table-zebra w-full md:w-[1200px]">
                        {/* head */}
                        <thead>
                            <tr className="text-blue-800">
                                <th className='font-serif'>Business Name</th>
                                <th className='font-serif'>subscriber Email</th>
                                {/* <th>Nid Front Part</th>  */}
                                {/* <th>Nid Back Part</th>  */}
                                <th className='font-serif'>Website</th>
                                <th className='font-serif'>Cupon</th>
                                <th className='font-serif'>Subscription Fee</th>
                                {/* <th>fee</th> */}
                                <th className='font-serif'>Current Role</th>

                                <th className='font-serif'>Action</th>
                                <th className='font-serif'>Action</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                subscriptions.map((user) => <tr key={user._id}>
                                    <td className='font-serif'>{user.businessName}</td>
                                    <td className='font-serif'>{user.email}</td>
                                    <td className='font-serif'>

                                        {user.website}
                                    </td>
                                    <td className='font-serif'>(After Used Cuopon) <br/>less:<span className='text-red-600  text-lg font-bold'>{user.discount}</span> </td>
                                    <td className='font-serif'>After Discount:<br/><span className='text-red-600  text-lg font-bold'>{user.finalSubscriptionFee}</span></td>
                                    {/* <td>{user.
                                        subscription_fee}</td> */}
                                    {/* <td>{user?.nidFrontPart}</td> */}
                                    {/* <td>{user?.nidFrontPart}</td> */}
                                    {/* <td>{user.isApproved}</td> */}
                                    <td className='font-serif'>

                                        {
                                            user.role === 'client' ? 'client' : user.role === 'denied' ? 'denied' : 'pending'

                                        }

                                    </td>
                                    {/* <td><button onClick={() => handleMakeAdmin(user)}
                        className="btn  bg-sky-400  text-white" disabled={user.role === 'admin'}

                    >Make Admin</button></td> */}
                                    <td className='font-serif'>  <button onClick={() => handleMakeclient(user)} className="btn  bg-cyan-400  text-white"
                                        disabled={user.role === 'client'}>Approve client</button></td>
                                    <td className='font-serif'>  <button onClick={() => handleMakeDenied(user)} className="btn bg-red-400 px-3 rounded-xl text-white"
                                        disabled={user.role === 'denied'}>Deny</button></td>

                                </tr>)

                            }


                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    );
};

export default Subscriptions;