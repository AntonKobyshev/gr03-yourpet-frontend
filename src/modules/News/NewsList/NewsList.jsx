import NewsItem from "../NewsItem/NewsItem";
import css from "./NewsList.module.css";
import { selectAllNews } from "../../../redux/news/news-selectors";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import {
  selectQuery,
  selectAllNewsPage,
} from "../../../redux/news/news-selectors";
import { fetchNews } from "../../../redux/news/news-operation";
import NoNoticesFound from "../../Notices/NoNoticesFound/NoNoticesFound";

const NewsList = () => {
  const inputQuery = useSelector(selectQuery);
  const currentPage = useSelector(selectAllNewsPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews({ query: inputQuery, page: currentPage }));
  }, [dispatch, inputQuery, currentPage]);

  const news = useSelector(selectAllNews);

  const newsData = news;

  const sortedNews = [...newsData].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <>
      {sortedNews.length === 0 ? (
        <NoNoticesFound title="news" />
      ) : (
        <ul className={css.list}>
          {sortedNews.map((singleNews) => (
            <NewsItem key={singleNews._id} news={singleNews} />
          ))}
        </ul>
      )}
    </>
  );
};

export default NewsList;
