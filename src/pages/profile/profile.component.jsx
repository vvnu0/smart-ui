import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/user-context/user-context';
import { Link } from 'react-router-dom';
import QRCode from 'react-qr-code';


const Profile = () => {
  const user = useContext(UserContext);
  const [resident, setResident] = useState([]);
  useState(() => {
    axios
      .get('http://localhost:8080/resident/60a95aa0027d3d3d6ffb9bce')
      .then(function (response) {
        setResident(response.data);

        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, );
  let history = useHistory();
  if (!user.loggedInStatus) {
    history.push('/signin');
    return null;
  }
  return (
    <div className="profile">
       <h1> Welcome, {user.userDetails.displayName}</h1>
      <ul>
        <li>{resident.userId}</li>
        <li><QRCode value='{resident.userId}' /></li>
        <li><Link to='<QRCode value={resident.userId} />'> QRCode</Link>
        </li>
        <li>Links to Providers</li>
        <li>Update Proof of Residency</li>
      </ul>
      
    </div>
  );
};

export default Profile;
