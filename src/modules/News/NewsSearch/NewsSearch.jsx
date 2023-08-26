import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { InputAdornment, IconButton, Input } from "@mui/material";
import { Search, Clear } from "@mui/icons-material";

import {
  selectAllNewsTotalPages,
  selectAllNewsPage,
} from "../../../redux/news/news-selectors";
import {
  fetchNews,
  fetchFilteredNews,
} from "../../../redux/news/news-operation";
import NewsList from "../NewsList/NewsList";
import PaginationLine from "../../../shared/components/Pagination/Pagination";
import { toastInfo } from "../../../shared/toastify/toastify";
import css from "../NewsSearch/NewsSearch.module.css";
import { toastInfo } from "../../../shared/toastify/toastify";
import { setQuery, setPage } from "../../../redux/news/news-slice";

const NewsSearch = () => {

  const [keyword, setKeyword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [currentNewsPage, setCurrentNewsPage] = useState(1);
  const [currentFilterPage, setCurrentFilterPage] = useState(1);
  const totalPages = useSelector(selectAllNewsTotalPages);
  const currentPage = useSelector(selectAllNewsPage);
  const currentPageInt = Number(currentPage);

  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (!submitted) {
      dispatch(fetchNews(currentNewsPage));
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

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const trimmedKeyword = keyword.trim();

      if (trimmedKeyword === "") {
        dispatch(setQuery(""));
        toastInfo("Please enter something");
        return;
      }
      dispatch(setPage(1));
      dispatch(setQuery(trimmedKeyword));
    },
    [dispatch, keyword]
  );

  return (
    <div className={css.myСomponent}>
      <div className={css.inputContainer}>
        <form onSubmit={handleSubmit}>
          <Input
            name="searchField"
            className={css.input}
            value={keyword}
            onChange={handleKeywordChange}
            placeholder="Search"
            disableUnderline
            inputProps={{
              className: css.placeholder,
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton type="submit" style={{ color: "#54ADFF" }}>
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
    </div>
  );
};

export default NewsSearch;

