import axios from "axios";

const instance = axios.create({
  baseURL: "https://nc-news-vafy.onrender.com",
});

export const getArticles = () => {
  return instance.get("/api/articles");
};

export const getArticleById = (article_id) => {
  return instance.get(`/api/articles/${article_id}`);
};

export const getCommentsByArticleId = (article_id) => {
  return instance.get(`/api/articles/${article_id}/comments`);
};
