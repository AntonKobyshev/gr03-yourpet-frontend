import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getAllNotices,
  selectNoticesLoading,
} from "../../../redux/notices/notices-selectors";
import { useParams } from "react-router-dom";
import { fetchAllNotices } from "../../../redux/notices/notices-operations";
import { getAllFavoriteNotices } from "../../../redux/auth/auth-selectors";
import { useLocation } from "react-router-dom";

import NoticeCategoryItem from "../NoticeCategoryItem/NoticeCategoryItem";

import css from "./NoticesCategoriesList.module.css";
import {
  selectAgeFilter,
  selectGenderFilter,
} from "../../../redux/filter/filter-selectors";
import { useEffect, useState } from "react";
import NoNoticesFound from "../NoNoticesFound/NoNoticesFound";

const NoticesCategoriesList = () => {
  const allNotices = useSelector(getAllNotices);
  const allFavoriteNotices = useSelector(getAllFavoriteNotices);
  const location = useLocation();
  const ageFilter = useSelector(selectAgeFilter);
  const genderFilter = useSelector(selectGenderFilter);
  const isLoading = useSelector(selectNoticesLoading);
  const dispatch = useDispatch();

  const [filteredNotices, setFilteredNotices] = useState([]);

  useEffect(() => {
    const filtered = allNotices.filter((notice) => {
      const isGenderMatch =
        genderFilter.length === 0 || genderFilter.includes(notice.sex);
      const isAgeMatch =
        ageFilter.length === 0 ||
        ageFilter.some((ageRange) => {
          if (ageRange === "0-1") {
            return (
              parseInt(notice.date.split(".")[2]) >=
              new Date().getFullYear() - 1
            );
          } else if (ageRange === "1-2") {
            const birthYear = parseInt(notice.date.split(".")[2]);
            const currentYear = new Date().getFullYear();
            return birthYear >= currentYear - 2 && birthYear < currentYear - 1;
          } else if (ageRange === "2+") {
            return (
              parseInt(notice.date.split(".")[2]) <=
              new Date().getFullYear() - 2
            );
          }
          return false;
        });
      return isGenderMatch && isAgeMatch;
    });

    setFilteredNotices(filtered);
  }, [allNotices, genderFilter, ageFilter]);

  const { category } = useParams();

   useEffect(() => {
    if (category) {
      dispatch(fetchAllNotices());
    }
  }, [category, dispatch]);

  const currentCategory = location.pathname.split("/")[2] || "sell";
  return (
    <div className={css.noticesListContainer}>
      {currentCategory === "favorites" ? (
        <ul className={css.noticeList}>
          {allFavoriteNotices &&
            allFavoriteNotices.map(({ _id, owner, ...props }) => (
              <NoticeCategoryItem
                key={_id}
                {...props}
                _id={_id}
                owner={owner}
              />
            ))}
        </ul>
      ) : (
        <ul className={css.noticeList}>
          {filteredNotices.length === 0 && !isLoading ? (
            <NoNoticesFound title="notice" />
          ) : (
            filteredNotices.map(({ _id, owner, ...props }) => (
              <NoticeCategoryItem
                key={_id}
                {...props}
                _id={_id}
                owner={owner}
              />
            ))
          )}
        </ul>
      )}
    </div>
  );
};
export default NoticesCategoriesList;

NoticesCategoriesList.defaultProps = {
  allFavoriteNotices: [],
};

NoticesCategoriesList.propTypes = {
  allFavoriteNotices: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      owner: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string,
        email: PropTypes.string.isRequired,
      }),
      props: PropTypes.string.isRequired,
    })
  ),
};
