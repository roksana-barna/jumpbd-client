import Swal from "sweetalert2";
import useTitle from "../../../Hooks/UseTitle";
import { useEffect, useState } from "react";


const ManageCustomer = () => {
    useTitle('Manage Customer')


    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    // const handleMakeAdmin = user => {
    //     fetch(`http://localhost:5000/users/admin/${user._id}`, {
    //         method: 'PATCH'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             if (data.modifiedCount) {
    //                 Swal.fire({
    //                     position: 'top-end',
    //                     icon: 'success',
    //                     title: `${user.dispalyName} is an Admin Now!`,
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                 })
    //             }
    //         })
    // }
    const handleMakeInstructor = user => {
        fetch(`http://localhost:5000/users/seller/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.displayName} is an Seller Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }
    // console.log(users)


    return (

        <div className="w-full">

            <div className="overflow-x-auto pt-9">
                <table className="table table-zebra w-full ">
                    {/* head */}
                    <thead>
                        <tr className="text-blue-800">
                            <th>Email</th>
                            <th> Current Role</th>
                            <th>Action</th>
                            {/* <th>Action</th> */}
                            {/* <th>Name</th> */}

                        </tr>
                    </thead>
                    <tbody>
                       
                        {
                            users.map((user) => <tr key={user._id}>
                        
                                {/* <td>{user.displayName}</td> */}
                                <td>{user.email}</td>
                                <td>

                                    {
                                        user.role === 'admin' ? 'admin' : user.role === 'seller' ? 'seller' : user.role === 'user' ? 'user' : 'user'

                                    }

                                </td>
                                {/* <td><button onClick={() => handleMakeAdmin(user)}
                                    className="btn  bg-sky-400  text-white" disabled={user.role === 'admin'}

                                >Make Admin</button></td> */}
                                <td>  <button onClick={() => handleMakeInstructor(user)} className="btn  bg-red-400  text-white"
                                    disabled={user.role === 'seller'}>Make Seller</button></td>

                            </tr>)

                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageCustomer;