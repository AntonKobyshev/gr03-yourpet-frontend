import NotFoundCat from "../../../images/noticesNotFoundCat.png";
import css from "./NoNoticesFound.module.css";
function NoNoticesFound({ title }) {
  return (
    <div className={css.bg}>
      <h2 className={css.title}>No {title} found. Please, come back later.</h2>
      <img src={NotFoundCat} alt="funny cat" className={css.image} />
    </div>
  );
}
export default NoNoticesFound;
