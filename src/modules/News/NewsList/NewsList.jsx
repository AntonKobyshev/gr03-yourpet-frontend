import NewsItem from "../NewsItem/NewsItem";
import css from "./NewsList.module.css";
import { selectAllNews } from "../../../redux/news/news-selectors";
import { useSelector } from "react-redux";
import React from "react";

const NewsList = () => {
  const news = useSelector(selectAllNews);

  const newsData = news;

  const sortedNews = [...newsData].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <ul className={css.list}>
      {sortedNews.map((sortedNews) => (
        <NewsItem key={sortedNews._id} news={sortedNews} />
      ))}
    </ul>
  );
};

export default NewsList;
