import React from "react";
import NoticeCategoryItem from "../NoticeCategoryItem";
import css from "./NoticesCategoriesList.module.css";

const NoticesCategoriesList = () => {
  return (
    <>
      <ul className={css.list}>
        <NoticeCategoryItem />
      </ul>
    </>
  );
};

export default NoticesCategoriesList;
