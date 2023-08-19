import { useState } from "react";
import UserIcon from "./userIcon.svg";
import BurgerMenuBtn from "./burgerMenuBtn.svg";
import CloseMenu from "./closeMenuBtn.svg";
import LogoutIcon from "./logout.svg";
import Nav from "../Nav/Nav";
import css from "./UserNav.module.css";

export default function UserNav() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const toggleMenu = () => {
    setIsMenuShown(!isMenuShown);
  };
  return (
    <div>
      <div className={css.navBox}>
        {isMenuShown ? (
          <button type="button" className={css.logoutBtnTab}>
            Log out
            <img src={LogoutIcon} alt="log out button" />
          </button>
        ) : (
          <>
            <button type="button" className={css.logoutBtnDesc}>
              Log out
              <img src={LogoutIcon} alt="log out button" />
            </button>
            <div className={css.userInfoTab}>
              <img src={UserIcon} alt="user icon" />
              <p>User name</p>
            </div>
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
          <div className={css.userInfo}>
            <img src={UserIcon} alt="user icon" />
            <p>User name</p>
          </div>
          <Nav />
          <button type="button" className={css.logoutBtn}>
            Log out
            <img src={LogoutIcon} alt="log out button" />
          </button>
        </div>
      )}
    </div>
  );
}
