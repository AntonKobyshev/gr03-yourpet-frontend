import React from "react";
import { Backdrop, Box, Button, Fade, Modal } from "@mui/material";
import heart from "../../images/icons/heart.svg";
import css from "./ModalTitle.module.css";
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

const ModalTitle = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>Modal Title</Button>
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
            <div className={css.container}>
              {" "}
              <div className={css.contentContainer}>
                <img
                  className={css.image}
                  src={""}
                  alt={"title"}
                  loading="lazy"
                />
                <div className={css.textContainer}>
                  <p className={css.title}>{`Сute dog looking for a home`}</p>
                  <div className={css.flexContainer}>
                    <div className={css.firstContainer}>
                      <p className={css.subTitle}>Name:</p>
                      <p className={css.subTitle}>Birthday:</p>
                      <p className={css.subTitle}>Type:</p>
                      <p className={css.subTitle}>Place:</p>
                      <p className={css.subTitle}>The sex:</p>
                      <p className={css.subTitle}>Email:</p>
                      <p className={css.subTitle}>Phone:</p>
                    </div>
                    <div className={css.secondContainer}>
                      <p className={css.text}>{"Rich"}</p>
                      <p className={css.text}>{"21.09.2020"}</p>
                      <p className={css.text}>{"Pomeranian"}</p>
                      <p className={css.text}>{"Lviv"}</p>
                      <p className={css.text}>{"male"}</p>
                      <p className={css.textContact}>{"user@mail.com"}</p>
                      <p className={css.textContact}>{"+380971234567"}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={css.commentContainer}>
                {" "}
                <p className={css.subTitle}>
                  Comments:{" "}
                  <span
                    className={css.textComment}
                  >{`'Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too! '`}</span>
                </p>
              </div>
              <div className={css.btnContainer}>
                <button
                  onClick={handleClose}
                  className={css.btnAccent}
                  type="button"
                >
                  Contact
                </button>
                <button className={css.btn} type="button">
                  <span>Add to </span> <img src={heart} alt="heart icon" />
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
