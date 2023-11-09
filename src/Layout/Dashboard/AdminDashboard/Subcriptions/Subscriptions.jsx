import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const Subscriptions = () => {
    const { user } = useContext(AuthContext);

    const [subscriptions, setSubcriptions] = useState([]);
    useEffect(() => {
        fetch('https://dropzey-server-qm8su19xh-roksana-barna.vercel.app/subscriptions')
            .then(res => res.json())
            .then(data => setSubcriptions(data))
    }, [])
    const handleMakeclient = user => {
        fetch(`https://dropzey-server-qm8su19xh-roksana-barna.vercel.app/subscriptions/client/${user._id}`, {
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
        fetch(`https://dropzey-server-qm8su19xh-roksana-barna.vercel.app/subscriptions/denied/${user._id}`, {
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
            <div className="w-full">

                <div className="overflow-x-auto pt-9">
                    <table className="table table-zebra w-full ">
                        {/* head */}
                        <thead>
                            <tr className="text-blue-800">
                                <th>Business Name</th>
                                <th>subscriber Email</th>
                                {/* <th>Nid Front Part</th>  */}
                                {/* <th>Nid Back Part</th>  */}
                                <th>Website</th>
                                <th>Meeting Confirmation</th>
                                <th>Current Role</th>
                                <th>Action</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                subscriptions.map((user) => <tr key={user._id}>
                                    <td>{user.businessName}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        
                                        {user.website}
                                    </td>
                                    <td>
                                    
                                    {user.meetingConfirmation}
                                    
                                    </td>
                                    {/* <td>{user?.nidFrontPart}</td> */}
                                    {/* <td>{user?.nidFrontPart}</td> */}
                                    {/* <td>{user.isApproved}</td> */}
                                    <td>

                                        {
                                            user.role === 'client' ? 'client' :user.role === 'denied' ? 'denied' :'pending'

                                        }

                                    </td>
                                    {/* <td><button onClick={() => handleMakeAdmin(user)}
                        className="btn  bg-sky-400  text-white" disabled={user.role === 'admin'}

                    >Make Admin</button></td> */}
                                    <td>  <button onClick={() => handleMakeclient(user)} className="btn  bg-cyan-400  text-white"
                                        disabled={user.role === 'client'}>Approve client</button></td>
                                         <td>  <button onClick={() => handleMakeDenied(user)} className="btn bg-red-400 px-3 rounded-xl text-white"
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