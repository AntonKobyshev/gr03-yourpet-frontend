import React from "react";
import css from "./NewsItem.module.css";

const NewsItem = ({ news }) => {
  const inputDate = news.date;

  const dateObject = new Date(inputDate);

  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();

  const formattedDate = `${day}/${month < 10 ? "0" : ""}${month}/${year}`;

  return (
    <li className={css.item}>
      <div className={css.itemContentWrapper}>
        <img сlassName={css.newsImage} src={news.imgUrl} alt={news.title} />
        <div className={css.contentWrapper}>
          <h2 className={css.title}>
            {news.title.length > 58
              ? news.title.substring(0, 50) + "..."
              : news.title}
          </h2>
          <p className={css.text}>
            {news.text.length > 240
              ? news.text.substring(0, 240) + "..."
              : news.text}
          </p>
          <div className={css.dateReadMoreWrapper}>
            <p className={css.date}>{formattedDate}</p>
            <a
              className={css.readMoreLink}
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default NewsItem;
