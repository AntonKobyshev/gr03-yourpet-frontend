import React from "react";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Button from "@mui/material/Button";
import css from "./UserLogoutBtn.module.css";

const LogoutButton = ({ handleOpen, editAllFields }) => {
  return (
    <>
      {editAllFields ? null : (
        <Button
          onClick={handleOpen}
          variant="outlined"
          style={{
            border: "rgba(0, 0, 0, 0)",
            color: "#888888",
            fontSize: "16px",
            padding: "0",
            fontFamily: "Manrope",
            textTransform: "none",
            marginRight: "auto",
          }}
          className={css.logoutBtn}
          startIcon={
            <LogoutOutlinedIcon
              style={{
                color: "#54ADFF",
                transform: "rotate(180deg)",
                fontSize: "24px",
              }}
            />
          }
        >
          {"Log Out"}
        </Button>
      )}
    </>
  );
};

export default LogoutButton;
