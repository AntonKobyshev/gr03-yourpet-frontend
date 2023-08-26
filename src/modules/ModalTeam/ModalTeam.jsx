import { Backdrop, Box, Button, Fade, Modal } from "@mui/material";
import React from "react";
import css from "./ModalTeam.module.css";
import CloseIcon from "@mui/icons-material/Close";
import github from "../../images/icons/github.svg";
import linkedin from "../../images/icons/linkedin.svg";
import teams from "../../images/icons/teams.svg";
import yurii from "../../images/team/yurii.webp";
import taras from "../../images/team/taras.webp";
import anna from "../../images/team/anna.webp";
import tanya from "../../images/team/tanya.webp";

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
    <div className={css.team}>
      <Button className={css.openBtn} onClick={handleOpen}>
        <img src={teams} alt="tems" />
      </Button>
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
                  <img className={css.image} src={""} alt={"Anton Kobyshev"} />
                  <p className={css.title}>
                    Anton
                    <br /> Kobyshev
                  </p>
                  <p className={css.text}>Team lead Front-end</p>
                  <div className={css.btnContainer}>
                    <a
                      className={css.socialLink}
                      href="https://github.com/AntonKobyshev"
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
                  <img className={css.image} src={""} alt={"Serhii Shmatok"} />
                  <p className={css.title}>
                    Serhii
                    <br /> Shmatok
                  </p>
                  <p className={css.text}>Team lead Back-end</p>
                  <div className={css.btnContainer}>
                    <a
                      className={css.socialLink}
                      href="https://github.com/Cryosphere"
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
                  <img className={css.image} src={anna} alt={"Anna Shalar"} />
                  <p className={css.title}>
                    Anna
                    <br /> Shalar
                  </p>
                  <p className={css.text}>Scrum Master</p>
                  <div className={css.btnContainer}>
                    <a
                      className={css.socialLink}
                      href="https://github.com/latikaann"
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
                      href="https://www.linkedin.com/in/annashalar/"
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
                  <img
                    className={css.image}
                    src={taras}
                    alt={"Taras Varvarych"}
                  />
                  <p className={css.title}>
                    Taras <br /> Varvarych
                  </p>
                  <p className={css.text}>Developer</p>
                  <div className={css.btnContainer}>
                    <a
                      className={css.socialLink}
                      href="https://github.com/TarasVarvarych"
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
                      href="https://www.linkedin.com/in/tarasvarvarych/"
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
                  <img
                    className={css.image}
                    src={tanya}
                    alt={"Tetiana Yablonska"}
                  />
                  <p className={css.title}>
                    Tetiana <br />
                    Yablonska
                  </p>
                  <p className={css.text}>Developer</p>
                  <div className={css.btnContainer}>
                    <a
                      className={css.socialLink}
                      href="https://github.com/YablonskaTanya"
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
                      href="https://www.linkedin.com/in/tanya-yablonskaya/"
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
                  <img
                    className={css.image}
                    src={yurii}
                    alt={"Yurii Syvolapenko"}
                  />
                  <p className={css.title}>
                    Yurii <br />
                    Syvolapenko
                  </p>
                  <p className={css.text}>Developer</p>
                  <div className={css.btnContainer}>
                    <a
                      className={css.socialLink}
                      href="https://github.com/YuriiSVL"
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
                  <img
                    className={css.image}
                    src={""}
                    alt={"Markiian Levytskyi"}
                  />
                  <p className={css.title}>
                    Markiian
                    <br /> Levytskyi
                  </p>
                  <p className={css.text}>Developer</p>
                  <div className={css.btnContainer}>
                    <a
                      className={css.socialLink}
                      href="https://github.com/Markiyan333"
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
                  <img
                    className={css.image}
                    src={""}
                    alt={"Kostiantyn Tymoshenko"}
                  />
                  <p className={css.title}>
                    Kostiantyn
                    <br /> Tymoshenko
                  </p>
                  <p className={css.text}>Developer</p>
                  <div className={css.btnContainer}>
                    <a
                      className={css.socialLink}
                      href="https://github.com/Kossti"
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
                  <img
                    className={css.image}
                    src={""}
                    alt={"Viktoriia Melnyk"}
                  />
                  <p className={css.title}>
                    Viktoriia <br />
                    Melnyk
                  </p>
                  <p className={css.text}>Developer</p>
                  <div className={css.btnContainer}>
                    <a
                      className={css.socialLink}
                      href="https://github.com/Melnyk-Vika"
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
