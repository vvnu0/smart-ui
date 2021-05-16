import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/user-context/user-context';

const Smart = () => {
  const user = useContext(UserContext);
  let history = useHistory();
  if (!user.loggedInStatus) {
    history.push('/signin');
    return null;
  }
  return (
    <div className="profile">
      <h1> Welcome, {user.userDetails.displayName}</h1>
      <h2> How To : </h2>
      <ul>
        <li>Save Water / Electricity</li>
        <li>Links to IOT Devices </li>
        <li>Solar Panels</li>
        <li>Videos / Upcoming Sessions</li>
      </ul>
    </div>
  );
};

export default Smart;
