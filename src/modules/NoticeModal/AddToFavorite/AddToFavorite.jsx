import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { getFavorite } from "../../../redux/auth/auth-selectors";

import Button from "../../../shared/components/ButtonNotices/ButtonNotices";

import HeartIcon from "../../../icons/HeartIcon";
import css from "./addToFavorite.module.css";

const AddToFavorite = ({ handleFavoriteToggle, _id }) => {
  const favorite = useSelector(getFavorite);

  return (
    <>
      <div className={css.myСomponent}>
        {favorite.includes(_id) ? (
          <Button className={css.addTo} onClick={handleFavoriteToggle}>
            Remove
            <HeartIcon className={css.heartIcon} />
          </Button>
        ) : (
          <Button className={css.addTo} onClick={handleFavoriteToggle}>
            Add to
            <HeartIcon className={css.heartIcon} />
          </Button>
        )}
      </div>
    </>
  );
};
export default AddToFavorite;

AddToFavorite.propTypes = {
  handleFavoriteToggle: PropTypes.func,
};
