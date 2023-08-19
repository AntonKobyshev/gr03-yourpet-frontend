import { useState } from "react";
import CloseMenu from "../UserNav/closeMenuBtn.svg";
import BurgerMenuBtn from "../UserNav/burgerMenuBtn.svg";
import css from "./AuthNav.module.css";
import Nav from "../Nav/Nav";
import PawIcon from "./paw.svg";
import { useNavigate } from "react-router-dom";

export default function AuthNav() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuShown(!isMenuShown);
  };

  const handleRegisterBtnClick = () => {
    navigate("/register");
  };

  const handleLoginBtnClick = () => {
    navigate("/login");
  };

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
          className={css.registerBtnTab}
          onClick={handleRegisterBtnClick}
        >
          Registration
        </button>

        <button onClick={toggleMenu} type="button" className={css.menuBtn}>
          <img
            src={isMenuShown ? CloseMenu : BurgerMenuBtn}
            alt="burger menu button"
          />
        </button>
      </div>

      {isMenuShown && (
        <div className={css.menu}>
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
            className={css.registerBtn}
            onClick={handleRegisterBtnClick}
          >
            Registration
          </button>

          <Nav />
        </div>
      )}
    </div>
  );
}
