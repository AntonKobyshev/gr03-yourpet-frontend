import { NavLink } from "react-router-dom";
import css from "./Logo.module.css";
import YourPetLogo from "../../../images/icons/yourPetLogo.svg";

export default function Logo() {
  return (
    <NavLink to="/main">
      <img src={YourPetLogo} alt="Your pet logo" className={css.logo} />
    </NavLink>
  );
}
