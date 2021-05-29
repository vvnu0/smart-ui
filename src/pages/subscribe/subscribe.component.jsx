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
        <li>
          <label onClick={() => {window.location.assign("https://member.everbridge.net/453003085612570/new");}} target="_blank">
            Emerency Alerts
          </label>
        </li>
        <li>
          <label onClick={() => {window.location.assign("https://www.eventbrite.com/d/ca--fremont/events/");}} target="_blank">
            Events In City
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Subscribe;
