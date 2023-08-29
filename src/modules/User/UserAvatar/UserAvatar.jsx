import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import { fetchUpdateAvatar } from "../../../redux/auth/auth-operations";
import { selectAuth, userInfo } from "../../../redux/auth/auth-selectors";
import css from "./UserAvatar.module.css";

const UserAvatar = ({ isEditing }) => {
  const { token } = useSelector(selectAuth);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isPhotoUploaded, setIsPhotoUploaded] = useState(false);
  const filePicker = useRef(null);
  const dispatch = useDispatch();
  const { user } = useSelector(userInfo);
  const handleChangeAvatar = (e) => {
    setIsPhotoUploaded(false);
    const file = e.target.files[0];
    setSelectedImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleDeleteAvatar = () => {
    setPreviewImage(null);
    setIsPhotoUploaded(true);
  };

  const addAvatarBtn = () => {
    filePicker.current.click();
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", selectedImage);

    await dispatch(fetchUpdateAvatar({ token, formData }));

    setIsPhotoUploaded(true);
  };

  return (
    <div className={css.avatarWrapper}>
      {previewImage ? (
        <img src={previewImage} alt="Preview" className={css.avatar} />
      ) : (
        <img src={user.image} alt="avatar" className={css.avatar} />
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
