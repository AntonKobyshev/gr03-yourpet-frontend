import React, { useState, useEffect } from "react";
import css from "./NoticeCategoryItem.module.css";
import svgSprite from "../../../images/icons/sprite-cardPet.svg";
import imagePet from "../../../images/tempImgForPetCards-mobile.png";

const NoticeCategoryItem = ({
  id,
  titel,
  file,
  category,
  favorite,
  location,
  age,
  sex,
}) => {
  const [imageError, setImageError] = useState(false);

  const [sexIcon, setSexIcon] = useState("icon-male");

  //   const selectedCategory = () => {
  //     if (category) {
  //       return "In good hands";
  //     } else {
  //       return category;
  //     }
  //   };

  useEffect(() => {
    if (sex === "female") {
      setSexIcon("icon-female");
    } else {
      setSexIcon("icon-male");
    }
  }, [sex]);

  const addToFavorites = () => {};

  const handleImageError = () => setImageError(true);

  const handleDelete = () => {};

  const handleOpenModal = () => {};

  return (
    <>
      NoticeCategoryItem
      <div>
        <li key={id} className={css.item}>
          <div className={css.imageWrapper}>
            <img
              className={css.image}
              src={
                imageError ? file : imagePet
              } /*поміняти місцями file і link після підключення до беку*/
              alt={"title"}
              loading="lazy"
              onError={handleImageError}
            />
            <p className={css.category}>{"selectedCategory"} </p>
            <button
              className={css.addToFavoritesButton}
              onClick={addToFavorites}
            >
              {favorite ? (
                <svg width="24" height="24">
                  <use
                    href={`${svgSprite}#icon-heart-off`}
                    fill="#54ADFF"
                  ></use>
                </svg>
              ) : (
                <svg width="24" height="24">
                  <use href={`${svgSprite}#icon-heart-on`}></use>
                </svg>
              )}
            </button>
            <button
              className={css.deleteFavoritesButton}
              type="button"
              onClick={handleDelete}
            >
              <svg width="24" height="24">
                <use href={`${svgSprite}#icon-trash-2`}></use>
              </svg>
            </button>
            <div className={css.infoWrapper}>
              <p className={css.location}>
                <svg className={css.iconSvg} width="24" height="24">
                  <use href={`${svgSprite}#icon-location-1`}></use>
                </svg>
                <span className={css.texProp}>{"location"}</span>
              </p>
              <p className={css.age}>
                <svg className={css.iconSvg} width="24" height="24">
                  <use href={`${svgSprite}#icon-clock`}></use>
                </svg>
                <span className={css.texProp}>{"age"}</span>
              </p>
              <p className={css.sex}>
                <svg className={css.iconSvg} width="24" height="24">
                  <use href={`${svgSprite}#${sexIcon}`}></use>
                </svg>
                <span className={css.texProp}>{"sex"}</span>
              </p>
            </div>
            <div className={css.itemDiscription}>
              <h2 className={css.title}>{"title"}</h2>
            </div>
            <div className={css.learnMoreContainerButton}>
              <button className={css.learnMoreButton} onClick={handleOpenModal}>
                Learn more{" "}
                <svg width="24" height="24">
                  <use href={`${svgSprite}#icon-pawprint`}></use>
                </svg>
              </button>
            </div>
          </div>
        </li>
      </div>
    </>
  );
};

export default NoticeCategoryItem;
