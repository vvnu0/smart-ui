import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/user-context/user-context';
import QRCode from 'react-qr-code';
import FileUpload from '../user-verification/proof-of-residency.component';


const Profile = () => {
  const user = useContext(UserContext);
  const [resident, setResident] = useState([]);
  const [userId, setUserId] = useState('');
  const [qr, setQr] = useState(false);
  const { loadqr } = qr;
  const [pfUpload, setPfUpload] = useState(false);
  const { uploadproof } = pfUpload;
  
  useEffect(() => {
    axios
      .get('http://localhost:8080/resident/60a95aa0027d3d3d6ffb9bce')
      .then(function (response) {
        setResident(response.data);
        setUserId(response.data.userId);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  let history = useHistory();
  if (!user.loggedInStatus) {
    history.push('/signin');
    return null;
  }
  return (
    <div class="profile-container">
       <h1> Welcome, {user.userDetails.displayName}</h1>
       {user.userDetails.id}
      <ul>
        <li>{resident.firstName}&nbsp;{resident.lastName}</li>
        <li><label onClick={() => {setQr(true);}}>QR Code</label>
        </li>
        <li>Links to Providers</li>
        <li><label onClick={() => {setPfUpload(true);}}>Update Proof of Residency</label></li>
      </ul>
      <div>
        {qr ? (
          <div><QRCode value={userId} /></div>
        ) : (<div></div>)}
      </div>
      <div>
        {pfUpload ? (
        <div>
        <FileUpload></FileUpload>
        </div>
        ) : (
        <div></div>
        )}
      </div>
   
   </div>
  );
};

export default Profile;
