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
        params: { query: 'fremont' },
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
      <h1> Welcome to the City Smart!</h1>
      <span>
        Please register or login to use full features of the resident portal! Meanwhile, please enjoy few scenic pictures of the city!
      </span>
      <br/>
      <br/>
      <div className="directory-menu">
        {pictures.map((picture) => {
          return (
            <div key={picture.id} className="img-style">
              <img src={picture.urls.small} />
              <br/>{picture.alt_description}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
