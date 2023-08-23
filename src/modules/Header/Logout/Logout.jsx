import React from "react";
import LogoutIconBlue from "../../../images/icons/logoutBlue.svg";
import LogoutIconWhite from "../../../images/icons/logoutWhite.svg";

const Logout = ({ className, onClick, iconColor }) => {
  let logoutIcon = null;
  if (iconColor === "blue") {
    logoutIcon = LogoutIconBlue;
  } else if (iconColor === "white") {
    logoutIcon = LogoutIconWhite;
  }

  return (
    <div>
      <button type="button" className={`${className}`} onClick={onClick}>
        Log Out
        <img src={logoutIcon} alt="Logout icon" className="logout-icon" />
      </button>
    </div>
  );
};

export default Logout;
