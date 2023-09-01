import { RotatingTriangles } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.wrapper}>
      <RotatingTriangles
        colors={['#ffc107', '#54adff', '#FF7E6B']}
        visible={true}
        height="120"
        width="120"
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{}}
        wrapperClass="rotating-triangels-wrapper"
      />
    </div>
  );
};

export default Loader;
