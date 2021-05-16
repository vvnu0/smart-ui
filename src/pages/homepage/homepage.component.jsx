import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './homepage.styles.scss';
import Creds from './unsplash.credentials';

const HomePage = () => {
  console.log(Creds.accessKey);
  const [pictures, setPictures] = useState([]);
  useEffect(() => {
    // Update the document title using the browser API
    axios
      .get('https://api.unsplash.com/search/photos/', {
        params: { query: 'san fransisco' },
        headers: {
          Authorization: `Client-ID ${Creds.accessKey}`,
        },
      })
      .then(function (response) {
        setPictures(response.data.results);

        console.log(response.data.results);
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
    <div className="homepage">
      <div className="directory-menu">
        {pictures.map((picture) => {
          return (
            <div key={picture.id}>
              <img src={picture.urls.small} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
