import { Backdrop, Box, Fade, Modal } from "@mui/material";
import React from "react";
import css from "./ModalTitle.module.css";
import CloseIcon from "@mui/icons-material/Close";
import logoutSvg from "../../modules/Header/UserNav/logout.svg";
import { logout } from "../../redux/auth/auth-operations";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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

const ModalTitle = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    handleClose();
    dispatch(logout());
    navigate("/");
  };

  return (
    <div>
      <button className={css.logoutBtn} onClick={handleOpen}>
        Log out
        <img src={logoutSvg} alt="log out button" />
      </button>
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
              <p className={css.title}>Already leaving?</p>
              <div className={css.btnContainer}>
                <button
                  onClick={handleClose}
                  className={css.btnAccent}
                  type="button"
                >
                  Cancel
                </button>
                <button
                  className={css.btn}
                  type="button"
                  onClick={handleLogout}
                >
                  <span>Yes</span> <img src={logoutSvg} alt="log out button" />
                </button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalTitle;
