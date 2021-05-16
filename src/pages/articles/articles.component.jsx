import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './articles.styles.scss';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    // Update the document title using the browser API
    axios
      .get('http://localhost:5000/articles')
      .then(function (response) {
        setArticles(response.data);

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
      {articles.map((article) => {
        return (
          <div>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
