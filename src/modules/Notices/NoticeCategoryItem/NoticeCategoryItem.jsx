import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./NoticeCategoryItem.module.css";
import svgSprite from "../../../images/icons/sprite-cardPet.svg";
import imagePet from "../../../images/towelly_happy_pets_ethereal.png";
import { getFavorite, getUserId } from "../../../redux/auth/auth-selectors";
import { selectIsLoggedIn } from "../../../redux/auth/auth-selectors";
import {
  fetchAddToFavorite,
  fetchRemoveFromFavorite,
  fetchDeleteNotice,
} from "../../../redux/notices/notices-operations";
import ModalNotice from "../../ModalNotice/ModalNotice";
import ModalAttention from "../../ModalAttention/ModalAttention";
import ModalDeleteCardNotice from "../../ModalDeleteCardNotice/ModalDeleteCardNotice";
import * as toasty from "../../../shared/toastify/toastify";
import useToggleModalDeleteCardNotice from '../../../shared/hooks/useToggleModalDeleteCardNotice';

const NoticeCategoryItem = ({
  _id,
  image,
  category,
  title,
  location,
  date,
  sex,
  comments,
  breed,
  owner,
  name,
  favorite,
}) => {
  const [imageError, setImageError] = useState(false);
  const userId = useSelector(getUserId);
  const [sexIcon, setSexIcon] = useState("icon-male");
  const [isAttentionModalOpen, setIsAttentionModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const favorites = useSelector(getFavorite);
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(favorites.includes(_id));
  

  useEffect(() => {
    setIsFavorite(favorites.includes(_id));
  }, [favorites, _id]);




  const noticeCategories = Object.freeze({
    SELL: "sell",
    LOSTFOUND: "lost/found",
    FORFREE: "for-free",
    MYPET: "mypets",
    FAVORITE: "favorite",
  });

  const updateCategory = () => {
    if (category === noticeCategories.FORFREE) {
      return "In good hands";
    } else {
      return category;
    }
  };

  const isUserRegistered = useSelector(selectIsLoggedIn);

  const updatedCategory = updateCategory();

  useEffect(() => {
    if (sex === "female") {
      setSexIcon("icon-female");
    } else {
      setSexIcon("icon-male");
    }
  }, [sex, favorites]);

  const handleImageError = () => setImageError(true);

  const handleFavoriteToggle = async () => {
    if (!isUserRegistered) return toasty.toastInfo("You must be logged in");

    try {
      if (isFavorite) {
        await dispatch(fetchRemoveFromFavorite(_id));
        toasty.toastSuccess("Removed from favorites");
      } else {
        await dispatch(fetchAddToFavorite(_id));
        toasty.toastSuccess("Added to favorites");
      }
      setIsFavorite(!isFavorite);
    } catch (e) {
      toasty.toastError(e.message);
    }
  };

  const { isModalOpenApprove, openModalApprove, closeModalApprove } =
    useToggleModalDeleteCardNotice();

  function getAge(date) {
    const ymdArr = date.split('.').map(Number).reverse();
    ymdArr[1]--;
    const bornDate = new Date(...ymdArr);

    const now = new Date();

    const leapYears = (now.getFullYear() - ymdArr[0]) / 4;

    now.setDate(now.getDate() - Math.floor(leapYears));

    const nowAsTimestamp = now.getTime();
    const bornDateAsTimestamp = bornDate.getTime();

    const ageAsTimestamp = nowAsTimestamp - bornDateAsTimestamp;

    const oneYearInMs = 3.17098e-11;

    const age = Math.floor(ageAsTimestamp * oneYearInMs);
    return age;
  }; 
  

  function getAge(date) {
    const ymdArr = date.split(".").map(Number).reverse();
    ymdArr[1]--;
    const bornDate = new Date(...ymdArr);

    const now = new Date();

    const leapYears = (now.getFullYear() - ymdArr[0]) / 4;

    now.setDate(now.getDate() - Math.floor(leapYears));

    const nowAsTimestamp = now.getTime();
    const bornDateAsTimestamp = bornDate.getTime();

    const ageAsTimestamp = nowAsTimestamp - bornDateAsTimestamp;

    const oneYearInMs = 3.17098e-11;

    const age = Math.floor(ageAsTimestamp * oneYearInMs);
    return age;
  }

  const age = getAge(date);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    if (owner === userId) {
      setIsDeleteModalOpen(true);
    }
  };


  return (
    <div>
      <li key={_id} className={css.item}>
        <div className={css.imageWrapper}>
          <img
            className={css.image}
            src={imageError ? imagePet : image}
            alt={title}
            loading="lazy"
            onError={handleImageError}
          />
          <p className={css.category}>{updatedCategory} </p>

          {isFavorite ? (
            <button
              className={css.addToFavoritesButton}
              type="button"
              onClick={handleFavoriteToggle}
            >
              <svg width="24" height="24">
                <use href={`${svgSprite}#icon-heart-off`} fill="#54ADFF"></use>
              </svg>
            </button>
          ) : (
            <button
              className={css.addToFavoritesButton}
              onClick={handleFavoriteToggle}
              type="button"
            >
              <svg width="24" height="24">
                <use href={`${svgSprite}#icon-heart-on`}></use>
              </svg>
            </button>
          )}

          {owner === userId && (
            <button
              className={css.deleteFavoritesButton}
              type="button"
              onClick={openModalApprove}
            >
              <svg width="24" height="24">
                <use href={`${svgSprite}#icon-trash-2`}></use>
              </svg>
            </button>
          )}


          <div className={css.infoWrapper}>
            <p className={css.location}>
              <svg className={css.iconSvg} width="24" height="24">
                <use href={`${svgSprite}#icon-location-1`}></use>
              </svg>
              <span className={css.texProp}>{location}</span>
            </p>
            <p className={css.age}>
              <svg className={css.iconSvg} width="24" height="24">
                <use href={`${svgSprite}#icon-clock`}></use>
              </svg>
              <span className={css.texProp}>{`${age} year`}</span>
            </p>
            <p className={css.sex}>
              <svg className={css.iconSvg} width="24" height="24">
                <use href={`${svgSprite}#${sexIcon}`}></use>
              </svg>
              <span className={css.texProp}>{sex}</span>
            </p>
          </div>
          <div className={css.itemDiscription}>
            <h2 className={css.title}>{title}</h2>
          </div>
          <div className={css.learnMoreContainerButton}>
            <button className={css.learnMoreButton} onClick={handleOpenModal}>
              Learn more
              <svg width="24" height="24">
                <use href={`${svgSprite}#icon-pawprint`}></use>
              </svg>
            </button>
          </div>
        </div>
      </li>
      {isModalOpen && (
        <ModalNotice
          openModal={handleOpenModal}
          onClose={handleCloseModal}
          _id={_id}
          image={image}
          category={category}
          location={location}
          date={date}
          sex={sex}
          title={title}
          comments={comments}
          breed={breed}
          owner={owner}
          name={name}
          isFavorite={favorites}
          addToFavorite={handleFavoriteToggle}
        />
      )}
              {isModalOpenApprove && (
                <ModalDeleteCardNotice
                  closeModal={closeModalApprove}
                  handleDelete={handleDelete}
                  _id={_id}
                  title={title}
                />
              )}
      {isAttentionModalOpen && (
        <ModalAttention
          onClick={() => {
            setIsAttentionModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default NoticeCategoryItem;
