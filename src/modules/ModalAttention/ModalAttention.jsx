import { Backdrop, Box, Button, Fade, Modal } from "@mui/material";
import React from "react";
import css from "./ModalAttention.module.css";
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

const ModalAttention = () => {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      {/* <Button onClick={handleOpen}>Modal Attention</Button> */}
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
              <p className={css.title}>Attention</p>
              <div>
                <p className={css.text}>
                  We would like to remind you that certain functionality is
                  available only to authorized users.If you have an account,
                  please log in with your credentials. If you do not already
                  have an account, you must register to access these features.
                </p>
              </div>
              <div className={css.btnContainer}>
                <button
                  //   onClick={handleClose}
                  className={css.btn}
                  type="button"
                >
                  <span>Log IN</span>
                  <img src={pawprint} alt="paw print" />
                </button>
                <button className={css.btnAccent} type="button">
                  <span>Registration</span>
                </button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalAttention;
