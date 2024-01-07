import React, { useContext, useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [myProfile, setMyProfile] = useState([])

  useEffect(() => {
    fetch(`https://dropzey-server.vercel.app/subscriptions/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setMyProfile(data)
      })

  }, [user]);


  const handleDelete = id => {
    const proceed = confirm("Are you want to delete?");
    if (proceed) {
        fetch(`https://dropzey-server.vercel.app/subscriptions/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('deleted successfully')
                    const remaining = myProfile.filter(mytoy => mytoy._id !== id)
                    setMyProfile(remaining)
                }
            })

    }
}


  return (
    <div>
     
       {
        myProfile.length > 0 && (
          <ProfileCard
            profile={myProfile[0]} 
            handleDelete={handleDelete}

            // Assuming you want to display the first profile in the array
          />
        )
      }

    </div>
  );
};

export default Profile;
