import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  const publishedDate = new Date(article.created_at).toDateString();
  return (
    <div className="article-card">
      <Link to={`/articles/${article.article_id}`}>
        <h2>{article.title}</h2>
      </Link>

      {article.article_img_url && (
        <img src={article.article_img_url} alt={article.title} />
      )}

      <p>{article.author}</p>
      <p>{article.topic}</p>
      <p>Published: {publishedDate}</p>
      <p>
        {article.votes} votes | {article.comment_count} comments
      </p>
    </div>
  );
}

export default ArticleCard;
