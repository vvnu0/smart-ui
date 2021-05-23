import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './qrcode.style.scss';
import QRCode from 'react-qr-code';

const QRCodeGenerator = () => {
  const [resident, setResident] = useState(false);
  useEffect(() => {
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

  return (
    <div>
      <QRCode value={resident.userId} />
    </div>
  );
};
export default QRCodeGenerator;