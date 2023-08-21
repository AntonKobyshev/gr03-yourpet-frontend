import { Link } from "react-router-dom";
import PawPrintIcon from "../../icons/PawPrintIcon";
import css from "./NotFound.module.css";

import oopsMobile1x from "../../images/404-mobile.png";
import oopsMobile2x from "../../images/404-mobile@2x.png";
import oopsTab1x from "../../images/404-tablet.png";
import oopsTab2x from "../../images/404-tablet@2x.png";
import oopsDesc1x from "../../images/404-desktop.png";
import oopsDesc2x from "../../images/404-desktop@2x.png";

const NotFoundRoute = () => {
  return (
    <section className={css.section}>
      <div className="container">
        <h2 className={css.text}>Ooops! This page not found:(</h2>
        <div className={css.wrapper}>
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet={`${oopsDesc1x}, ${oopsDesc2x} 2x`}
            />
            <source
              media="(min-width: 768px)"
              srcSet={`${oopsTab1x}, ${oopsTab2x} 2x`}
            />
            <img
              src={oopsMobile1x}
              srcSet={`${oopsMobile1x}, ${oopsMobile2x} 2x`}
              alt="Dogs and cat"
            />
          </picture>
        </div>
        <Link to="/main">
          <button className={css.btn}>
            To main page <PawPrintIcon className={css.icon} />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundRoute;
