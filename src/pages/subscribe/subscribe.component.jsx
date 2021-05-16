import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/user-context/user-context';

const Subscribe = () => {
  const user = useContext(UserContext);
  let history = useHistory();
  if (!user.loggedInStatus) {
    history.push('/signin');
    return null;
  }
  return (
    <div className="profile">
      <h1> Welcome, {user.userDetails.displayName}</h1>
      <h2> Subscribe For : </h2>
      <ul>
        <li>Notifications</li>
        <li>Emerency Alerts</li>
        <li>Events In City</li>
      </ul>
    </div>
  );
};

export default Subscribe;
