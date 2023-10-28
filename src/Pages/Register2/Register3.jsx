import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register3 = () => {
    const handleBuy = (event) => {
        event.preventDefault();
        const form = event.target;

        const businessName = form.businessName.value;
        const nidNumber = form.nidNumber.value;
        const dateOfBirth = form.dateOfBirth.value;
        const address = form.address.value;
        const businessWebsite = form.businessWebsite.value;
        const website = form.website.value;

        const toys = { businessName,website,businessWebsite ,address, nidNumber, dateOfBirth };
        console.log(toys);
        form.reset();
        fetch('http://localhost:5000/subscriptions', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toys)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('successfully Added')
                }
            })

    }

    return (

        <div className='bg-cyan-50 w-[800px]  md:ml-32 mb-10'>
            <div className=" p-5">

                <form onSubmit={handleBuy}>

                    <div className="mb-4">
                        <label htmlFor="businessName" className="block text-cyan-600 text-base font-bold mb-2">Business Name:</label>
                        <input type="text" id="businessName" name="businessName" className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline" placeholder="Ente business Name" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="nidNumber" className="block text-cyan-600 text-base font-bold mb-2">NID Number:</label>
                        <input type="number" id="nidNumber" name='nidNumber' className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter nid Number" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="dateOfBirth" className="block text-cyan-600 text-base font-bold mb-2">Date of Birth:</label>
                        <input type="date" id="dateOfBirth" name='dateOfBirth' className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter date Of Birth " />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-cyan-600 text-base font-bold mb-2">Address:</label>
                        <input type="text" id="address" name="address" className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter business address" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="website" className="block text-cyan-600 text-base font-bold mb-2">Website:</label>
                        <input type="url" id="website" name="website" className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter website URL" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="businessWebsite" className="block text-cyan-600 text-base font-bold mb-2">Business Website Link:</label>
                        <input type="url" id="businessWebsite" name="businessWebsite" className="shadow appearance-none border rounded w-full py-2 px-3 text-cyan-600 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter business website link" />
                    </div>

                    <div className='text-center'>
                        <button type="submit" className="bg-cyan-600 hover:bg-teal-700 px-10  text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline">ADD</button>

                    </div>
                </form >
                <div className='justify-between mt-5 mb-10 flex gap-3'>
                    <Link to='/register' ><btton className='bg-cyan-700 px-4 py-1 text-white'>Back</btton></Link>
                    <Link to='/register4' ><btton className='bg-cyan-700 px-4 py-1 text-white'>Next</btton></Link>


                </div>

            </div>
        </div>


    );
};

export default Register3;