import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchNoticesByCategory,
  fetchNoticesByOwn,
  fetchAllFavoriteNotices,
} from "../../redux/notices/notices-operations";

import {
  getAllNotices,
  selectNoticesTotalPages,
  selectNoticesPage,
} from "../../redux/notices/notices-selectors";
import NoticesSearch from "../../modules/Notices/NoticesSearch/NoticesSearch";
import NoticesCategoriesNav from "../../modules/Notices/NoticesCategoriesNav/NoticesCategoriesNav";
import PaginationNotices from "../../shared/components/Pagination/PaginationNotices";

import css from "../NoticesPage/NoticesPage.module.css";
import ScrollButton from "../../shared/components/ScrollButton/ScrollButton";
import {
  selectAgeFilter,
  selectGenderFilter,
} from "../../redux/filter/filter-selectors";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

const NoticesPage = () => {
  const dispatch = useDispatch();
  const notices = useSelector(getAllNotices);
  const [ownCurrentPage, setOwnCurrentPage] = useState(1);
  const [favoriteCurrentPage, setFavoriteCurrentPage] = useState(1);
  const totalPages = useSelector(selectNoticesTotalPages);
  const currentPage = useSelector(selectNoticesPage);
  const location = useLocation();
  const currentCategory = location.pathname.split("/")[2];
  const ageFilter = useSelector(selectAgeFilter);
  const genderFilter = useSelector(selectGenderFilter);
  const [filteredNotices, setFilteredNotices] = useState([]);
  useEffect(() => {
    const filtered = notices.filter((notice) => {
      const isGenderMatch =
        genderFilter.length === 0 || genderFilter.includes(notice.sex);
      const isAgeMatch =
        ageFilter.length === 0 ||
        ageFilter.some((ageRange) => {
          if (ageRange === "0-1") {
            return (
              parseInt(notice.date.split(".")[2]) >=
              new Date().getFullYear() - 1
            );
          } else if (ageRange === "1-2") {
            const birthYear = parseInt(notice.date.split(".")[2]);
            const currentYear = new Date().getFullYear();
            return birthYear >= currentYear - 2 && birthYear < currentYear - 1;
          } else if (ageRange === "2+") {
            return (
              parseInt(notice.date.split(".")[2]) <=
              new Date().getFullYear() - 2
            );
          }
          return false;
        });
      return isGenderMatch && isAgeMatch;
    });

    setFilteredNotices(filtered);
  }, [notices, genderFilter, ageFilter]);

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

  const onPageChange = (page) => {
    if (currentCategory === "own") {
      dispatch(fetchNoticesByOwn({ query: "", page }));
      return;
    } else if (currentCategory === "favorite") {
      dispatch(fetchAllFavoriteNotices({ query: "", page }));
      return;
    } else {
      dispatch(
        fetchNoticesByCategory({
          categoryName: currentCategory,
          query: "",
          page,
        })
      );
    }
  };

  const handleOwnPageChange = (page) => {
    setOwnCurrentPage(page);
    dispatch(fetchNoticesByOwn({ query: "", page }));
  };

  const handleFavoritePageChange = (page) => {
    setFavoriteCurrentPage(page);
    dispatch(fetchAllFavoriteNotices({ query: "", page }));
  };
  return (
    <div className="container">
      <h2 className={css.title}>Find your favorite pet</h2>
      <NoticesSearch />
      <NoticesCategoriesNav
        onOwnClick={handleOwnClick}
        onFavoriteClick={handleFavoriteClick}
      />

      {filteredNotices.length > 0 && <Outlet />}
      <PaginationNotices
        currentPage={currentPage}
        totalPages={totalPages}
        currentCategory={currentCategory}
        ownCurrentPage={ownCurrentPage}
        favoriteCurrentPage={favoriteCurrentPage}
        onPageChange={(page) => {
          if (currentCategory === "own") {
            handleOwnPageChange(page);
          } else if (currentCategory === "favorite") {
            handleFavoritePageChange(page);
          } else {
            onPageChange(page);
          }
        }}
      />
      <ScrollButton />
    </div>
  );
};

export default NoticesPage;
