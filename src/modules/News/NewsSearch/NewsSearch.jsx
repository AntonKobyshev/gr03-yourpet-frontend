import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { InputAdornment, IconButton, Input } from "@mui/material";
import { Search, Clear } from "@mui/icons-material";
import {
  selectAllNewsTotalPages,
  selectAllNewsPage,
} from "../../../redux/news/news-selectors";
import {
  fetchAllNews,
  fetchFilteredNews,
} from "../../../redux/news/news-operation";
import NewsList from "../NewsList/NewsList";
import PaginationLine from "../../../shared/components/Pagination/Pagination";
import { toastInfo } from "../../../shared/toastify/toastify";

import css from "../NewsSearch/NewsSearch.module.css";

const NewsSearch = () => {
  const [keyword, setKeyword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [currentNewsPage, setCurrentNewsPage] = useState(1);
  const [currentFilterPage, setCurrentFilterPage] = useState(1);
  const totalPages = useSelector(selectAllNewsTotalPages);
  const currentPage = useSelector(selectAllNewsPage);
  const currentPageInt = Number(currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!submitted) {
      dispatch(fetchAllNews(currentNewsPage));
      setCurrentFilterPage(1);
    }
  }, [currentNewsPage, submitted, dispatch]);

  useEffect(() => {
    if (submitted) {
      dispatch(fetchFilteredNews({ query: keyword, page: currentFilterPage }));
    }
  }, [submitted, keyword, currentFilterPage, dispatch]);

  const handleNewsPageChange = (currentNewsPage) => {
    setCurrentNewsPage(currentNewsPage);
  };

  const handleFilterPageChange = (currentFilterPage) => {
    setCurrentFilterPage(currentFilterPage);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (keyword.trim() === "") {
      toastInfo("Please enter something");
      setKeyword("");
    } else {
      setSubmitted(true);
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setKeyword(value);
    setCurrentFilterPage(1);
  };

  const handleClear = () => {
    setKeyword("");
    setSubmitted(false);
    setCurrentNewsPage(1);
    setCurrentFilterPage(1);
  };

  return (
    <>
      <div className={css.myСomponent}>
        <div className={css.inputContainer}>
          <form onSubmit={handleSearch}>
            <Input
              value={keyword}
              onChange={handleChange}
              placeholder="Search"
              disableUnderline
              style={{
                borderRadius: "20px",
                border: "1px solid #aeadad",
                background: "transparent",
                padding: "0px 14px 0px 20px",
                height: "43px",
                boxShadow: "3px 8px 14px rgba(136, 198, 253, 0.19)",
              }}
              inputProps={{
                className: css.placeholder,
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleSearch}
                    style={{ color: "#54ADFF" }}
                  >
                    <Search />
                  </IconButton>
                  {keyword && (
                    <IconButton
                      onClick={handleClear}
                      style={{ color: "#FFC107" }}
                    >
                      <Clear />
                    </IconButton>
                  )}
                </InputAdornment>
              }
              fullWidth
            />
          </form>
        </div>

        <NewsList />
        <PaginationLine
          totalPages={totalPages}
          currentPage={currentPageInt}
          onChange={(page) => {
            if (!submitted) {
              handleNewsPageChange(page);
            }
            handleFilterPageChange(page);
          }}
        />
      </div>
    </>
  );
};

export default NewsSearch;
