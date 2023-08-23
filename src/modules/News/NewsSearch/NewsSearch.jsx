import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { InputAdornment, IconButton, Input } from "@mui/material";
import { Search, Clear } from "@mui/icons-material";
import { fetchFilteredNews } from "../../../redux/news/news-operation";

import css from "../NewsSearch/NewsSearch.module.css";
import { toastInfo } from "../../../shared/toastify/toastify";

const NoticesSearch = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  const handleClear = () => {
    setKeyword("");
    try {
      dispatch(
        fetchFilteredNews({
          query: "",
          page: 1,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeywordChange = (e) => {
    const query = e.target.value;
    setKeyword(query);
    if (query === "") {
      try {
        dispatch(
          fetchFilteredNews({
            query: "",
            page: 1,
          })
        );
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
        dispatch(
          fetchFilteredNews({
            query: trimmedKeyword,
            page: 1,
          })
        );
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch, keyword]
  );

  return (
    <div className={css.myСomponent}>
      <div className={css.inputContainer}>
        <form onSubmit={handleSubmit}>
          <Input
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

export default React.memo(NoticesSearch);
