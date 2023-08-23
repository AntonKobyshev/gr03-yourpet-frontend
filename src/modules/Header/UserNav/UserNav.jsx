import { useEffect, useState } from "react";
import BurgerMenuBtn from "./burgerMenuBtn.svg";
import CloseMenu from "./closeMenuBtn.svg";
import Nav from "../Nav/Nav";
import css from "./UserNav.module.css";
import ModalTitle from "../../ModalTitle/ModalTitle";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function UserNav() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1280);

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
    <div>
      <div className={css.navBox}>
        {isMenuShown ? (
          <div className={css.logoutBtnTab}>
            <ModalTitle />
          </div>
        ) : (
          <>
            {isWideScreen ? (
              <div className={css.logoutBtnDesc}>
                <ModalTitle />
              </div>
            ) : null}
            <NavLink className={css.userInfoTab} to="/user" onClick={closeMenu}>
              <img src={user.imageURL} alt="user icon" width="28" />
              <p>{user.name}</p>
            </NavLink>
          </>
        )}

        <button onClick={toggleMenu} type="button" className={css.menuBtn}>
          <img
            src={isMenuShown ? CloseMenu : BurgerMenuBtn}
            alt="burger menu button"
          />
        </button>
      </div>

      {isMenuShown && (
        <div className={css.menu}>
          <NavLink className={css.userInfo} to="/user" onClick={closeMenu}>
            <img src={user.imageURL} alt="user icon" width="28" />
            <p>{user.name}</p>
          </NavLink>
          <Nav onClick={closeMenu} />
          <div className={css.logoutBtn}>
            <ModalTitle />
          </div>
        </div>
      )}
    </div>
  );
}
