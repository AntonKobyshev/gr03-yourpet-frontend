import React from "react";
import { Backdrop, Box, Button, Fade, Modal } from "@mui/material";
import heart from "../../images/icons/heart.svg";
import css from "./ModalNotice.module.css";
import CloseIcon from "@mui/icons-material/Close";

import {
  getNoticesById,
  getNoticesByIdOwner,
} from "../../redux/notices/notices-selectors";
import { fetchNoticeById } from "../../redux/notices/notices-operations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import Contact from "./Contact/Contact";
// import AddToFavorite from "./AddToFavorite/AddToFavorite";

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

const ModalNotice = ({
  handleFavoriteToggle,
  _id,
  onClose,
  addFavorite,
  openModal,
}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const item = useSelector(getNoticesById);
  const owner = useSelector(getNoticesByIdOwner);

  useEffect(() => {
    dispatch(fetchNoticeById(_id));
  }, [dispatch, _id]);

  return (
    <div>
      {/* <Button onClick={openModal}>Learn more</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModal}>
          <Box sx={style} className={css.modalBox}>
            <CloseIcon
              onClick={onClose}
              className={css.closeBtn}
              sx={{ width: 30, height: 30 }}
            />
            <div className={css.container}>
              {" "}
              <div className={css.contentContainer}>
                <img
                  className={css.image}
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
                <div className={css.textContainer}>
                  <p className={css.title}>{item.title}</p>
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
                      <p className={css.text}>{item.name}</p>
                      <p className={css.text}>{item.date}</p>
                      <p className={css.text}>{item.breed}</p>
                      <p className={css.text}>{item.location}</p>
                      <p className={css.text}>{item.sex}</p>
                      <a
                        className={css.textContact}
                        href={`mailto:${owner.email}`}
                      >
                        {owner.email}
                      </a>
                      <a
                        className={css.textContact}
                        href={`tel:${owner.phone}`}
                      >
                        {owner.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={css.commentContainer}>
                {" "}
                <p className={css.subTitle}>
                  Comments:{" "}
                  <span className={css.textComment}>{item.comments}</span>
                </p>
              </div>
              <div className={css.btnContainer}>
                <button
                  onClick={onClose}
                  className={css.btnAccent}
                  type="button"
                  phone={owner.phone}
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

export default ModalNotice;
