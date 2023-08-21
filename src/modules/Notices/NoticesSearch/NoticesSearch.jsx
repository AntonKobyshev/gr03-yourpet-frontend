import React, { useState, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";
import { InputAdornment, IconButton, Input } from "@mui/material";
import { Search, Clear } from "@mui/icons-material";
import {
  fetchAllFavoriteNotices,
  fetchNoticesByCategory,
  fetchNoticesByOwn,
} from "../../../redux/notices/notices-operations";
import { selectCategory } from "../../../redux/notices/notices-selectors";
import { useLocation } from "react-router-dom";

import css from "../NoticesSearch/NoticesSearch.module.css";
import { toastInfo } from "../../../shared/toastify/toastify";

const NoticesSearch = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const location = useLocation();
  const categoryIsLoginUser = location.pathname.split("/")[2];
  const category = useSelector(selectCategory);

  const handleClear = () => {
    setKeyword("");
    try {
      if (categoryIsLoginUser === "own") {
        dispatch(fetchNoticesByOwn({ query: "", page: 1 }));
      } else if (categoryIsLoginUser === "favorite") {
        dispatch(fetchAllFavoriteNotices({ query: "", page: 1 }));
      } else if (category) {
        dispatch(
          fetchNoticesByCategory({
            categoryName: category,
            query: "",
            page: 1,
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeywordChange = (e) => {
    const query = e.target.value;
    setKeyword(query);
    if (query === "") {
      try {
        if (categoryIsLoginUser === "own") {
          dispatch(fetchNoticesByOwn({ query: "", page: 1 }));
        } else if (categoryIsLoginUser === "favorite") {
          dispatch(fetchAllFavoriteNotices({ query: "", page: 1 }));
        } else if (category) {
          dispatch(
            fetchNoticesByCategory({
              categoryName: category,
              query: "",
              page: 1,
            })
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const trimmedKeyword = keyword.trim();

      if (trimmedKeyword === "") {
        toastInfo("Please enter something");
        return;
      }
      try {
        if (categoryIsLoginUser === "own") {
          dispatch(fetchNoticesByOwn(trimmedKeyword, 1));
        } else if (categoryIsLoginUser === "favorite") {
          dispatch(fetchAllFavoriteNotices(trimmedKeyword, 1));
        } else if (category) {
          dispatch(
            fetchNoticesByCategory({
              categoryName: category,
              query: trimmedKeyword,
              page: 1,
            })
          );
        }
      } catch (error) {
        console.log(error);
      }
    },
    [category, categoryIsLoginUser, dispatch, keyword]
  );

  return (
    <div className={css.myСomponent}>
      <div className={css.inputContainer}>
        <form onSubmit={handleSubmit}>
          <Input
            value={keyword}
            onChange={handleKeywordChange}
            placeholder="Search"
            disableUnderline
            style={{
              borderRadius: "20px",
              backgroundColor: "#FFFFFF",
              background: "transparent",
              border: "1px solid #aeadad",
              padding: "0px 14px 0px 20px",
              height: "43px",
              boxShadow: "3px 8px 14px rgba(136, 198, 253, 0.19)",
            }}
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

export default React.memo(NoticesSearch);
