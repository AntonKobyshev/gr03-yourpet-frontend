import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { InputAdornment, IconButton, Input } from "@mui/material";
import { Search, Clear } from "@mui/icons-material";

import css from "../NewsSearch/NewsSearch.module.css";
import { toastInfo } from "../../../shared/toastify/toastify";
import { setQuery, setPage } from "../../../redux/news/news-slice";

const NewsSearch = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  const handleClear = () => {
    dispatch(setQuery(""));
  };

  const handleKeywordChange = (e) => {
    const query = e.target.value;
    setKeyword(query);
    if (query === "") {
      dispatch(setQuery(""));
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

export default React.memo(NewsSearch);
