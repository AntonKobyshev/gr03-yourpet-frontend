import { NavLink } from "react-router-dom";

import YourPetLogo from "./yourPetLogo.svg";

export default function Logo() {
  return (
    <NavLink to="/main">
      <img src={YourPetLogo} alt="Your pet logo" />
    </NavLink>
  );
}
