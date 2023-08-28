import { useRef } from "react";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import Button from "@mui/material/Button";
import css from "./UserAvatar.module.css";
import { userInfo } from "../../../redux/auth/auth-selectors";
import { useSelector } from "react-redux";

const UserAvatar = ({
  previewImage,
  selectedImage,
  isPhotoUploaded,
  handleUpload,
  handleDeleteAvatar,
  addAvatarBtn,
  handleChangeAvatar,
  isEditing,
}) => {
  const { user } = useSelector(userInfo);
  const filePicker = useRef(null);

  
  return (
    <div className={css.avatarWrapper}>
      {previewImage ? (
        <img src={previewImage} alt="Preview" className={css.avatar} />
      ) : (
        <img src={user.imageURL} alt="avatar" className={css.avatar} />
      )}

      <div className={css.wrapperFile}>
        {selectedImage && !isPhotoUploaded && (
          <>
            <Button
              onClick={handleUpload}
              variant="outlined"
              style={{
                border: "rgba(0, 0, 0, 0)",
                color: "#111111",
                fontSize: "12px",
                padding: "0",
                paddingRight: "5px",
                borderRadius: "10px",
                fontFamily: "Manrope",
                textTransform: "none",
                marginRight: "12px",
              }}
            >
              <DoneOutlinedIcon
                style={{
                  color: "#54ADFF",
                  padding: "0px",
                  height: "24px",
                  width: "24px",
                  marginRight: "0",
                }}
              />
            </Button>
            <div>Confirm</div>
            <Button
              onClick={handleDeleteAvatar}
              style={{
                border: "rgba(0, 0, 0, 0)",
                color: "#111111",
                fontSize: "12px",
                padding: "0",
                paddingRight: "5px",
                borderRadius: "10px",
                fontFamily: "Manrope",
                textTransform: "none",
                marginRight: "auto",
              }}
            >
              <ClearOutlinedIcon
                style={{
                  color: "#F43F5E",
                  padding: "0px",
                  height: "24px",
                  width: "24px",
                }}
              />
            </Button>
          </>
        )}

        {isEditing && !selectedImage && !isPhotoUploaded && (
          <label htmlFor="fileElem" className={css.avatarLabel}>
            <CameraAltOutlinedIcon
              style={{ color: "#54ADFF", marginRight: "8px" }}
              onClick={addAvatarBtn}
            />
            {"Edit photo"}
            <input
              type="file"
              id="fileElem"
              accept="image/*"
              name="Edit photo"
              ref={filePicker}
              className={css.avatarBtn}
              onChange={handleChangeAvatar}
            />
          </label>
        )}

        {isPhotoUploaded && (
          <label htmlFor="fileElem" className={css.avatarLabel}>
            <CameraAltOutlinedIcon
              style={{ color: "#54ADFF", marginRight: "8px" }}
              onClick={addAvatarBtn}
            />
            {"Edit photo"}
            <input
              type="file"
              id="fileElem"
              accept="image/*"
              name="Add photo"
              ref={filePicker}
              className={css.avatarBtn}
              onChange={handleChangeAvatar}
            />
          </label>
        )}
      </div>
    </div>
  );
};

export default UserAvatar;
