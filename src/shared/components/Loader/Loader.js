import { RotatingTriangles } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.wrapper}>
      <RotatingTriangles
        visible={true}
        height="80"
        width="80"
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{}}
        wrapperClass="rotating-triangels-wrapper"
      />
    </div>
  );
};

export default Loader;
