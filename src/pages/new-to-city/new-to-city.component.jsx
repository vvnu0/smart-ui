import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/user-context/user-context';

const NewToCity = () => {
  const user = useContext(UserContext);
  let history = useHistory();
  if (!user.loggedInStatus) {
    history.push('/signin');
  }
  return (
    <div className="profile">
      <h1> Welcome, {user.userDetails.displayName}</h1>
      <h2> Apply For : </h2>
      <ul>
        <li>PGE</li>
        <li>Water</li>
        <li>Trash</li>
        <li>Free City Wifi</li>
        <li>Unified Payment Paltform</li>
      </ul>
    </div>
  );
};

export default NewToCity;
