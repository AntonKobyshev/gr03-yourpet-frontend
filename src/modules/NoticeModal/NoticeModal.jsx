import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getNoticesById,
  getNoticesByIdOwner,
} from "../../redux/notices/notices-selectors";
import { fetchNoticeById } from "../../redux/notices/notices-operations";
import Contact from "./Contact/Contact";
import AddToFavorite from "./AddToFavorite/AddToFavorite";

import css from "./notice-modal.module.css";

const NoticeModal = ({ handleFavoriteToggle, _id }) => {
  const dispatch = useDispatch();

  const item = useSelector(getNoticesById);
  const owner = useSelector(getNoticesByIdOwner);

  useEffect(() => {
    dispatch(fetchNoticeById(_id));
  }, [dispatch, _id]);

  return (
    <>
      <div className={css.myСomponent}>
        <div className={css.contentWrapper}>
          <div className={css.tabletBox}>
            <div className={css.imgThumb}>
              <p className={css.categoryInfo}>{item.category}</p>
              <img
                className={css.photo}
                src={item.file}
                alt={item.title}
                width="280"
              />
            </div>
            <table>
              <caption className={css.title}>{item.title}</caption>
              <tbody>
                <tr>
                  <td className={css.infoTitle}>Name:</td>
                  <td className={css.info}>{item.name}</td>
                </tr>
                <tr>
                  <td className={css.infoTitle}>Birthday:</td>
                  <td className={css.info}>{item.date}</td>
                </tr>
                <tr>
                  <td className={css.infoTitle}>Breed:</td>
                  <td className={css.info}>{item.breed}</td>
                </tr>
                <tr>
                  <td className={css.infoTitle}>Place:</td>
                  <td className={css.info}>{item.location}</td>
                </tr>
                <tr>
                  <td className={css.infoTitle}>The sex:</td>
                  <td className={css.info}>{item.sex}</td>
                </tr>
                <tr>
                  <td className={css.infoTitle}>Price:</td>
                  {item.price ? (
                    <td className={css.info}>{item.price} $</td>
                  ) : (
                    <td className={css.info}>free </td>
                  )}
                </tr>
                <tr>
                  <td className={css.infoTitle}>Email:</td>
                  <td>
                    <a href={`mailto:${owner.email}`} className={css.contacts}>
                      {owner.email}
                    </a>
                  </td>
                </tr>
                <tr>
                  {owner.phone && <td className={css.infoTitle}>Phone:</td>}
                  <td>
                    {owner.phone && (
                      <a href={`tel:${owner.phone}`} className={css.contacts}>
                        {owner.phone}
                      </a>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={css.commentsInfo}>
            <span className={css.commentsTitle}>Comments: </span>
            {item.comments}
          </p>
          <div className={css.btnWrapper}>
            <Contact phone={owner.phone} />
            <AddToFavorite
              handleFavoriteToggle={handleFavoriteToggle}
              _id={_id}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default NoticeModal;
