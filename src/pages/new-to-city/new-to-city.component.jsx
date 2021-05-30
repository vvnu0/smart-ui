import React, { useContext, useState } from 'react';
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
          <label onClick={() => {window.open("https://m.pge.com/#startorstopservice", "_blank");}}>
            PGE
          </label>
        </li>
        <li>
          <label onClick={() => {window.open("https://www.acwd.org/117/Starting-Stopping-Service", "_blank");}}>
            Water
          </label>
        </li> 
        <li>
          <label onClick={() => {window.open("https://www.republicservices.com/municipality/fremont-ca", "_blank");}}>
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
