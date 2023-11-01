import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // You may need to install axios

const Profile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user-specific data using the provided userId
    axios.get(`https://dropzey-server.vercel.app/subscriptions/${userId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [userId]);

  if (!user) {
    return <p>Loading...</p>;
  }

  if (userId !== user.id) {
    return <p>You are not authorized to view this profile.</p>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Display additional user-specific data here */}
    </div>
  );
};

export default Profile;
