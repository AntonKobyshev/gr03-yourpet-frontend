import NewsItem from "../NewsItem/NewsItem";
import news from "../News.json";
import css from "./NewsList.module.css";

const NewsList = () => {
  const newsData = news;

  const sortedNews = [...newsData].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <ul className={css.list}>
      {sortedNews.map((sortedNews) => (
        <NewsItem key={sortedNews.id} news={sortedNews} />
      ))}
    </ul>
  );
};

export default NewsList;
