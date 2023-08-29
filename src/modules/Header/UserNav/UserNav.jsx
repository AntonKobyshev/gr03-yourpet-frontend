import { useEffect, useState } from "react";
import BurgerMenuBtn from "../../../images/icons/menu-hamburger.svg";
import CloseMenu from "../../../images/icons/cross-small.svg";
import Nav from "../Nav/Nav";
import css from "./UserNav.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ModalApproveAction from "../../ModalApproveAction/ModalApproveAction";
import ApproveLeaving from "../../ApproveLeaving/ApproveLeaving";
import { logout } from "../../../redux/auth/auth-operations";
import Logout from "../Logout/Logout";
// import { withTheme } from "@emotion/react";

export default function UserNav() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1280);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleLogout = () => {
    handleClose();
    dispatch(logout());
    navigate("/");
  };

  const { user } = useSelector((state) => state.auth);
  const toggleMenu = () => {
    setIsMenuShown(!isMenuShown);
  };

  const closeMenu = () => {
    setIsMenuShown(false);
  };
  useEffect(() => {
    if (isMenuShown) {
      document.body.classList.add(css.noScroll);
    } else {
      document.body.classList.remove(css.noScroll);
    }

    return () => {
      document.body.classList.remove(css.noScroll);
    };
  }, [isMenuShown]);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1280);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isWideScreen) {
      closeMenu();
    }
  }, [isWideScreen]);

  return (
    <>
      <div>
        <div className={css.navBox}>
          {isMenuShown ? (
            <div className={css.logoutBtnTab}>
              <Logout
                onClick={handleOpen}
                className={css.logoutBtnMain}
                iconColor="white"
              />
            </div>
          ) : (
            <>
              {isWideScreen ? (
                <div className={css.logoutBtnDesc}>
                  <Logout
                    onClick={handleOpen}
                    className={css.logoutBtnMain}
                    iconColor="white"
                  />
                </div>
              ) : null}
              <Link
                className={css.userInfoWideScreen}
                to="/user"
                onClick={closeMenu}
              >
                <img src={user.image} alt="user icon" width="28" />
                <p>{user.name}</p>
              </Link>
            </>
          )}

          <button
            onClick={toggleMenu}
            type="button"
            className={css.toggleBurgerBtn}
          >
            <img
              src={isMenuShown ? CloseMenu : BurgerMenuBtn}
              alt="burger menu button"
            />
          </button>
        </div>

        {isMenuShown && (
          <div className={css.burgerMenu}>
            <Link className={css.userInfoMobile} to="/user" onClick={closeMenu}>
              <img src={user.image} alt="user icon" width="28" />
              <p>{user.name}</p>
            </Link>
            <Nav onClick={closeMenu} />
            <div className={css.logoutBtnMob}>
              <Logout
                onClick={handleOpen}
                className={css.logoutBtnMain}
                iconColor="white"
              />
            </div>
          </div>
        )}
      </div>
      {open && (
        <ModalApproveAction
          handleOpen={handleOpen}
          handleClose={handleClose}
          open={open}
        >
          <ApproveLeaving
            handleClose={handleClose}
            handleLogout={handleLogout}
          />
        </ModalApproveAction>
      )}
    </>
  );
}
