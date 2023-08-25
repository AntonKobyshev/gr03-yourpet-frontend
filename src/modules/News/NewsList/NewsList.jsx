import NewsItem from "../NewsItem/NewsItem";
import css from "./NewsList.module.css";
import { selectAllNews } from "../../../redux/news/news-selectors";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { selectQuery, selectPage } from "../../../redux/news/news-selectors";
import { setQuery } from "../../../redux/news/news-slice";
import { fetchNews } from "../../../redux/news/news-operation";

const NewsList = () => {
  const inputQuery = useSelector(selectQuery);
  const currentPage = useSelector(selectPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setQuery(""));
    dispatch(fetchNews({ query: inputQuery, page: currentPage }));
  }, [dispatch, inputQuery, currentPage]);

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
