import { Backdrop, Box, Button, Fade, Modal } from "@mui/material";
import React from "react";
import css from "./ModalTeam.module.css";
import CloseIcon from "@mui/icons-material/Close";
import github from "../../images/icons/github.svg";
import linkedin from "../../images/icons/linkedin.svg";

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

const ModalTeam = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Modal Team</Button>
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
              <ul className={css.teamList}>
                <li className={css.teamItem}>
                  <img className={css.image} src={""} alt={""} />
                  <p className={css.title}>
                    Taras <br /> Varvarych
                  </p>
                  <div className={css.btnContainer}>
                    <a
                      className={css.socialLink}
                      href="http://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className={css.socialIcon}
                        src={github}
                        alt="github"
                      />
                    </a>
                    <a
                      className={css.socialLink}
                      href="http://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className={css.socialIcon}
                        src={linkedin}
                        alt="linkedin"
                      />
                    </a>
                  </div>
                </li>{" "}
                <li className={css.teamItem}>
                  <img className={css.image} src={""} alt={""} />
                  <p className={css.title}>
                    Tetiana <br />
                    Yablonska
                  </p>
                  <div className={css.btnContainer}>
                    <a
                      className={css.socialLink}
                      href="http://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className={css.socialIcon}
                        src={github}
                        alt="github"
                      />
                    </a>
                    <a
                      className={css.socialLink}
                      href="http://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className={css.socialIcon}
                        src={linkedin}
                        alt="linkedin"
                      />
                    </a>
                  </div>
                </li>{" "}
                <li className={css.teamItem}>
                  <img className={css.image} src={""} alt={""} />
                  <p className={css.title}>
                    Yurii <br />
                    Syvolapenko
                  </p>
                  <div className={css.btnContainer}>
                    <a
                      className={css.socialLink}
                      href="http://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className={css.socialIcon}
                        src={github}
                        alt="github"
                      />
                    </a>
                    <a
                      className={css.socialLink}
                      href="http://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className={css.socialIcon}
                        src={linkedin}
                        alt="linkedin"
                      />
                    </a>
                  </div>
                </li>{" "}
                <li className={css.teamItem}>
                  <img className={css.image} src={""} alt={""} />
                  <p className={css.title}>
                    Anna
                    <br /> Shalar
                  </p>
                  <div className={css.btnContainer}>
                    <a
                      className={css.socialLink}
                      href="http://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className={css.socialIcon}
                        src={github}
                        alt="github"
                      />
                    </a>
                    <a
                      className={css.socialLink}
                      href="http://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className={css.socialIcon}
                        src={linkedin}
                        alt="linkedin"
                      />
                    </a>
                  </div>
                </li>{" "}
                <li className={css.teamItem}>
                  <img className={css.image} src={""} alt={""} />
                  <p className={css.title}>
                    Serhii
                    <br /> Shmatok
                  </p>
                  <div className={css.btnContainer}>
                    <a
                      className={css.socialLink}
                      href="http://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className={css.socialIcon}
                        src={github}
                        alt="github"
                      />
                    </a>
                    <a
                      className={css.socialLink}
                      href="http://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className={css.socialIcon}
                        src={linkedin}
                        alt="linkedin"
                      />
                    </a>
                  </div>
                </li>{" "}
                <li className={css.teamItem}>
                  <img className={css.image} src={""} alt={""} />
                  <p className={css.title}>
                    Anton
                    <br /> Kobyshev
                  </p>
                  <div className={css.btnContainer}>
                    <a
                      className={css.socialLink}
                      href="http://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className={css.socialIcon}
                        src={github}
                        alt="github"
                      />
                    </a>
                    <a
                      className={css.socialLink}
                      href="http://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className={css.socialIcon}
                        src={linkedin}
                        alt="linkedin"
                      />
                    </a>
                  </div>
                </li>{" "}
                <li className={css.teamItem}>
                  <img className={css.image} src={""} alt={""} />
                  <p className={css.title}>
                    Markiian
                    <br /> Levytskyi
                  </p>
                  <div className={css.btnContainer}>
                    <a
                      className={css.socialLink}
                      href="http://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className={css.socialIcon}
                        src={github}
                        alt="github"
                      />
                    </a>
                    <a
                      className={css.socialLink}
                      href="http://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className={css.socialIcon}
                        src={linkedin}
                        alt="linkedin"
                      />
                    </a>
                  </div>
                </li>{" "}
                <li className={css.teamItem}>
                  <img className={css.image} src={""} alt={""} />
                  <p className={css.title}>
                    Kostiantyn
                    <br /> Tymoshenko
                  </p>
                  <div className={css.btnContainer}>
                    <a
                      className={css.socialLink}
                      href="http://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className={css.socialIcon}
                        src={github}
                        alt="github"
                      />
                    </a>
                    <a
                      className={css.socialLink}
                      href="http://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className={css.socialIcon}
                        src={linkedin}
                        alt="linkedin"
                      />
                    </a>
                  </div>
                </li>{" "}
                <li className={css.teamItem}>
                  <img className={css.image} src={""} alt={""} />
                  <p className={css.title}>
                    Viktoriia <br />
                    Melnyk
                  </p>
                  <div className={css.btnContainer}>
                    <a
                      className={css.socialLink}
                      href="http://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className={css.socialIcon}
                        src={github}
                        alt="github"
                      />
                    </a>
                    <a
                      className={css.socialLink}
                      href="http://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className={css.socialIcon}
                        src={linkedin}
                        alt="linkedin"
                      />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalTeam;
