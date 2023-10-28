import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useTitle from "../../../Hooks/UseTitle";


const ManageCustomer = () => {
    useTitle('Manage Customer')


    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleMakeInstructor = user => {
        fetch(`http://localhost:5000/users/seller/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Seller Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }

    return (

        <div className="w-full">

            <div className="overflow-x-auto pt-9">
                <table className="table table-zebra w-full ">
                    {/* head */}
                    <thead>
                        <tr className="text-blue-800">
                            <th>Name</th>
                            <th>Email</th>
                            <th> Current Role</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>

                                    {
                                        user.role === 'admin' ? 'admin' : user.role === 'seller' ? 'seller' : user.role === 'student' ? 'student' : 'student'

                                    }

                                </td>
                                <td><button onClick={() => handleMakeAdmin(user)}
                                    className="btn  bg-sky-400  text-white" disabled={user.role === 'admin'}

                                >Make Admin</button></td>
                                <td>  <button onClick={() => handleMakeInstructor(user)} className="btn  bg-red-400  text-white"
                                    disabled={user.role === 'seller'}>Make Instructor</button></td>

                            </tr>)

                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageCustomer;