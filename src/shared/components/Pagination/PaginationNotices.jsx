import React from "react";

import { Stack, Pagination, PaginationItem } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const PaginationNotices = ({
  totalPages,
  currentCategory,
  ownCurrentPage,
  favoriteCurrentPage,
  onPageChange,
  currentPage,
}) => {
  const currentPageInit =
    currentCategory === "own"
      ? ownCurrentPage
      : currentCategory === "favorite"
      ? favoriteCurrentPage
      : currentPage;

  const handlePageChange = (event, page) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    onPageChange(page);
  };

  return (
    <Stack spacing={2}>
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={currentPageInit}
          color="primary"
          variant="outlined"
          onChange={handlePageChange}
          sx={{
            marginX: "auto",
            marginBottom: "20px",
            boxShadow: "3px 8px 14px rgba(136, 198, 253, 0.19)",
            borderRadius: "45px",
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

export default PaginationNotices;
