import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/user-context/user-context';

const Profile = () => {
  const user = useContext(UserContext);
  let history = useHistory();
  if (!user.loggedInStatus) {
    history.push('/signin');
    return null;
  }
  return (
    <div className="profile">
      <h1> Welcome, {user.userDetails.displayName}</h1>
      <ul>
        <li>QR Code</li>
        <li>Links to Providers</li>
        <li>Update Proof of Residency</li>
      </ul>
    </div>
  );
};

export default Profile;
