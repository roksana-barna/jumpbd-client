import React, { useState } from 'react';

const AccountSettings = () => {
  const [userProfile, setUserProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: '********',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // You can add code here to save the changes to the user's profile
    // For example, make an API request to update the user's data on the server.
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserProfile({ ...userProfile, [name]: value });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-8">Account Settings</h2>

      <div className="mb-4">
        <label className="block text-gray-600 font-semibold mb-1" htmlFor="name">
          Name:
        </label>
        {isEditing ? (
          <input
            type="text"
            name="name"
            id="name"
            value={userProfile.name}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        ) : (
          <p className="text-lg font-semibold">{userProfile.name}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 font-semibold mb-1" htmlFor="email">
          Email:
        </label>
        <p className="text-lg font-semibold">{userProfile.email}</p>
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 font-semibold mb-1" htmlFor="password">
          Password:
        </label>
        {isEditing ? (
          <input
            type="password"
            name="password"
            id="password"
            value={userProfile.password}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        ) : (
          <p className="text-lg font-semibold">{userProfile.password}</p>
        )}
      </div>

      {isEditing ? (
        <div className="flex">
          <button onClick={handleSave} className="btn bg-cyan-600 text-white mr-2">
            Save
          </button>
          <button onClick={handleCancel} className="btn bg-gray-400 text-black">
            Cancel
          </button>
        </div>
      ) : (
        <button onClick={handleEdit} className="btn bg-cyan-600 text-white">
          Edit Profile
        </button>
      )}
    </div>
  );
};

export default AccountSettings;
