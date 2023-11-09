import React, { useContext, useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [myProfile, setMyProfile] = useState([])

  useEffect(() => {
    fetch(`https://dropzey-server-qm8su19xh-roksana-barna.vercel.app/subscriptions/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setMyProfile(data)
      })

  }, [user]);


  return (
    <div>
     
       {
        myProfile.length > 0 && (
          <ProfileCard
            profile={myProfile[0]} // Assuming you want to display the first profile in the array
          />
        )
      }

    </div>
  );
};

export default Profile;
