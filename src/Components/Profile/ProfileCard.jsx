// import React from 'react';

// const ProfileCard = ({profile}) => {
//     const {businessName,nidNumber,dateOfBirth,address,website,businessPage,number,email,subscription_fee,nidFrontPart,nidBackPart}=profile;
//     console.log(profile)
//     return (
//         <div>
//              <p>Business Name: {businessName}</p>
//           <p>NID Number: {nidNumber}</p>
//           <p>Date of Birth: {dateOfBirth}</p>
//           <p>Address: {address}</p>
//           <p>Website: {website}</p>
//           <p>Business Page: {businessPage}</p>
//           <p>Number: {number}</p>
//           <p>Email: {email}</p>
//           <p>Subscription Fee: {subscription_fee}</p>
//           <p>NID Front Part: {nidFrontPart}</p>
//           <p>NID Back Part: {nidBackPart}</p>
//           {/* <button onClick={handleEditClick} className="bg-blue-500 text-white rounded p-2 mt-2">Edit Profile</button> */}
            
//         </div>
//     );
// };

// export default ProfileCard;
import React from 'react';
import { Link } from 'react-router-dom';

const ProfileCard = ({ profile,handleDelete }) => {
  const {
    businessName,
    nidNumber,
    dateOfBirth,
    address,
    website,
    businessPage,
    number,
    email,
    subscription_fee,
    nidFrontPart,
    nidBackPart,

    _id,
    photoURL
  } = profile;

  return (
    <div className="bg-white shadow-lg p-4 rounded-lg">
      <div className="mb-4">
        <img  className='h-40 w-40 border border-green-200 rounded-full' src={photoURL} alt="" />
        <h2 className="text-2xl font-bold mb-2 text-cyan-600">Profile Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-cyan-600">Business Name:</p>
            <p>{businessName}</p>
          </div>
          <div>
            <p className="font-semibold text-cyan-600">photoURL:</p>
            <p>{photoURL}</p>
          </div>
          <div>
            <p className="font-semibold text-cyan-600">NID Number:</p>
            <p>{nidNumber}</p>
          </div>
          <div>
            <p className="font-semibold text-cyan-600">Date of Birth:</p>
            <p>{dateOfBirth}</p>
          </div>
          <div>
            <p className="font-semibold text-cyan-600">Address:</p>
            <p>{address}</p>
          </div>
          <div>
            <p className="font-semibold text-cyan-600">Website:</p>
            <p>{website}</p>
          </div>
          <div>
            <p className="font-semibold text-cyan-600">Business Page:</p>
            <p>{businessPage}</p>
          </div>
          <div>
            <p className="font-semibold text-cyan-600">Number:</p>
            <p>{number}</p>
          </div>
          <div>
            <p className="font-semibold text-cyan-600">Email:</p>
            <p>{email}</p>
          </div>
        
          <div>
            <p className="font-semibold text-cyan-600">Subscription Fee:</p>
            <p>{subscription_fee}</p>
          </div>
          <div>
            <p className="font-semibold text-cyan-600">NID Front Part:</p>
            <p>{nidFrontPart}</p>
          </div>
          <div>
            <p className="font-semibold text-cyan-600">NID Back Part:</p>
            <p>{nidBackPart}</p>
          </div>
        </div>
      </div>
      <Link to={`/update/${_id}`}><button className="bg-blue-500 text-white rounded p-2 mt-2">Edit Profile</button> </Link>
      <Link><button onClick={() => handleDelete(_id)} className="btn  text-white bg-red-400">Delete</button></Link>

    </div>
  );
};

export default ProfileCard;
