import { Backdrop, Box, Button, Fade, Modal } from "@mui/material";
import React from "react";
import css from "./ModalDelete.module.css";
import CloseIcon from "@mui/icons-material/Close";
import trash2 from "../../images/icons/trash2.svg";

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
                  <img src={trash2} alt="trash" />
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
