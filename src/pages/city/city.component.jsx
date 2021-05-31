import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './city.styles.scss';

const City = () => {
  const [cityNews, setCityNews] = useState([]);
  useEffect(() => {
    // Update the document title using the browser API
    axios
      .get('http://localhost:5000/city')
      .then(function (response) {
        setCityNews(response.data);

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
    <div className="articles">
      {cityNews.map((news) => {
        return (
          <div>
            <h2>{news.title}</h2>
            <p>{news.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default City;
