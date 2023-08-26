import { Stack, Pagination, PaginationItem } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function PaginationLine({ totalPages, onChange, currentPage }) {
  const handlePageChange = (event, page) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    onChange(page);
  };

  return (
    <Stack spacing={2}>
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
              icons={{
                previous: <ArrowBackIcon />,
                next: <ArrowForwardIcon />,
              }}
              component="button"
              onClick={(e) => handlePageChange(e, item.page)}
              {...item}
            />
          )}
        />
      )}
    </Stack>
  );
}

export default PaginationLine;
