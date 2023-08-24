import { Backdrop, Box, Fade, Modal } from "@mui/material";
import React from "react";
import css from "./ModalApproveAction.module.css";
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

const ModalApproveAction = ({ children, handleOpen, handleClose, open }) => {
  return (
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

          <div className={css.contentContainer}>{children}</div>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalApproveAction;
