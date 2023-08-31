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
// import ModalDelete from "../../ModalDelete/ModalDelete";
import ModalAttention from "../../ModalAttention/ModalAttention";
import ModalDeleteCardNotice from "../../ModalDeleteCardNotice/ModalDeleteCardNotice";
import * as toasty from "../../../shared/toastify/toastify";

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
  // const { categoryName } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [openModal, setOpenModal] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const favorites = useSelector(getFavorite);
  const dispatch = useDispatch();
  const isFavorite = favorites.includes(_id);

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

  // const addToFavorites = () => {
  //   if (!isUserRegistered) {
  //     setIsAttentionModalOpen(true);
  //     return;
  //   }

  //   dispatch(fetchAddToFavorite(_id));
  // };

  const handleFavoriteToggle = async () => {
    if (!isUserRegistered) return toasty.toastInfo("You must be logged in");
    if (favorites.includes(_id)) {
      try {
        await dispatch(fetchRemoveFromFavorite(_id));
        toasty.toastSuccess("remove from favorite");
        return;
      } catch (e) {
        toasty.toastError(e.message);
      }
    } else {
      try {
        await dispatch(fetchAddToFavorite(_id));
        toasty.toastSuccess("add to favorite");
        return;
      } catch (e) {
        toasty.toastError(e.message);
      }
    }
  };

  // const handleFavoriteToggle = async () => {
  //   if (!isUserRegistered) return toasty.toastInfo("You must be logged in");
  //   if (favorites.includes(_id)) {
  //     try {
  //       await dispatch(fetchRemoveFromFavorite(_id));
  //       toasty.toastSuccess("remove from favorite");
  //       dispatch(updateFavoritesAfterRemove(_id));
  //       return;
  //     } catch (e) {
  //       toasty.toastError(e.message);
  //     }
  //   } else {
  //     try {
  //       await dispatch(fetchAddToFavorite(_id));
  //       toasty.toastSuccess("add to favorite");
  //       dispatch(updateFavoritesAfterAdd(_id));
  //       return;
  //     } catch (e) {
  //       toasty.toastError(e.message);
  //     }
  //   }
  // };

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

  const handleDeleteConfirmed = () => {
    dispatch(fetchDeleteNotice(_id));
    setIsDeleteModalOpen(false);
  };

  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false);
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

          {isFavorite && (
            <button
              className={css.addToFavoritesButton}
              type="button"
              onClick={handleFavoriteToggle}
            >
              <svg width="24" height="24">
                <use href={`${svgSprite}#icon-heart-off`} fill="#54ADFF"></use>
              </svg>
            </button>
          )}
          {!isFavorite && (
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
              onClick={handleDelete}
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
          // handleFavoriteToggle={handleFavoriteToggle}
          isFavorite={favorites}
          addToFavorite={handleFavoriteToggle}
        />
      )}
      {isDeleteModalOpen && (
        <ModalDeleteCardNotice
          onClose={handleDeleteModalClose}
          id={_id}
          title={title}
          handleDeleteClick={handleDeleteConfirmed}
        />
      )}
      {isAttentionModalOpen && !isUserRegistered && (
        <ModalAttention modalOpen={setIsAttentionModalOpen} />
      )}
    </div>
  );
};

export default NoticeCategoryItem;

// ======================
// -- code var --
// ======================

// import PropTypes from "prop-types";
// import { useSelector, useDispatch } from "react-redux";

// import * as toasty from "../../../shared/toastify/toastify";

// import ClockIcon from "../../../icons/ClockIcon";
// import FemaleIcon from "../../../icons/FemaleIcon";
// import LocationIcon from "../../../icons/LocationIcon";
// import HeartIcon from "../../../icons/HeartIcon";
// import TrashIcon from "../../../icons/TrashIcon";
// import MaleIcon from "../../../icons/MaleIcon";
// import PawPrintIcon from "../../../icons/PawPrintIcon";

// import Button from "../../../shared/components/ButtonNotices/ButtonNotices";
// import { selectIsLoggedIn } from "../../../redux/auth/auth-selectors";
// import useToggleModalWindow from "../../../shared/hooks/useToggleModalWindow";
// import useToggleModalDeleteCardNotice from "../../../shared/hooks/useToggleModalDeleteCardNotice";
// import Modal from "../../../shared/components/ModalWindow/Modal";
// import ModalDeleteCardNotice from "../../ModalDeleteCardNotice/ModalDeleteCardNotice";
// import { getFavorite, getUserId } from "../../../redux/auth/auth-selectors";
// import {
//   fetchAddToFavorite,
//   fetchRemoveFromFavorite,
//   fetchDeleteNotice,
// } from "../../../redux/notices/notices-operations";

// import NoticeModal from "../../../modules/NoticeModal/NoticeModal";

// import css from "./NoticeCategoryItem.module.css";

// const NoticeCategoryItem = ({
//   _id,
//   file,
//   category,
//   title,
//   location,
//   date,
//   sex,
//   comments,
//   breed,
//   owner,
//   name,
// }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const favorites = useSelector(getFavorite);
//   const userId = useSelector(getUserId);

//   const dispatch = useDispatch();

//   const handleFavoriteToggle = async () => {
//     if (!isLoggedIn) return toasty.toastInfo("You must be logged in");
//     if (favorites.includes(_id)) {
//       try {
//         await dispatch(fetchRemoveFromFavorite(_id));
//         toasty.toastSuccess("remove from favorite");
//         return;
//       } catch (e) {
//         toasty.toastError(e.message);
//       }
//     } else {
//       try {
//         await dispatch(fetchAddToFavorite(_id));
//         toasty.toastSuccess("add to favorite");
//         return;
//       } catch (e) {
//         toasty.toastError(e.message);
//       }
//     }
//   };
//   const { isModalOpen, openModal, closeModal } = useToggleModalWindow();
//   const { isModalOpenApprove, openModalApprove, closeModalApprove } =
//     useToggleModalDeleteCardNotice();

//   function getAge(date) {
//     const ymdArr = date.split(".").map(Number).reverse();
//     ymdArr[1]--;
//     const bornDate = new Date(...ymdArr);

//     const now = new Date();

//     const leapYears = (now.getFullYear() - ymdArr[0]) / 4;

//     now.setDate(now.getDate() - Math.floor(leapYears));

//     const nowAsTimestamp = now.getTime();
//     const bornDateAsTimestamp = bornDate.getTime();

//     const ageAsTimestamp = nowAsTimestamp - bornDateAsTimestamp;

//     const oneYearInMs = 3.17098e-11;

//     const age = Math.floor(ageAsTimestamp * oneYearInMs);
//     return age;
//   }

//   const age = getAge(date);

//   const checkFavorite = (_id) => {
//     if (favorites.includes(_id)) {
//       return true;
//     }
//     return false;
//   };

//   const checkOwner = (owner) => {
//     if (owner === userId) {
//       return true;
//     }
//     return false;
//   };
//   const handleDelete = (_id) => {
//     console.log(_id);
//     dispatch(fetchDeleteNotice(_id));
//     toasty.toastSuccess("Deleted successful");
//     closeModal();
//   };
//   return (
//     <li key={_id} className={css.listItems}>
//       <div className={css.myСomponent}>
//         <div className={css.imageThumb}>
//           <img className={css.photoAnimal} src={file} alt={title} width="280" />
//           <div className={css.topBlock}>
//             {category === "for-free" ? (
//               <p className={css.categoryInfo}>in good hands</p>
//             ) : (
//               <p className={css.categoryInfo}>{category}</p>
//             )}
//             <div>
//               <Button
//                 onClick={handleFavoriteToggle}
//                 className={css.topBtn}
//                 SVGComponent={() => (
//                   <HeartIcon
//                     className={
//                       checkFavorite(_id)
//                         ? `${css.icons} ${css.favoriteIcon}`
//                         : css.icons
//                     }
//                   />
//                 )}
//               />
//               {checkOwner(owner) && (
//                 <Button
//                   onClick={openModalApprove}
//                   className={css.topBtn}
//                   SVGComponent={() => <TrashIcon color="#54ADFF" />}
//                 />
//               )}
//               {isModalOpenApprove && (
//                 <ModalDeleteCardNotice
//                   closeModal={closeModalApprove}
//                   handleDelete={handleDelete}
//                   _id={_id}
//                   title={title}
//                 />
//               )}
//             </div>
//           </div>
//           <div className={css.infoCardBlock}>
//             <p className={css.noticeInfo}>
//               <LocationIcon className={css.icon} color="#54ADFF" />
//               {location}
//             </p>
//             <p className={css.noticeInfo}>
//               <ClockIcon className={css.icon} color="#54ADFF" />
//               {age === 1 ? "1 year" : `${age} years`}
//             </p>
//             <p className={css.noticeInfo}>
//               {sex.toLowerCase() === "male" && (
//                 <MaleIcon className={css.icon} color="#54ADFF" />
//               )}
//               {sex.toLowerCase() === "female" && (
//                 <FemaleIcon className={css.icon} color="#54ADFF" />
//               )}
//               {sex}
//             </p>
//           </div>
//         </div>
//         <div className={css.noticeDesc}>
//           <h3 className={css.noticeTitle}>{title}</h3>
//           <Button className={css.learnBtn} onClick={openModal}>
//             Learn more
//             <PawPrintIcon className={css.learnMoreButtonIcon} />
//           </Button>
//           {isModalOpen && (
//             // <Modal closeModal={closeModal}>
//             <NoticeModal
//               openModal={openModal}
//               _id={_id}
//               file={file}
//               category={category}
//               location={location}
//               date={date}
//               sex={sex}
//               title={title}
//               comments={comments}
//               breed={breed}
//               owner={owner}
//               name={name}
//               handleFavoriteToggle={handleFavoriteToggle}
//             />
//             // </Modal>
//           )}
//         </div>
//       </div>
//     </li>
//   );
// };
// export default NoticeCategoryItem;

// NoticeCategoryItem.propTypes = {
//   _id: PropTypes.string.isRequired,
//   file: PropTypes.string.isRequired,
//   category: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
//   sex: PropTypes.string.isRequired,
//   comments: PropTypes.string.isRequired,
//   breed: PropTypes.string.isRequired,
//   owner: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
// };
