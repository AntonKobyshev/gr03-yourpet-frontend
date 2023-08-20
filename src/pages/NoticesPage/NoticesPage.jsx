import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchNoticesByCategory } from "../../redux/notices/notices-operations";
import { getAllNotices } from "../../redux/notices/notices-selectors";
import NoticesSearch from "../../modules/Notices/NoticesSearch/NoticesSearch";

import css from "../NoticesPage/NoticesPage.module.css";
import ScrollButton from "../../shared/components/ScrollButton/ScrollButton";

const NoticesPage = () => {
  const dispatch = useDispatch();
  const notices = useSelector(getAllNotices);

  const location = useLocation();
  const currentCategory = location.pathname.split("/")[2];

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
  }, [currentCategory, dispatch]);

  return (
    <div className="container">
      <h2 className={css.title}>Find your favorite pet</h2>
      <NoticesSearch />
      {notices && <Outlet />}

      <ScrollButton />
    </div>
  );
};

export default NoticesPage;
