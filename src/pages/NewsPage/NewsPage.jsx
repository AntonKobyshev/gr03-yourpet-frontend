import React, { useEffect, useState } from "react";
import axios from "axios";
import css from "./NewsPage.module.css";
import NewsList from "../../modules/News/NewsList/NewsList";

const NewsPage = () => {
  return (
    <div className="container">
      <div className="news-page">
        <h1 className={css.title}>News</h1>
        <NewsList />
      </div>
    </div>
  );
};

export default NewsPage;
