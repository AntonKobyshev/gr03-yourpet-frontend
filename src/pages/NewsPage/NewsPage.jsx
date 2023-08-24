import React, { useEffect } from "react";
import css from "./NewsPage.module.css";
import NewsList from "../../modules/News/NewsList/NewsList";
import { useDispatch } from "react-redux";
import { fetchAllNews } from "../../redux/news/news-operation";
import NewsSearch from "../../modules/News/NewsSearch/NewsSearch";

const NewsPage = () => {
  const dispatch = useDispatch();

  // const totalPages = useSelector(selectAllNewsTotalPages);
  // const currentPage = useSelector(selectAllNewsPage);

  useEffect(() => {
    dispatch(fetchAllNews());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="NewsPage">
        <h1 className={css.title}>News</h1>
        <NewsSearch />
        {<NewsList />}
      </div>
    </div>
  );
};

export default NewsPage;
