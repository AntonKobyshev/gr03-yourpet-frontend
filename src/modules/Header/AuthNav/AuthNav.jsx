import { useEffect, useState } from "react";
import CloseMenu from "../../../images/icons/cross-small.svg";
import BurgerMenuBtn from "../../../images/icons/menu-hamburger.svg";
import css from "./AuthNav.module.css";
import Nav from "../Nav/Nav";
import PawIcon from "../../../images/icons/paw.svg";
import { useNavigate } from "react-router-dom";

export default function AuthNav() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1280);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuShown(!isMenuShown);
  };
  const closeMenu = () => {
    setIsMenuShown(false);
  };
  const handleRegisterBtnClick = () => {
    navigate("/register");
    closeMenu();
  };

  const handleLoginBtnClick = () => {
    navigate("/login");
    closeMenu();
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
        <button
          type="button"
          className={css.loginBtnTab}
          onClick={handleLoginBtnClick}
        >
          Log IN
          <img src={PawIcon} alt="paw" />
        </button>
        <button
          type="button"
          className={css.registerBtnWideScreen}
          onClick={handleRegisterBtnClick}
        >
          Registration
        </button>

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
          <button
            type="button"
            className={css.loginBtn}
            onClick={handleLoginBtnClick}
          >
            Log IN
            <img src={PawIcon} alt="paw" />
          </button>
          <button
            type="button"
            className={css.registerBtnMob}
            onClick={handleRegisterBtnClick}
          >
            Registration
          </button>

          <Nav onClick={closeMenu} />
        </div>
      )}
    </div>
  );
}
