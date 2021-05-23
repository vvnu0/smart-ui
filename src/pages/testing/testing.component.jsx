import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './testing.styles.scss';

const Testing = () => {
  const [testing, setTesting] = useState([]);
  console.log("Going to call hello");
  useEffect(() => {
    // Update the document title using the browser API
    axios
      .get('http://localhost:8080/resident/60a95aa0027d3d3d6ffb9bce')
      .then(function (response) {
        setTesting(response.data);

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

  return (
	<div>
        <div>
          <p>{testing.userId}</p>
          <p>{testing.firstName}</p>
          <p>{testing.lastName}</p>
          <p>{testing.userName}</p>
          <p>{testing.createndDate}</p>
          <p>{testing.updatedDate}</p>
        </div>
    </div>
	);
};

export default Testing;