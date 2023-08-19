import { Backdrop, Box, Button, Fade, Modal } from "@mui/material";
import React from "react";
import css from "./ModalDelete.module.css";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 8,
};

const ModalDelete = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Modal Delete</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} className={css.modalBox}>
            <CloseIcon
              onClick={handleClose}
              className={css.closeBtn}
              sx={{ width: 30, height: 30 }}
            />
            <div className={css.contentContainer}>
              <p className={css.title}>Delete adverstiment?</p>
              <div>
                <p className={css.text}>
                  Are you sure you want to delete{" "}
                  <span className={css.textAccent}>
                    “Cute dog looking for a home”?
                  </span>{" "}
                </p>{" "}
                <p className={css.text}>You can`t undo this action.</p>
              </div>
              <div className={css.btnContainer}>
                <button
                  onClick={handleClose}
                  className={css.btnAccent}
                  type="button"
                >
                  Cancel
                </button>
                <button className={css.btn} type="button">
                  <span>Yes</span>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.5 6V18C18.5 19.1046 17.6046 20 16.5 20H8.5C7.39543 20 6.5 19.1046 6.5 18V6M15.5 6V5C15.5 3.89543 14.6046 3 13.5 3H11.5C10.3954 3 9.5 3.89543 9.5 5V6M4.5 6H20.5M10.5 10V16M14.5 10V16"
                      stroke="#FEF9F9"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalDelete;
