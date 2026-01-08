import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "./api";
import ArticleCard from "./components/ArticleCard";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleById(article_id)
      .then((response) => {
        console.log(response.data);
        setArticle(response.data.article);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading article...</p>;
  }

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <>
      <h2>Single Article</h2>
      <ArticleCard article={article} />
    </>
  );
}

export default SingleArticle;
