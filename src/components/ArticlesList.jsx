import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../api.js";
import ArticleCard from "./ArticleCard.jsx";

function ArticlesList() {
  // Store fetched data in state
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // useEffect to trigger data request
  useEffect(() => {
    // get data

    getArticles()
      .then((response) => {
        // handle success
        console.log(response.data);
        setArticles(response.data.articles);
        setIsLoading(false);
      })
      .catch((error) => {
        // handle error
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading articles...</p>;
  }

  // Map array to render list
  return (
    <>
      <h2>List of Articles</h2>

      {articles.length === 0 && <p>No articles yet</p>}

      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </>
  );
}

export default ArticlesList;
