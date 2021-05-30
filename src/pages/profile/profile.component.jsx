import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/user-context/user-context';
import QRCode from 'react-qr-code';
import FileUpload from '../user-verification/proof-of-residency.component';
import { Link } from 'react-router-dom';
import './profile.styles.scss';

const Profile = () => {
  const user = useContext(UserContext);
  const [qr, setQr] = useState(false);
  const [pfUpload, setPfUpload] = useState(false);

  let history = useHistory();
  if (!user.loggedInStatus) {
    history.push('/signin');
    return null;
  }
  return (
    <div className="directory-menu">
      <div>
        <h1> Welcome, {user.userDetails.displayName}</h1>
        <ul>
          <li><label onClick={() => {setQr(true); setPfUpload(false);}}>QR Code</label>
          </li>
          <li><Link to="/newtocity">Links to Providers</Link></li>
          <li><label onClick={() => {setPfUpload(true); setQr(false);}}>Update Proof of Residency</label></li>
        </ul>
        {pfUpload ? (
        <div>
        <FileUpload></FileUpload>
        </div>
        ) : (
        <div></div>
        )}
      </div>
      <div>
        {qr ? (
          <div className="qrcode-display"><QRCode value={user.userDetails.id} /></div>
        ) : (<div></div>)}
      </div>
    </div>
  );
};

export default Profile;
