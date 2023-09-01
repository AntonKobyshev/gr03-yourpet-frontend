import { Backdrop, Box, Fade, Modal } from "@mui/material";
import React from "react";
import { useState } from "react";
import css from "./ModalCongrats.module.css";
import CloseIcon from "@mui/icons-material/Close";
import pawprint from "../../images/icons/pawprint.svg";

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

const ModalCongrats = () => {
  const [open, setOpen] = React.useState(true);
    const handleClose = () => {
      setOpen(false);
      setShouldUpdate(true);
    localStorage.setItem("modalShown", "true");
  };
  const [shouldUpdate, setShouldUpdate] = useState(false);
  return (
    <div>
     
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
              <p className={css.title}>Congrats!</p>
              <p className={css.text}>Youre registration is success</p>
              <button onClick={handleClose} className={css.btn} type="button">
                <span>Go to profile</span>{" "}
                <img src={pawprint} alt="paw print" />
              </button>
              {shouldUpdate && window.location.reload()}
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalCongrats;
