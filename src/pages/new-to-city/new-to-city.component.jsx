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
        <li>
          <label onClick={() => {window.location.assign("https://m.pge.com/#startorstopservice");}} target="_blank">
            PGE
          </label>
        </li>
        <li>
          <label onClick={() => {window.location.assign("https://www.acwd.org/117/Starting-Stopping-Service");}}>
            Water
          </label>
        </li> 
        <li>
          <label onClick={() => {window.location.assign("https://www.republicservices.com/municipality/fremont-ca");}}>
            Trash
          </label>
        </li>
        <li>Free City Wifi</li>
        <li>Unified Payment Paltform</li>
      </ul>
    </div>
  );
};

export default NewToCity;
