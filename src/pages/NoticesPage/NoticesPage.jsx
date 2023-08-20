import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchNoticesByCategory,
  fetchNoticesByOwn,
  fetchAllFavoriteNotices,
} from "../../redux/notices/notices-operations";

import { getAllNotices } from "../../redux/notices/notices-selectors";
import NoticesSearch from "../../modules/Notices/NoticesSearch/NoticesSearch";
import NoticesCategoriesNav from "../../modules/Notices/NoticesCategoriesNav/NoticesCategoriesNav";

import css from "../NoticesPage/NoticesPage.module.css";
import ScrollButton from "../../shared/components/ScrollButton/ScrollButton";

const NoticesPage = () => {
  const dispatch = useDispatch();
  const notices = useSelector(getAllNotices);

  const location = useLocation();
  const currentCategory = location.pathname.split("/")[2];

  const [ownCurrentPage, setOwnCurrentPage] = useState(1);
  const [favoriteCurrentPage, setFavoriteCurrentPage] = useState(1);

  useEffect(() => {
    if (currentCategory === "sell") {
      dispatch(
        fetchNoticesByCategory({
          categoryName: "sell",
          query: "",
          page: 1,
        })
      );
      return;
    }
    if (currentCategory === "for-free") {
      dispatch(
        fetchNoticesByCategory({
          categoryName: "for-free",
          query: "",
          page: 1,
        })
      );
      return;
    }
    if (currentCategory === "lost-found") {
      dispatch(
        fetchNoticesByCategory({
          categoryName: "lost-found",
          query: "",
          page: 1,
        })
      );
      return;
    }
    if (currentCategory === "own") {
      dispatch(fetchNoticesByOwn({ query: "", page: ownCurrentPage }));
      return;
    }
    if (currentCategory === "favorite") {
      dispatch(
        fetchAllFavoriteNotices({ query: "", page: favoriteCurrentPage })
      );
      return;
    }
  }, [currentCategory, dispatch, ownCurrentPage, favoriteCurrentPage]);

  const handleOwnClick = () => {
    dispatch(fetchNoticesByOwn({ query: "", page: ownCurrentPage }));
  };

  const handleFavoriteClick = () => {
    dispatch(fetchAllFavoriteNotices({ query: "", page: favoriteCurrentPage }));
  };

  return (
    <div className="container">
      <h2 className={css.title}>Find your favorite pet</h2>
      <NoticesSearch />
      <NoticesCategoriesNav
        onOwnClick={handleOwnClick}
        onFavoriteClick={handleFavoriteClick}
      />

      {notices && <Outlet />}

      <ScrollButton />
    </div>
  );
};

export default NoticesPage;
