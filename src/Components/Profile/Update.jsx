import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { MdBusiness, MdConfirmationNumber, MdEmail, MdWeb } from 'react-icons/md';
import 'animate.css/animate.min.css'; // Import animate.css

const Update = () => {
    const loadedprofile = useLoaderData()

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const businessName = form.businessName.value;
        const nidNumber = form.nidNumber.value;
        const dateOfBirth = form.dateOfBirth.value;
        const address = form.address.value;
        const website = form.website.value;
        const businessPage = form.businessPage.value;
        const number = form.number.value;
        const email = form.email.value;
        const subscription_fee = form.subscription_fee.value;
        const nidFrontPart = form.nidFrontPart.value;
        const nidBackPart = form.nidBackPart.value;
        const photoURL = form.photoURL.value;

        
        const updatetoys = {
          businessName,nidNumber,dateOfBirth,photoURL,email,address,website,businessPage,number,subscription_fee,nidFrontPart,nidBackPart
        }
        console.log(updatetoys)
    
      fetch(`https://dropzey-server.vercel.app/update/${loadedprofile._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatetoys)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                alert('profile updated succecssfully')
            }
        })
      }
    return (
        <div className='bg-cyan-100'>
            <form onSubmit={handleUpdate}>
         <div className='grid grid-cols-2 gap-8 p-10'>
         <div>
           <div className="mb-4">
            <label className="block text-gray-600">Business Name:</label>
            <input type="text" name="businessName" defaultValue={loadedprofile.businessName} className="w-full border p-2 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">NID Number:</label>
            <input type="text" name="nidNumber" defaultValue={loadedprofile.nidNumber} className="w-full border p-2 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Date of Birth:</label>
            <input type="date" name="dateOfBirth" defaultValue={loadedprofile.dateOfBirth} className="w-full border p-2 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Address:</label>
            <input type="text" name="address" defaultValue={loadedprofile.address} className="w-full border p-2 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Website:</label>
            <input type="text" name="website" defaultValue={loadedprofile.website} className="w-full border p-2 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Business Page:</label>
            <input type="text" name="businessPage" defaultValue={loadedprofile.businessPage} className="w-full border p-2 rounded" />
          </div>
           </div>
         <div>
        
          <div className="mb-4">
            <label className="block text-gray-600">Number:</label>
            <input type="text" name="number" defaultValue={loadedprofile.number} className="w-full border p-2 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Email:</label>
            <input type="email" name="email" defaultValue={loadedprofile.email}  readOnly  className="w-full border p-2 rounded" />
          </div>
           <div className="mb-4">
            <label className="block text-gray-600">PhotoURL:</label>
            <input type="text" name="photoURL" defaultValue={loadedprofile.photoURL} className="w-full border p-2 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Subscription Fee:</label>
            <input type="number" name="subscription_fee" defaultValue={loadedprofile.subscription_fee} className="w-full border p-2 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">NID Front Part:</label>
            <input type="text" name="nidFrontPart" defaultValue={loadedprofile.nidFrontPart} className="w-full border p-2 rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">NID Back Part:</label>
            <input type="text" name="nidBackPart" defaultValue={loadedprofile.nidBackPart} className="w-full border p-2 rounded" />
          </div>
          <button type="submit" className="bg-blue-500 w-full text-white rounded p-2">Update</button>

         </div>

         </div>
        </form>
            
        </div>
        
  
        
    );
};

export default Update;