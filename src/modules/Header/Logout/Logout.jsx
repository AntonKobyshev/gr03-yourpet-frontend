import React from "react";
import LogoutIcon from "../../../images/icons/logout.svg";

const Logout = ({ className }) => {
  const handleButtonClick = () => {
    alert("ButtonClick");
  };

  return (
    <div>
      <button
        type="button"
        className={`${className}`}
        onClick={handleButtonClick}
      >
        Log Out
        <img src={LogoutIcon} alt="Logout icon" />
      </button>
    </div>
  );
};

export default Logout;
