import React from "react";
import css from "./Tooltip.module.css";

const Tooltip = ({ children, text, show }) => (
  <div className={css.tooltip}>
    {children}
    {show && <span className={css.tooltipText}>{text}</span>}
  </div>
);

export default Tooltip;
