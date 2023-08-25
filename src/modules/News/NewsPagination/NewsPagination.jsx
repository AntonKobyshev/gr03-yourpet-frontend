import React from "react";
import { Stack, Pagination, PaginationItem } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useDispatch } from "react-redux";
import { fetchNews } from "../../../redux/news/news-operation";
import { useSelector } from "react-redux";
import {
  selectAllNewsPage,
  selectAllNewsTotalPages,
  selectQuery,
} from "../../../redux/news/news-selectors";
import css from "./NewsPagination.module.css";

const NewsPagination = () => {
  const inputQuery = useSelector(selectQuery);
  const dispath = useDispatch();

  const totalPages = useSelector(selectAllNewsTotalPages);
  const currentPage = useSelector(selectAllNewsPage);

  const handlePageChange = (event, page) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispath(fetchNews({ query: inputQuery, page }));
  };

  return (
    <Stack
      spacing={2}
      className={css.pagination}
      sx={{
        marginX: "auto",
      }}
    >
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={currentPage}
          color="primary"
          variant="outlined"
          onChange={handlePageChange}
          sx={{
            marginX: "auto",
            marginBottom: "20px",
            padding: "8px 12px",
            background: "#FEF9F9",
          }}
          renderItem={(item) => (
            <PaginationItem
              sx={{
                "&.Mui-selected": {
                  background: "#54ADFF",
                  color: "#FEF9F9",
                  border: "none",
                },

                background: "#FEF9F9",
                color: "#CCE4FB",
                borderColor: "#CCE4FB",
              }}
              icon={
                item.type === "previous" ? (
                  <ArrowBackIcon />
                ) : (
                  <ArrowForwardIcon />
                )
              }
              component="button"
              onClick={(e) => handlePageChange(e, item.page)}
              selected={item.page === currentPage}
              {...item}
            />
          )}
        />
      )}
    </Stack>
  );
};

export default NewsPagination;
